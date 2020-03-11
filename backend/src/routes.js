const express = require('express');
const routes = new express.Router();
const multer = require('multer')
const PostController = require('./controllers/PostController');
const upload = multer(uploadConfig); 
const uploadConfig = require('./cofig/upload');


routes.post('/posts',upload.single('image'), PostController.store);




module.exports = routes;