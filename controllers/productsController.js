const productsModel = require("../models/productsModel")
const categoryModel = require("../models/categoriesModel")
module.exports={
    //lee solo productos destacados
    getAll: async function(req, res, next) {
        try{
            const documents = await productsModel.find({destacado:true}).populate("category")
            res.json(documents)
            console.log(documents)
        }catch(e){
            console.log(e)
        }
    },
    //Leer por ID
    getById: async function(req, res, next) {
        console.log(req.params)
        try{
            const documents = await productsModel.findById(req.params.id).populate("category")
            res.json(documents)
        }catch(e){
            console.log(e)
        }
    },
    //creaq un producto
    create: async function(req, res, next) {
        console.log(req.body)
        try{
            const category = await categoryModel.findBydIdAndValidate(req.body.category)
            console.log(category)
            if(category.error){
                res.json(category)
                return;
            }
            const product = new productsModel({
                name:req.body.name,
                sku:req.body.sku,
                description:req.body.description,
                price:req.body.price,
                category:req.body.category,
                destacado:req.body.destacado
            })
            const document = await product.save()
            res.json(document)
        }catch(e){
            console.log(e)
        }
        
        
    }, 
    //elimina un producto
    delete: async function(req, res, next) {
          try{
            console.log(req.params)
            const producto = await productsModel.deleteOne({_id:req.params.id})
            res.json(producto)
          }catch(e){
            next(e)
          }
      },
    //actualiza un producto
    update:async function(req, res, next) {
        try{
            console.log(req.params)
            console.log(req.body)
            const producto = await productsModel.updateOne({_id:req.params.id},req.body)
            res.json(producto)
        }catch(e){

        }
      }
   
}
