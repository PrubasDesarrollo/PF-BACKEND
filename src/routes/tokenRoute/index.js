const { Router } = require("express");
require('dotenv').config();
const { PASSWORD_ADMIN, TOKEN_KEY } = process.env;
const jwt = require('jsonwebtoken');


const api = Router();


// Ruta para subir imágenes
api.post("/", async (req, res) => {
  try {
    let {admin, password} = req.body
    if(admin && password == PASSWORD_ADMIN){
      const token = jwt.sign(
        { 
            admin: admin
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
