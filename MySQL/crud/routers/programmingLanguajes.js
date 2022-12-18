const express=require('express');
const router =express.Router();
const programmingLanguajes=require('../services/programmingLanguajes');


router.get('/',async function(req,res,next){
    try {
        res.json(await programmingLanguajes.read(req.query.page))
    } catch (error) {
        console.log("Este es el error: " + error.message);
        next(error);
    }
});

router.post('/', async function(req,res,next){
    try {
        res.json(await programmingLanguajes.create(req.body))
    } catch (error) {
        console.log("Este es el error: " + error.message);
        next(error);
    }
});

router.put('/', async function(req,res,next){
    console.log(req.body.id);
    try {
        res.json(await programmingLanguajes.update(req.params.id, req.body))
    } catch (error) {
        console.log("Este es el error: " + error.message);
        next(error);
    }
});

module.exports=router;