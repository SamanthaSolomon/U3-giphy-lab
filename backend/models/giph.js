const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const giphSchema = new Schema({
	name: { type: String, required: true },
	url: { type: String, required: true },
});

const Giph = mongoose.model('Giph', giphSchema)

module.exports = Giph