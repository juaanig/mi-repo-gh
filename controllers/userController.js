const userModel = require("../models/userModel") 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports={

    logUp: async function(req, res, next) {
        console.log(req.body)
        try{
            const user = new userModel({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            const document = await user.save()
            res.json(document)
        }catch(e){
            console.log(e)
        }
    },
    logIn:async function(req, res, next) {
        try{
          const user = await userModel.findOne({email:req.body.email})
          if(!user){
            res.json({error:true,message:"Email incorrecto"})
            return
          }
          if(bcrypt.compareSync(req.body.password,user.password)){
            const token = jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
            res.json({error:false,message:"Login Ok",token:token})
            return
          }else{
            res.json({error:true,message:"Contraseña incorrecto"})
            return
          }
        }catch(e){
          if(e.message){
            res.status(500).json({status:"error",mensaje:e.message})
            return
          }
          next(e)
        }
        
    }
}