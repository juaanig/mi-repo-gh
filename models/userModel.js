const mongoose = require("../bin/mongodb")
const errorMessage=require("../util/errorMessage")
const validators = require("../util/validators")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
   name: {
       type:String,
       required:[true,errorMessage.GENERAL.campo_obligatorio]
   },
   email:{
       type:String,
       unique:true,
       required:[true,errorMessage.GENERAL.campo_obligatorio],
       validate:{
          validator:function(v){
              return validators.emailValidate(v)
          },
          message:errorMessage.USERSWEB.userExist
       }
   },
   password:{
       type:String,
       required:[true,errorMessage.GENERAL.campo_obligatorio],
       validate:{
           validator:function (v){
               return validators.isGoodPassword(v)
           },
           message:errorMessage.USERSWEB.passwordIncorrect
       }
   }
});
//la funcion se ejecuta antes del "save" .
userSchema.pre("save",function(next){
   this.password = bcrypt.hashSync(this.password,10)
   next()
})
module.exports = mongoose.model("usuarios",userSchema)