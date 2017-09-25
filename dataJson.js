'use strict';
const Joi = require('joi');

//  declare the dataJson object which will store the modified user data
//  Pull data from the json object returned with the resutls
//  validate that the data is returned as expected using the Joi module

var dataJson = [];
var isMale = function(j,i){
  if(j.results[i].gender === 'male'){
    return true;
  }else{
    return false;}
};

// if the results are returned as expected parse the data for all relevant data

var genJson = function(j){
  if(j){
    if(j.results){
      for (var i = 0; i < j.results.length; i++){
        let account = {
          first_name:function(){
            let first_name = j.results[i].name.first.toString();
            return first_name.charAt(0).toUpperCase()+first_name.slice(1);
          }(),
          last_name:function(){
            let last_name = j.results[i].name.last.toString();
            return last_name.charAt(0).toUpperCase()+last_name.slice(1);
          }(),
          dob_ISO:j.results[i].dob,
          is_male:isMale(j,i),
          avatar:j.results[i].picture.thumbnail,
          username:j.results[i].login.username,
          password_length:j.results[i].login.password.length
        };
        dataJson.push(account);
      }
      const schema = Joi.object().keys({
        first_name: Joi.string(),
        last_name: Joi.string(),
        dob_ISO: Joi.string(),
        is_male: Joi.boolean(),
        avatar: Joi.string(),
        username: Joi.string(),
        password_length: Joi.number()
      });
      const services = Joi.array().items(schema);
      Joi.validate(dataJson, services, function (err, value) {
        if (err){
          console.log('joi validation error: ',err.details[0].message);
        }
        else {
          console.log(value);
        }
      });
    }
    else{
      console.log('no json results');
    }}
  else{
    console.log('no json from randomuser');
  }
};

module.exports = genJson;