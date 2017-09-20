'use strict';
const pullData = require('./pullData.js');
const jsonCreate = require('./dataJson.js');

var data = new pullData();
var genJson = new jsonCreate();
data.then(function(json){
  jsonCreate(json);
});