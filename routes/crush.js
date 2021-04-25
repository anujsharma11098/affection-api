if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

const CrushFrom = require('../models/crushFrom')
const CrushTo = require('../models/crushTo')


router.post('/',async (req, res)=>{
    try{
        let { user_id , crush } = req.body;
        let crushTo = await CrushTo.create({user_id,crush_to_id:crush});
        let crushFrom = await CrushFrom.create({user_id:crush,crush_from_id:user_id});
        res.send({status:200,crushTo,crushFrom});
    }catch(err){
        return res.send({ status:400, msg:err.message });
    }
})



module.exports = router