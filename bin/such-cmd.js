#!/usr/bin/env node
var doge = require('../lib/such-code.js');

if(process.argv.length > 2)
  doge(process.argv[2]);
else
  console.log('much undefined');
