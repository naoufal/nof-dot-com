#!/bin/bash

# Production
if [ "$NODE_ENV" == 'production' ]; then
  ./node_modules/.bin/gulp css
  ./node_modules/.bin/pm2 start app.js -f

# Development
else
  ./node_modules/.bin/gulp
fi

