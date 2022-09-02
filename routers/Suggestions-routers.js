const express=require('express')
const route=express.Router()
const db=require('../models')

route.post('/createSuggestions', (req,res,next)=>{
    db.Suggestions.create(req.body).then((response)=>
        res.status(200).send(response)
    )
    .catch((err)=>res.status(400).send(err))
})

route.post('/createIngredient', (req,res,next)=>{
    db.Ingredient.create(req.body).then((response)=>
        res.status(200).send(response)
    )
    .catch((err)=>res.status(400).send(err))
})

// fetch by day and ingredient 
route.get('/cooktime/:ingredient/:date' ,(req,res,next)=>{
    db.Ingredient.findAll({where:{name_Ingredient:req.params.ingredient},include:[db.Suggestions]})
    .then((response)=>{
        // db.Suggestions.findAll({where:{date:req.params.date,id:response.SuggestionId }}).then((resp)=>{
            res.status(200).send(response)
        // })  
    })
    .catch((err)=>res.status(400).send(err))
})

// fetch all by  day 
// route.get('/:ingredient/:day' ,(req,res,next)=>{
//     db.Suggestions.findAll({where:{date:req.params.day},include:[db.Ingredient]})
//     .then((response)=>{
//         response.Suggestions.findAll({where:{Ingredients.name_Ingredient:}}).then((res)=>{
//             res.status(400).send(res)
//         })
//     })
//     .catch((err)=>res.status(400).send(err))
// })

// fetch by day 
route.get('/suggest/:date' ,(req,res,next)=>{
    db.Suggestions.findOne({where:{date:req.params.date},include:[db.Ingredient]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

// fetch all suggest
route.get('/Allsuggest' ,(req,res,next)=>{
    db.Suggestions.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

// fetch by id suggest
route.get('/sud/:id' ,(req,res,next)=>{
    db.Suggestions.findOne({where:{id:req.params.id},include:[db.Ingredient]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

// fetch all ingredient
route.get('/Allingredient' ,(req,res,next)=>{
    db.Ingredient.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

// fetch by ingredient
route.get('/ingredient/:name_Ingredient' ,(req,res,next)=>{
    db.Ingredient.findOne({where:{name_Ingredient:req.params.name_Ingredient},include:[db.Suggestions]})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
})

module.exports=route


