#!/bin/bash

S3_BUCKET_NAME="jonathan-hooper-static-sites"
S3_SITE_DIR="www.animalincidentsbr.com"

# Build if there is no _site directory
if [[ ! -f ./dist/bundle.js ]] ; then
  npm run build
fi

# Sync with S3
aws s3 sync ./dist/ s3://$S3_BUCKET_NAME/$S3_SITE_DIR
