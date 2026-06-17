require('dotenv').config();
const x = require('express');
const r = x.Router();
const b = require('bcryptjs');
const j = require('jsonwebtoken');
const U = require('../models/User');

r.post('/signup', async (rq, rs) => {
    try {
        const { nm, em, pw } = rq.body;
        const e = await U.findOne({ em });
        if (e) return rs.status(400).json({ m: "exists" });

        const s = await b.genSalt(10);
        const h = await b.hash(pw, s);

        const u = new U({ nm, em, pw: h });
        await u.save();

        const t = j.sign({ i: u._id }, process.env.sec, { expiresIn: '1d' });
        rs.json({ u: { i: u._id, nm: u.nm, em: u.em }, t });
    } catch (er) {
        rs.status(500).json({ er: er.message });
    }
});

r.post('/login', async (rq, rs) => {
    try {
        const { em, pw } = rq.body;
        const u = await U.findOne({ em });
        if (!u) return rs.status(400).json({ m: "no user" });

        const m = await b.compare(pw, u.pw);
        if (!m) return rs.status(400).json({ m: "bad pass" });

        const t = j.sign({ i: u._id }, process.env.sec, { expiresIn: '1d' });
        rs.json({ u: { i: u._id, nm: u.nm, em: u.em }, t });
    } catch (er) {
        rs.status(500).json({ er: er.message });
    }
});

module.exports = r;