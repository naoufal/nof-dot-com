#!/bin/bash

# Production
if [ "$NODE_ENV" == 'production' ]; then
  ./node_modules/.bin/pm2 start app.js

# Development
else
  ./node_modules/.bin/postcss --use autoprefixer -o assets/css/style.css assets/css/style.css
  ./node_modules/.bin/pm2-dev run app.js
fi

