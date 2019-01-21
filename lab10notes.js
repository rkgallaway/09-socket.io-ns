'use strict';

const Q = require('./lib/server.js');

const db = new Q('database'); //namespace
db.monitorEvent('create'); //rooms  **very specific, can't join room that doesn't exist. save socket for users
db.monitorEvent('update');
db.monitorEvent('delete');

const network = new Q('network');
network.monitorEvent('attack');
network.monitorEvent('no-service');


//logger.js
const Q require('../lib/subscriber.js');  //also server and publisher

const db = new Q('database');

db.subscribe('delete', (payload))

//publisher // simulator

const publisher = require('')
const Q = new Publisher

//publisher is a way to   //notes for lab 10