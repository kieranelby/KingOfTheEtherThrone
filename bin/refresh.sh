#!/bin/bash
set -euo pipefail

cd /home/kgen/KingOfTheEtherThrone

npm install --production

while true; do 
    npm run chain-to-data http://localhost:8545 0xEDCA5Cf34E4AEa9798127B21751bFfB1609684FF
    npm run data-to-website
    echo "Copying to webserver ..."
    rsync -r generated/ /var/www/kingoftheether/
    echo "Sleeping ..."
    sleep 30
done
