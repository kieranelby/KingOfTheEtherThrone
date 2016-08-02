import re
import requests
from datetime import datetime


def check_server(hostname):
  # todo - check for exceptions!
  throne_url = 'http://' + hostname + '/thrones/kingoftheether/index.html'
  r = requests.get(throne_url, timeout=10)
  r.raise_for_status()
  text = r.text
  match = re.search(r'last updated at (\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d UTC)', text)
  if not match:
    raise Exception('could not find timestamp in page')
  timestamp_text = match.group(1)
  timestamp = datetime.strptime(timestamp_text, "%Y-%m-%d %H:%M:%S %Z")
  now = datetime.utcnow()
  delta = now - timestamp
  print('%s => %s' % (hostname, delta))

check_server('origin.internal.kingoftheether.com')
check_server('preprod.internal.kingoftheether.com')

# TODO
# if primary down but failover not, use failover
# otherwise use primary
# but avoid flip-flopping!

