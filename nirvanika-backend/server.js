const exp = require('express');
const crs = require('cors');
const mg = require('mongoose');
require('dotenv').config();

const a = exp();

a.use(crs());
a.use(exp.json());

mg.connect(process.env.db)
    .then(() => console.log("db ok"))
    .catch((e) => console.log(e));

a.get('/', (req, res) => {
    res.send("ok");
});

const p = process.env.port || 5000;
a.listen(p, () => {
    console.log("up", p);
});