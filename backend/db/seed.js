const mongoose = require('./connection')
const Giphs = require('../models/giph')
const manyGiphs = require('./seedData.json')
const db = mongoose.connection;

Giphs.deleteMany({}).then(() => {
    Giphs.insertMany(manyGiphs).then((giphs) => {
        console.log('giphs-', giphs)
        db.close()
    })
})
