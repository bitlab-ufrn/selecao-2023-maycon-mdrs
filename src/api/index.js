const express = require('express');
const router = express.Router();

const comentariosRouter = require('./comentariosRouter');

router.get('/', (req, res) => {
    res.send('APP online - send');
});

router.use('/comentario', comentariosRouter);

module.exports = router;
