# Angular-starter
- Date : 23/08/2018 07:04
- Author : chendra

# Demo
http://starter.ganatan.com/

# Goals
- Basic Angular Project (version 6.1.4)
- SSR (server side rendering)
- Routing
- Lazy-loading

# Prerequisites
- Angular / Version 6.1.4
- Angular-cli / Version 6.1.4
- Angular-universal / Version 6.1.0
- Node.js / Version v8.11.4
- npm / Version 6.4.0
- Typescript / Version 2.9.2
- Visual studio code / Version 1.26.1

# Installation
- npm install (installing dependencies)
- npm outdated (verifying dependencies)

# Developpement
- npm run start
- http://localhost:4200

# Tests
- npm run lint
- npm run test
- npm run e2e

# AOT Compilation 
- npm run build
- compiled files in output directory : dist/Browser 

# AOT / SSR Compilation 
- npm run build:ssr (aot / ssr compilation )
- compiled files in output directory : dist/Browser , dist/Server 

# Production
- npm run serve:ssr
- http://localhost:4001

# Tutoriels
- www.ganatan.com/tutorials

# Ubuntu deployment
pm2 start process.config.js --env prod
sudo scp nginx.conf /etc/nginx
sudo service nginx restart