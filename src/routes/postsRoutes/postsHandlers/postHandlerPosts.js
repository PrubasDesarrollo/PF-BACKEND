const controllerPostPosts = require("../postsControllers/PostPostsController");

const handlerPostPosts = async (req, res) => {
  try {
    let firebaseUrls;
    if(req.files){
    firebaseUrls = req.files.map((file) => file.firebaseUrl);
      }
    const data = req.body;
    console.log(firebaseUrls, data);
    let info = await controllerPostPosts(data, firebaseUrls);
    res.status(200).json(info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = handlerPostPosts;
