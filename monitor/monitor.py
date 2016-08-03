# Monitors origin servers and updates CloudFlare to point to the good one.
# Uses "last updated at ..." text from the page to detect staleness.
# Favours the primary over the failover.
# Prequisites:
#  - If on ancient Ubuntu might need to use --upgrade with pip or use a venv
#  - pip install requests
#  - pip install cloudflare
#  - CloudFlare API details in ~/.cloudflare/cloudflare.cfg (careful!)
#  - origin server IP address in /etc/hosts

import re
from datetime import datetime, timedelta
from time import sleep
import socket

import requests
import Cloudflare

request_timeout_seconds = 10
check_interval_seconds = 30
stale_threshold_minutes = 10
max_history_size = 5
times_primary_bad_threshold = 4
times_failover_bad_threshold = 1

primary_host = 'origin.internal.kingoftheether.com'
failover_host = 'preprod.internal.kingoftheether.com'

def set_host_if_needed(host):
  if not host:
    return
  print('querying local DNS ...')
  try:
    target_ip = socket.gethostbyname(host)
  except Exception as ex:
    print('ERROR: failed to loop up IP for host, not changing: %s', (ex,))
  print('querying cloudflare API ...')
  try:
    cf = CloudFlare.CloudFlare()
    zone_and_record_name = 'kingoftheether.com'
    zones = cf.zones.get(params = {'name':zone_and_record_name,'per_page':1})
    zone_id = zones[0]['id']
    dns_records = cf.zones.dns_records.get(zone_id, params = {'type': 'A', 'name': zone_and_record_name})
    dns_record = dns_records[0]
    record_id = dns_record['id']
    current_ip = dns_record['content']
  except Exception as ex:
    print('ERROR: failed to query existing CloudFlare DNS record, not changing: %s', (ex,))
  if current_ip == target_ip:
    print('no change needed')
    return
  print('changing DNS record to %s ...', (target_ip,))
  dns_record['content'] = target_ip
  try:
    cf.zones.dns_records.put(zone_id, record_id, data=dns_record)
  except Exception as ex:
    print('ERROR: failed to change CloudFlare DNS record: %s', (ex,))

def decide(primary_history, failover_history):
  if len(primary_history) < max_history_size:
    return None
  num_times_primary_bad = len([x for x in primary_history if not x[0]])
  num_times_failover_bad = len([x for x in failover_history if not x[0]])
  print('out of %s, primary=%s bads, failover=%s bads' % \
    (max_history_size, num_times_primary_bad, num_times_failover_bad))
  if num_times_primary_bad >= times_primary_bad_threshold and \
     num_times_failover_bad <= times_failover_bad_threshold:
    return failover_host
  return primary_host

def check_server_and_update_history(host, history):
  status = check_server(host)
  return (history + [status])[-max_history_size:]

def check_server(host):
  print('checking %s ...' % (host,))
  try:
    raise_if_server_bad(host)
    print('good %s' % (host,))
    return (True, None)
  except Exception as ex:
    print('BAD %s: %s' % (host, ex))
    return (False, ex)

def raise_if_server_bad(host):
    throne_url = 'http://' + host + '/thrones/kingoftheether/index.html?monitor'
    # WARN: sadly timeout only applies to connect phase,
    # can still hang if server responds r e a l ly slowly.
    r = requests.get(throne_url, timeout=request_timeout_seconds)
    r.raise_for_status()
    text = r.text
    match = re.search(r'last updated at (\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d UTC)', text)
    if not match:
      raise Exception('could not find timestamp in page')
    timestamp_text = match.group(1)
    timestamp = datetime.strptime(timestamp_text, "%Y-%m-%d %H:%M:%S %Z")
    now = datetime.utcnow()
    delta = now - timestamp
    stale_threshold = timedelta(minutes=stale_threshold_minutes)
    if delta > stale_threshold:
      raise Exception('timestamp is stale: %s behind' % (delta,))

def main():
  primary_history = []
  failover_history = []
  while True:
    primary_history = check_server_and_update_history(primary_host, primary_history)
    failover_history = check_server_and_update_history(failover_host, failover_history)
    decision = decide(primary_history, failover_history)
    set_host_if_needed(decision)
    # TODO - should subtract time taken for checks from interval!
    # (perhaps with a minimum value to avoid hammering servers...)
    sleep(check_interval_seconds)

if __name__ == "__main__":
  main()
