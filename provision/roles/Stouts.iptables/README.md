Stouts.iptables
===============

[![Build Status](http://img.shields.io/travis/Stouts/Stouts.iptables.svg?style=flat-square)](https://travis-ci.org/Stouts/Stouts.iptables)
[![Galaxy](http://img.shields.io/badge/galaxy-Stouts.iptables-blue.svg?style=flat-square)](https://galaxy.ansible.com/list#/roles/920)

Ansible role which manage iptables

#### Variables

THe role variables and default values.

```yaml
iptables_enabled: yes                   # The role is enabled
iptables_logging: yes                   # Log dropped packets

iptables_deny_all : yes                 # deny all except allowed

iptables_rules_path: /etc/iptables.rules # Path to rule file
iptables_load_path: /etc/network/if-up.d/iptables_load # Set empty for prevent loading

iptables_allowed_tcp_ports: [22, 25, 80, 443] # List of allowed tcp ports
iptables_forwarded_tcp_ports: []        # Forward tcp ports
                                        # Ex. iptables_forwarded_tcp_ports:
                                        #       - { from: 22, to: 2222 }

iptables_allowed_udp_ports: []          # List of allowed udp ports
iptables_forwarded_udp_ports: []        # Ex. iptables_forwarded_udp_ports:
                                        #       - { from: 22, to: 2222 }

iptables_raw_rules: []                  # List of raw rules
                                        # Ex. iptables_raw_rules:
                                        #     - -A INPUT -i eth0 -p tcp -m tcp --dport 22 -j ACCEPT
                                        #     - -A INPUT -i eth0 -p tcp -m tcp --dport 80 -j ACCEPT
```

#### Usage

Add `Stouts.iptables` to your roles and setup the variables in your playbook file.
Example:

```yaml

- hosts: all

  roles:
    - Stouts.iptables

  vars:
    iptables_allowed_tcp_ports: [22]
    iptables_forwarded_tcp_ports:
    - {from: 22, to: 2222}
```

#### License

Licensed under the MIT License. See the LICENSE file for details.

#### Feedback, bug-reports, requests, ...

Are [welcome](https://github.com/Stouts/Stouts.iptables/issues)!

If you wish to express your appreciation for the role, you are welcome to send
a postcard to:

    Kirill Klenov
    pos. Severny 8-3
    MO, Istra, 143500
    Russia
