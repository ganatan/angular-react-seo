# angular-starter
- Date : 10/09/2018 15:34
- Author : chendra

# Demo
http://angular.ganatan.com/

# Goal
- Basic Angular Project (version 6.1.7)
- SSR (server side rendering)
- Routing
- Lazy-loading
- Bootstrap (v 4.1.3)


# Prerequisites
- Angular / Version 6.1.7
- Angular-cli / Version 6.1.5
- Angular-universal / Version 6.1.0
- Node.js / Version v8.11.4
- npm / Version 6.4.0
- Typescript / Version 2.9.2
- Visual studio code / Version 1.26
- Boostrap / Version 4.1.3
- Jquery / Version 3.3.1
- fontawesome / Version 4.7.0

# Installation
- npm install (installing dependencies)
- npm outdated (verifying dependencies)

# Developpement
- npm run start
- http://localhost:4200

# Tests
- npm run lint
- npm run testnpm run lint

- npm run e2e

# AOT Compilation 
- npm run build
- compiled files in output directory : dist/Browser 

# AOT / SSR Compilation 
- npm run build:ssr (aot / ssr compilation )
- compiled Browser files in output directory : dist/Browser
- compiled Server files in output directory : dist/Server 

# Production
- npm run serve:ssr
- http://localhost:4001

# Tutoriels
- www.ganatan.com/tutorials

# Ubuntu deployment
pm2 start process.config.js --env prod
sudo scp nginx.conf /etc/nginx
sudo service nginx restart

# Ubuntu docker deployment
docker-compose up -d
