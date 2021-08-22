const mongoose = require("../bin/mongodb")
const errorMessage=require("../util/errorMessage")

const productSchema = new mongoose.Schema({
   name:{
      type:String,
      required:[true,errorMessage.GENERAL.campo_obligatorio],
      minlength:[3,errorMessage.GENERAL.minlength]
   },
   sku:String,
   description:String,
   price:Number,
   category:{
      type:mongoose.Schema.ObjectId,
      ref:"categories"
   },
   destacado:{
      type:Boolean
   }
})
productSchema.statics.findBydIdAndValidate = async function(id){
   const document = await this.findById(id);
   if(!document){
       return{
           error:true,
           message:"No existe categoria"
       }
       
   }
   return document;
}
module.exports = mongoose.model("productos",productSchema)