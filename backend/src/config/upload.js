const multer = require('multer')
const path = require('path');

module.exports ={
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname,'..','..', 'uploads'), //local onde sera salvo o upload
        filename: function (req,file,callback){
            callback(null, file.originalname); //setando o nome original da imagem
        }
    })
};