const express = require('express');
const bodyparser = require('body-parser');

const server = express();

server.use(bodyparser.json())

server.get('/', (req, res) => {
    return res.send('working')
})

const PORT = 4000;

server.listen(process.env.PORT || PORT)