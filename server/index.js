const express = require('express');

const app = express();
const commentsController = require('./controller/CommentsController');


app.listen(3000, () =>{
    console.log("Inciciando servidor");
});


app.get('/post/comments', async (req, res) =>{
    res.setHeader('content-type', 'application/json');
    res.send(await commentsController.getComments());
});

app.get('/', (req, res) => {
    console.log("Conexão recebida em /");
    res.send('vvcvsadashjhgfd');
});