const Joi = require('joi');

var dataJson = [];
var validation = false;
var isMale = function(j,i){if(j.results[i].gender === "male"){return true;}else{return false;}};

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

  };
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
    console.log(err.details[0].message);
  }
  else {console.log(value);}
  });

}
else{
  console.log("no json results");
}}
else{
  console.log('no json object from randomuser')
}};



module.exports = genJson;


//turn the json results into a method...check
//add an error for if there's no j
//if j.results exits