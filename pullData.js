'use strict';

// use the fetch module to quert the Random User api

const fetch = require('node-fetch');
let numResults = '3';
if (numResults != null && numResults != '0'){
  numResults;
}
else{
  numResults = '0';
}

//  Query the random user api to return 3 profiles
const pullData = function(){
  return fetch('https://randomuser.me/api/?results='+numResults).then(res => {
    return res.json();
  }).catch(function(error){
    console.log('error message: ', error.message);
    return error;
  });
};

module.exports = pullData;

//  make the number of results variable...check
