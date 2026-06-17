const e = require('express');
const c = require('cors');
const m = require('mongoose');
require('dotenv').config();

const a = e();

a.use(c());
a.use(e.json());

m.connect(process.env.db)
    .then(() => console.log("db ok"))
    .catch((err) => console.log(err));

const ar = require('./routes/auth');
const sr = require('./routes/score');

a.use('/api/auth', ar);
a.use('/api/score', sr);

const p = process.env.port || 5000;
a.listen(p, () => {
    console.log("up", p);
});