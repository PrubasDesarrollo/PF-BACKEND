const { Router } = require("express");
const uploadImage = require("../../services/firebase");

const controllerPostUser = require("../usersRoutes/usersControllers/controllerPostUser");

const api = Router();

const multer = require("multer");

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 1024 * 1024,
});

// Ruta para subir imágenes
api.post("/", Multer.single("image"), uploadImage, async (req, res) => {
  const { firebaseUrl } = req.file ? req.file : "";
  const { name } = req.body;

  try {
    if (!name) {
      res.status(404).send({ error: "Debe completar titulo y descpicion" });
    }
    console.log(firebaseUrl);

    let info = await controllerPostUser({
      name,
      image: firebaseUrl,
    });
    console.log(info);
    res.status(200).json(info);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = api;
