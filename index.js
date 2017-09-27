'use strict';
const pullData = require('./pullData.js');
const jsonCreate = require('./dataJson.js');

//  Using the pullData method query Randomuser for fake user data
//  parse the results and create a json object

pullData().then(function(json){
  jsonCreate(json);
});
