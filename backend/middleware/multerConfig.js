const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        // console.log(file)  // with this i can view the file type fo file uploaded
        const allowedFile = ['image/png', 'image/jpeg', 'image/jpg', 'application/octet-stream']
        if(!allowedFile.includes(file.mimetype)){
            cb(new Error(`${file.mimetype} file is not allowed`))
            return 
        }
        cb( null , './storage')
    },
    filename : function(req,file, cb){
        cb(null, Date.now() + "-" + file.originalname)
    }
})

module.exports = {
    storage : storage, 
    multer : multer
}