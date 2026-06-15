const mg = require('mongoose');

const ts = new mg.Schema({
    uid: { type: mg.Schema.Types.ObjectId, ref: 'User', required: true },
    typ: { type: String, required: true },
    sc: { type: Number, required: true },
    dt: { type: Date, default: Date.now }
});

module.exports = mg.model('Test', ts);