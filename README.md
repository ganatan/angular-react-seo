# angular-starter
- Date : 12/11/2018 10:44
- Author : chendra

# Demo
https://angular.ganatan.com/

# Goal
- Angular Project (v 6.1.9)
- SSR (server side rendering)
- Routing
- Lazy-loading
- Bootstrap (v 4.1.3)
- httpclient
- Transferstate
- PWA

# Prerequisites
- Angular / Version 6.1.9
- Angular-cli / Version 6.2.4
- Angular-universal / Version 6.1.0
- Node.js / Version v8.12.0
- npm / Version 6.4.1
- Typescript / Version 2.9.2
- Visual studio code / Version 1.27.2
- Boostrap / Version 4.1.3
- Jquery / Version 3.3.1
- fontawesome / Version 4.7.0

# Installation
- npm install (installing dependencies)
- npm outdated (verifying dependencies)

# Developpement
- npm run start
- http://localhost:4200

# AOT Compilation 
- npm run build
- http-server -p 8080 -c-1 dist/Browser 
- http://localhost:8080/

# Tests
- npm run lint
- npm run test
- npm run e2e

# SSR Compilation 
- npm run build:ssr (ssr compilation )
- compiled Browser files in output directory : dist/Browser
- compiled Server files in output directory : dist/Server 

# SSR Production
- npm run serve:ssr
- http://localhost:4001

# Tutoriaux
- https://www.ganatan.com/docs

# Ubuntu deployment
- pm2 start process.config.js --env prod
- sudo scp nginx.conf /etc/nginx
- sudo service nginx restart

