const { Router } = require("express");
require('dotenv').config();
const { PASSWORD_ADMIN, TOKEN_KEY } = process.env;
const jwt = require('jsonwebtoken');


const api = Router();


// Ruta para subir imágenes
api.post("/", async (req, res) => {
  try {
    let {isAdmin, password} = req.body
    if(isAdmin && password == PASSWORD_ADMIN){
      const token = jwt.sign(
        { 
            isAdmin: isAdmin
        },
        TOKEN_KEY,
        {
            expiresIn: "100y" 
        }
    )
    res.status(200).json({token: token});
    }
    else{throw new Error('invalid password')}
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = api;
