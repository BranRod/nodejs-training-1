const Joi = require('joi');

var dataJson = [];
var isMale = function(j,i){if(j.results[i].gender === "male"){return true;}else{return false;}};

var genJson = function(j){
  if(j){
   for (var i = 0; i < j.results.length; i++){
     let first_name = j.results[i].name.first.toString();
     first_name = (first_name.charAt(0).toUpperCase()+first_name.slice(1));
     let last_name = j.results[i].name.last.toString();
     last_name = (last_name.charAt(0).toUpperCase()+last_name.slice(1));
     let dob_ISO = j.results[i].dob;
     let is_male = isMale(j,i);
     let avatar = j.results[i].picture.thumbnail;
     let username = j.results[i].login.username;
     let password_length = j.results[i].login.password.length;
     var account = {"first_name":first_name,"last_name":last_name,"dob_ISO":dob_ISO,"is_male":is_male,"avatar":avatar,"username":username,"password_length":password_length};
     dataJson.push(account);
     console.log(dataJson);
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
       console.log(err);
      //  console.log(value);
     })
     
  }}};


module.exports = genJson;
