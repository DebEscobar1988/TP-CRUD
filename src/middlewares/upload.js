const multer = require('multer');
const path = require('path');
/* file, para darle nombre a la img */
const guardarImagen = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null, '/public/images')
    },
    filename: function(req,file,callback){
        callback(null, `${Date.now()}_imgProduct_${path.extname(file.originalname)}`)
    }
})
const subirImg = multer({guardarImagen})
module.exports= {
    subirImg
}