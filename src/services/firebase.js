var admin = require("firebase-admin");
require("dotenv").config();

var serviceAccount = require("../db/firebase config/firebaseConfig.json");

const { BUCKET } = process.env;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if (!req.files || req.files.length === 0) return next();

  const filePromises = req.files.map((image) => {
    const nombreArchivo =
      Date.now() + "." + image.originalname.split(".").pop();

    const file = bucket.file(nombreArchivo);

    const stream = file.createWriteStream({
      metadata: {
        contentType: image.mimetype,
      },
    });

    stream.on("error", (e) => {
      console.log(e);
    });

    return new Promise((resolve, reject) => {
      stream.on("finish", async () => {
        await file.makePublic();
        console.log(`Archivo ${nombreArchivo} subido exitosamente`);
        image.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nombreArchivo}`;
        resolve();
      });

      stream.end(image.buffer);
    });
  });

  Promise.all(filePromises)
    .then(() => {
      next();
    })
    .catch((error) => {
      console.error("Error al subir las imágenes:", error);
      res.status(500).send("Ocurrió un error al subir las imágenes.");
    });
};

module.exports = uploadImage;
