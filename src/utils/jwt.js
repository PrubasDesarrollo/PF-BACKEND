require("dotenv").config();
const jwt = require("jsonwebtoken");
const { TOKEN_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(authHeader);
  if (token == null) {
    return res.status(400).send("token requerido");
  }
  jwt.verify(token, TOKEN_KEY, (err, user) => {
    if (err) {
      return res.status(400).send("Token invalido");
    }
    // console.log(user)
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
