const Post = require('../models/Post');
const sharp = require('sharp'); //usado para definir alguns paramentos das imagens
const path =  require('path');
const fs = require('fs');

module.exports = {
    async index(req,res){ //função async pois toda função demora um pouco para ser executa, entao função assicronas são recomendads
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    async store(req,res){
        const { author,place,description,hashtags } = req.body;
        const {filename: image} = req.file;

        const [name] = image.split('.')
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)//paramentros da imagem
        .resize(500)
        .jpeg({quality: 70})
        .toFile(
            path.resolve(req.file.destination, 'resized',fileName)
        )
        fs.unlinkSync(req.file.path)//deletando upload da imagem

        const post = await Post.create({ //await espera finalizar para executar
            author,
            place,
            description,
            hashtags,
            image: fileName,
        });

    req.io.emit('post',post)
        return res.json(post)
    }
};