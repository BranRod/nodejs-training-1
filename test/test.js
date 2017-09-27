'use strict';
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const proxyquire =  require('proxyquire');

let pullData = proxyquire('../pullData', {
  'node-fetch': function () {
    return new Promise(function(resolve){
      process.nextTick(function () {
        console.error('log 2');
        return resolve({
          'results':[{
            'name':'test'
          }]
        }
        );
      });
    });
  }});

//  test the pulldata method to check if a value is returned
lab.test('test pull data result', () => {
  return pullData()
    .then((aValue) => {
      console.log(aValue);
      Lab.expect(aValue);
    }
    );});
