'use strict';
const fetch = require('node-fetch');
const pullData = function(){

    return fetch('https://randomuser.me/api/?results=3').then(res => {
      return res.json();
    }).catch(function(error){
      console.log("error: ", error);
    });

    console.log('test');
};

module.exports = pullData;
