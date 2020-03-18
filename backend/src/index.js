const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors')//permite que qualquer API use o BackEnd
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server); //habilitando o websoket


//conexao com o banco
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/insta').then(()=>{
            console.log("Conectado ao mongo")
}).catch((err)=>{
    console.log("Erro ao se concentar "+err)
}) 

app.use((req,res,next)=>{
    req.io = io;
    next();
})

app.use(cors());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));
app.use(require('./routes'));




const port = 8006
server.listen(port,() =>{
    console.log("servidor rodando na porta "+ port);
})