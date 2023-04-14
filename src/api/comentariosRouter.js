const express = require('express');
const router = express.Router();
const { comentarios } = require('../database/models');

router.get('/', async (req, res) => {
    const listaComentarios = await comentarios.findAll().then((result) => {
        if(result.find((row) => row.keywords == 'teste')) {
            console.log('achou')
        } else {
            console.log('não achou')
        }
    }); 
    res.json(listaComentarios);
});

router.post('/verificar-frase', async (req, res) => {
    const { frase } = req.body;

    const palavras = frase.split(' ');
    const palavrasOfensivas = await comentarios.findAll({
        where: {
            keywords: palavras
        }
    })
    if(palavrasOfensivas.lenght > 0){
        res.status(400).json({mensagem: 'A frase contem palavra ofensiva'})
    } else {
        res.json({mensagem: 'A frase passou'})
    }
})

/* router.post('/verificar', async (req, res) => {
    const frase = req.body.frase;
    comentarios.find({}).exec(function (err, palavras){
        if(err){
            res.status(500).send('erro no servidor')
            return
        }

        for(let i=0; i < palavras.lenght; i++) {
            if(frases.includes(palavras[i].keywords)){
                res.send('contem ofensivo')
            }
        }
        res.send('comentario ok')
    })
}); */

/* router.post('/', async (req, res) => {
    const { id, keywords } = req.body;
    await comentariosOfensivos.create({ id, keywords })
}); */

module.exports = router;
