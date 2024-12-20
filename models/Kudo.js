const mongoose = require('mongoose');

const kudosSchema = mongoose.Schema({
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    message: { type: String, required: true },
    badge:{type:String , required: true},
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Kudos', kudosSchema);
