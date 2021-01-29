const express = require('express')
const router = express.Router()
const Giphs = require('../db/seedData.json')
const mongoose = require('../db/connection')
const Giph = require('../models/giph')
const db = mongoose.connection;

router.get('/seed', async (req, res) => {
    await Giph.deleteMany({})
    const seedData = await Giph.insertMany(Giphs)
    res.json({status: 200, data: seedData})
})

router.get('/', (req, res) =>{
    
})

module.exports = router