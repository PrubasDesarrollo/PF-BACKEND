const controllerPostPosts = require("../postsControllers/PostPostsController");

const handlerPostPosts = async (req, res) => {
  try {
    const { firebaseUrl } = req.file ? req.file : "";
    const data = req.body;
    console.log(firebaseUrl, data);
    let info = await controllerPostPosts(data, firebaseUrl);
    res.status(200).json(info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = handlerPostPosts;
