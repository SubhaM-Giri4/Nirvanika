const j = require('jsonwebtoken');

module.exports = (rq, rs, nx) => {
    const t = rq.header('auth-token');
    if (!t) return rs.status(401).send('denied');

    try {
        const v = j.verify(t, process.env.sec);
        rq.u = v;
        nx();
    } catch (e) {
        rs.status(400).send('invalid');
    }
};