const { Router } = require("express");
const verifyToken = require("../../utils/jwt")
const parseId = require('../../utils/parseId')
const banned = require('../../db/models/Banned') 
const modelateData = require('../../utils/modelateData')

const api = Router();

api.get("/", verifyToken, async (req, res) => {
    try{
        const {isAdmin} = req.user;
        const {page} = req.query
        if(isAdmin){
            const usersBanned = await banned.find()
            let info = modelateData(page || 1,usersBanned)
            res.status(200).json(info)
        }else{
            throw new Error('Token invalido')
        }
    }catch(err){
        res.status(200).json({error:err.message})
    }
})

api.get("/:id", verifyToken, async (req, res) => {
    try{
        const {isAdmin} = req.user;
        const {id} = req.params;
        if(isAdmin){
            const data = await banned.find({_id: id})
            res.status(200).json(data)
        }else{
            throw new Error('Token invalido')
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

api.post("/", verifyToken, async (req, res) => {
    try{
        const {user_banned} = req.body;
        const {isAdmin} = req.user;
        if(isAdmin){
            let userBanned={
                user_banned: user_banned,
            }
            let infoUserBaned = await banned.create(userBanned) 
            res.status(200).json(infoUserBaned)
        }else{
            throw new Error('Token invalido')
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

api.delete("/:id", verifyToken, async (req, res) => {
    try{
        const {isAdmin} = req.user;
        const {id} = req.params;
        if(isAdmin){
            let info = banned.deleteOne({_id: parseId(id)})
            res.status(200).json(info)
        }else{
            throw new Error('Token invalido')
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

module.exports = api;