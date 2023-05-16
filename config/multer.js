const cloudinaryStorage = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dy4jktbep',
  api_key: '287553269257143',
  api_secret: 'CWM1hL525x0oU4KumJ6Ilf0DZmg',
});


const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images',
    allowed_formats: ['jpg', 'png'],
  },
});

const multer = require('multer');
const upload = multer({ storage: storage });

module.exports = upload;
module.exports.cloudinary = cloudinary;