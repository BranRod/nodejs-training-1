'use strict';
const pullData = require('../pullData.js');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

//  const { expect, experiment, it } = exports.lab = require('lab').script();
// lab.test('returns true when 1 + 1 equals 2', (done) => {
//     Lab.expect(1 + 1).to.equal(2);
//     done();
// });

lab.test('test pull data result', () => {
  return pullData()
    .then((aValue) => {
      Lab.expect(aValue.results.length);}
    );});


//Test that pulldata returns good data or the correct error