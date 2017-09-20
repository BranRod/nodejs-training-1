'use strict';
const fetch = require('node-fetch');
let numResults = "3";
if (numResults != null && numResults != "0"){
  numResults = numResults;
}
else{
  numResults = "0";
}
const pullData = function(){

    return fetch('https://randomuser.me/api/?results='+numResults).then(res => {
      return res.json();
    }).catch(function(error){
      console.log("error: ", error);
    });
};

module.exports = pullData;

//make the number of results variable...check