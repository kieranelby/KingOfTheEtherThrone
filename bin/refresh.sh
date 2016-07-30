#!/bin/bash
set -euo pipefail

cd /home/kgen/KingOfTheEtherThrone

npm install

while true; do 
    npm run chain-to-data http://localhost:8646 0xc41e3a6e381fe5d1331da38acf08cc9d48b111a8
    npm run data-to-website
    rsync -r generated/ /var/www/kingoftheether/
    sleep 30
done
