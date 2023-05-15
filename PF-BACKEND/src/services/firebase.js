require('dotenv').config();
const { BUCKET } = process.env;

var admin = require("firebase-admin");

var serviceAccount = require("../db/firebase config/firebaseConfig.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if (!req.file) return next();

  const image = req.file;
  const nombreArchivo = Date.now() + "." + image.originalname.split(".").pop();

  const file = bucket.file(nombreArchivo);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.log(e);
  });

  stream.on("finish", async (e) => {
    await file.makePublic();
    console.log(e);

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nombreArchivo}`;

    next();
  });

  stream.end(image.buffer);
};

module.exports = uploadImage;
