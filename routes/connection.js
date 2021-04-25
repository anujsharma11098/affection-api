if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

const Connection = require('../models/connection')

router.get('/:id', async (req, res) => {
    const connections = await Connection.find({where: {id: req.params.id}})
    res.json({ status: 200, users })
})

// Create Connection

router.post('/new_connection',async (req, res) => {
    try{
        let { user_id , friend_profile } = req.body;
        Connection.exists({user_id:user_id},async function(err,doc){
            if(doc){
                let FriendResponse = await Connection.findOne({user_id:user_id});
                console.log({FriendResponse});
                FriendResponse.connections.push(friend_profile);
                FriendResponse.save();
                return res.json({ status: 200, FriendResponse })
            }
            else{
                let connectionArray =[];
                connectionArray.push(friend_profile);
                let ConnectionResponse = await Connection.create({
                    user_id,
                    connections:connectionArray
                })
                return res.json({ status: 200, msg:'Successfully Created', response : ConnectionResponse })
            }
        })
    }catch(err){
        return res.send({ status:400, msg:err.message });
    }
})


module.exports = router