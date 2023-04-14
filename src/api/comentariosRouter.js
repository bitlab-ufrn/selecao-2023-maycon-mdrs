const express = require('express');
const router = express.Router();
const { comentarios } = require('../database/models');

/* router.get('/', async (req, res) => {
    const listaComentarios = await comentarios.findAll().then((result) => {
        if(result.find((row) => row.keywords == 'teste')) {
            console.log('achou')
        } else {
            console.log('não achou')
        }
    }); 
    res.json(listaComentarios);
});
 */
router.post('/', async (req, res) => {
    const { frase } = req.body;

    // Obter a lista de palavras ofensivas do banco de dados
    const palavrasOfensivas = await comentarios.findAll({
        attributes: ['keywords'],
        raw: true
    });

    // Verificar se a frase contém alguma palavra ofensiva
    const palavrasFrase = frase.toLowerCase().split(' ');
    const palavrasOfensivasFrase = palavrasFrase.filter(palavraFrase => {
        return palavrasOfensivas.find(palavraOfensiva => palavraOfensiva.keywords === palavraFrase);
    });

    // Retornar o resultado
    if (palavrasOfensivasFrase.length > 0) {
        res.json({ ofensiva: true, palavrasOfensivas: palavrasOfensivasFrase });
    } else {
        res.json({ ofensiva: false });
    }
    
});

module.exports = router;
