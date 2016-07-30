#!/bin/bash
set -euo pipefail

cd /home/kgen/KingOfTheEtherThrone

while true; do 
    npm run chain-to-data http://localhost:8646 0xc41e3a6e381fe5d1331da38acf08cc9d48b111a8
    npm run data-to-website
    rsync generated/ /var/www/kingoftheether/
done
