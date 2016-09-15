# arij

[![Build Status](https://travis-ci.org/czytelny/arij.svg?branch=master)](https://travis-ci.org/czytelny/arij)

# What it's going to be
This is going to be issue(task) manager (JIRA-like tool), but with signifficant differences:
- ruthlessly simple, yet flexible
- extremally easy to setup
- blazing fast
- free of any charge & opensourced

# What it's right now?
Project is in early development (something like pre-alpha 0.0.1 phase), so if you are not a developer who whould like to contribute there is no point to downloading it right now.


### Development
- install all dependencies `npm install`
- run MongoDB (mongod.exe) with default config
- backend side: Node.js 6.2, express.js, socket.io
- client side: React, Redux, socket.io 
- use ES6 through Babel
- testing: mocha, chai, sinon

##### npm scripts
- `npm run server` starts nodejs server in development mode (through babel-node - to transpile ES6 in the fly)
- `npm run test:server` starts mocha tests for *backend*
- `npm run test:server:watch` like `test:server` but in watch mode
- `npm run build:public` builds client side (through browserify with es2015 and react presets) and puts it in `public/dist/arij.js`
- `npm run build:public:watch` like build:public but in watch mode
- `npm run build:public:vendor` build vendor bundle for client side (react, redux, socket.io-client etc)

##### other 
- if using Webstorm turn off "safe save" option - npm's watch has problem with it. `ctrl+alt+s-> Appearance & Behaviour-> System settings-> uncheck "Use 'safe write'` 

