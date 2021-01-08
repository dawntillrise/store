#!/usr/bin/env bash
set -e

echo "Deploying master to production"

git push heroku main
heroku run sequelize db:migrate