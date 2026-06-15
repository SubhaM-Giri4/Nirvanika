const x = require('express');
const r = x.Router();
const T = require('../models/Test');
const m = require('../middleware/auth');

r.post('/add', m, async (rq, rs) => {
    try {
        const { typ, sc } = rq.body;
        const n = new T({ uid: rq.u.i, typ, sc });
        await n.save();
        rs.json(n);
    } catch (e) {
        rs.status(500).send('err');
    }
});

r.get('/history', m, async (rq, rs) => {
    try {
        const h = await T.find({ uid: rq.u.i }).sort({ dt: -1 });
        rs.json(h);
    } catch (e) {
        rs.status(500).send('err');
    }
});

r.get('/summary', m, async (rq, rs) => {
    try {
        const h = await T.find({ uid: rq.u.i });
        const s = {};

        h.forEach(t => {
            if (!s[t.typ]) s[t.typ] = { c: 0, tot: 0 };
            s[t.typ].c += 1;
            s[t.typ].tot += t.sc;
        });

        const res = [];
        for (let k in s) {
            res.push({ typ: k, avg: s[k].tot / s[k].c, cnt: s[k].c });
        }

        rs.json(res);
    } catch (e) {
        rs.status(500).send('err');
    }
});

module.exports = r;