const express = require('express');
const router = express.Router();

const comentariosRouter = require('./comentariosRouter');

router.get('/', (req, res) => {
    res.send('APP online - send');
});

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
router.use('/comentario', comentariosRouter);

module.exports = router;
