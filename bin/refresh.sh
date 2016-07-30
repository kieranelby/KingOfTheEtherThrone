#!/bin/bash
set -euo pipefail

cd /home/kgen/KingOfTheEtherThrone

npm install

while true; do 
    npm run chain-to-data http://localhost:8545 0xe15551395A6832439B54D21E892EBe6c90a49B5A
    npm run data-to-website
    echo "Copying to webserver ..."
    rsync -r generated/ /var/www/kingoftheether/
    echo "Sleeping ..."
    sleep 30
done
