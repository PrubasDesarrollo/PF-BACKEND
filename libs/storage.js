const multer = require('multer')

const multerConfig={
    storage: fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './storage/imgs')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
}
  

  module.exports = multerConfig;