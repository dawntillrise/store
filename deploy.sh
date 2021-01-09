#!/usr/bin/env bash
set -e

echo "Deploying master to production"

cd client && npm run build
git push heroku main
heroku run sequelize db:migrate