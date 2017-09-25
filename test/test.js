'use strict';
const pullData = require('../pullData.js');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const proxyquire =  require('proxyquire');
var assert = require('assert');

//  test the pulldata method to check if a value is returned
lab.test('test pull data result', () => {
  return pullData()
    .then((aValue) => {
      Lab.expect(aValue.results.length).to.equal(3);}
    );});


//  Test the fetch error handler
var fetch = proxyquire('../pullData', {
  'node-fetch': function () {
    process.nextTick(function () {
      return new Promise(function() {
        return ({'name':'test'});
      });
    });
  }});

fetch(function (err, res) {
  assert(res.statusCode, 200);
});