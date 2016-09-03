# arij

[![Build Status](https://travis-ci.org/czytelny/arij.svg?branch=master)](https://travis-ci.org/czytelny/arij)

### Development
- install all dependencies `npm install`
- run MongoDB (mongod.exe) with default config
- backend side: node.js 6.2, express.js, socket.io, redux, mocha, chai, sinon
- client side: react, redux 
- use ES6 through Babel

##### npm scripts
- `npm run server` starts nodejs server in development mode (through babel-node - to transpile ES6 in the fly)
- `npm run test:server` starts mocha tests for *backend*
- `npm run test:server:watch` like `test:server` but in watch mode
- `npm run build:public` builds client side (through browserify with es2015 and react presets) and puts it in `public/dist/arij.js`
- `npm run build:public:watch` like build:public but in watch mode
- `npm run build:public:vendor` build vendor bundle for client side (react, redux, socket.io-client etc)

##### other 
- if using Webstorm turn off "safe save" option - npm's watch has problem with it. `ctrl+alt+s-> Appearance & Behaviour-> System settings-> uncheck "Use 'safe write'` 

