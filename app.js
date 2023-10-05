const express = require('express');
const app = express();


const busca = require('./router/busca');

app.use(busca);


const PORT = 3000;


app.use("/", (req, res) => {
    res.status(404).send("Page not found!");
})


app.listen(PORT, (req, res) => {
    console.log(`Running on http://localhost:${PORT}`);
})