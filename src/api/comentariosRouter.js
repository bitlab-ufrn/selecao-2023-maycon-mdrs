const express = require('express');
const router = express.Router();
const { comentariosOffensivos } = require('../database/models');

router.get('/', async (req, res) => {
    const listaComentarios = await comentariosOffensivos.findAll(); 
    res.json(listaComentarios);
});

/* router.post('/', async (req, res) => {
    const { id, keywords } = req.body;
    await comentariosOfensivos.create({ id, keywords })
}); */

module.exports = router;
