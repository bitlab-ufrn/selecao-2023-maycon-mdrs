const express = require('express');
const routers = require('./api');
const { sequelize } = require('./database/models');

const app = express();

app.use(express.json());
app.use('/', routers);

sequelize.sync().then(() => {
    console.log('conectado com o sqlite');
});

app.listen(3000, () => {
    console.log('APP online');
});
