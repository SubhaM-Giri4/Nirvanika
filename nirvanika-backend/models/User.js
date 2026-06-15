const mg = require('mongoose');

const s = new mg.Schema({
    nm: { type: String, required: true },
    em: { type: String, required: true, unique: true },
    pw: { type: String, required: true }
}, { timestamps: true });

module.exports = mg.model('User', s);