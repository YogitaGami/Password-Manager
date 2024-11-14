const mongoose = require('mongoose');

const passopSchema = new mongoose.Schema({
    id: String,
    site: String,   //set schema as object
    username: String,
    password: String,
});
module.exports = mongoose.model('passop', passopSchema); 