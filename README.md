![CF](http://i.imgur.com/7v5ASc8.png) LAB 09
=================================================

## 09-socket.io-ns

### Author: Ryan Gallaway

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/09-socket.io-ns.svg?branch=master)](https://www.travis-ci.com/rkgallaway/09-socket.io-ns)

* [repo](https://github.com/rkgallaway/09-socket.io-ns)
* [travis](https://www.travis-ci.com/rkgallaway/09-socket.io-ns)
* [heroku](https://lab-09-socket-io-ns.herokuapp.com)

### Modules
#### `app.js`
##### Exported Values and Methods

## Before you begin
Visit / Bookmark the [Running Client Application](https://pmww0ww42q.codesandbox.io/) which you will be testing against.

## Assignment
Develop a server that accepts connections to 2 namespaces: `numbers` and `letters`, each with a room (`negative` and `lowercase`) that can be optionally joined by a client.

Compose an `app.js` that runs an interval and emits specific events to the server periodically, for testing.

We have deployed a front-end application written in React that will connect a socket.io server running at http://localhost:3000 and to the namespaces and rooms specified below.  This application will automatically connect and respond to events and display the data published by your server.

### Requirements 

#### server.js

* Start a server with 2 global variables
  * counter = 0
  * letter = A
* Allow inbound connections on 2 namespaces
  * `/numbers`
  * `/letters`
* Within each namespace, allow users to join an arbitrary room
* For the `numbers` namespace
  * Respond to an event named `next-number`
  * `emit()` an event called `number` with the global counter, increased by 1.
  * For anyone connected to this namespace AND in the `negative` room
    * `emit()` an event called `_number` with the negative value of the global counter
* For the `letters` namespace
  * Respond to an event named `next-letter`
  * `emit()` an event called `letter` with the next letter in the alphabet
  * For anyone connected to this namespace AND in the `lowercase` room
    * `emit()` an event called `_letter` with the lowercase value of the current letter

### Setup
#### `.env` requirements
* `PORT` - Port described in ENV, but shouldn't be necessary for this use case

#### Running the app
* `npm i` to install aockages
* `nodemon` to run app.js
* `node client.js` to run client.js
* `node server.js` to run server
* [visit:](https://pmww0ww42q.codesandbox.io/) to see results

#### Tests
* `npm test` to run test
* strings are lower cased to enter lowercase room
* SpyOn should be used to mock incremented numbers and letters

