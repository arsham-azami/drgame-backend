const express = require('express')
const router = express.Router()
const Joi = require('joi')

const data = require('../data.json')


 router.get('/', (req, res) => {
    res.send(data)
 })

 
 router.get('/:id', (req, res)=>{

    const product = data.find( pro => pro.id === parseInt(req.params.id))
    if(!product) {
       return res.status(404).send(`the product with id ${req.params.id} wasn't found`)
    }else{
       return res.send(product)
    }

  })
 
 router.post('/', (req, res) =>{
 
// //    const pattern = /[$]\d+/
 
//    const validating = Joi.validate(req.body, {
 
//         product_name: Joi.string().required(),
//         company: Joi.string().required(),
//         price: Joi.string()
      
//      })
     
   //   if(validating.error){
   //       res.status(400)
   //   }else{
 
      
     
      data.push({
 
          id: data.length + 1 ,
          product_name: req.body.product_name,
          company: req.body.company,
          price: req.body.price,
          rating: req.body.rating
      
        })
     
      res.send(newpro)
     
      
  })
 
  router.put('/:id', (req, res)=>{
 
     const product = data.find( pro =>  pro.id === parseInt(req.params.id))
     if(!product) res.status(404).send(`the product with id ${req.params.id} wasn't found`)
     
     else {

        product.product_name= req.body.product_name
        product.company = req.body.company
        product.price = req.body.price
    
        res.send(product) 
     
      }
 })
 
 router.delete('/:id', (req, res)=>{
     
     const product = data.find( pro => pro.id === parseInt(req.params.id))
     if(!product) res.status(404).send(`the product with id ${req.params.id} wasn't found`)
     else  res.send(product)
 
     const index = data.indexOf(req.params.id)
     data.splice(index, 1)
 
     res.send(data)
 })


 module.exports = router