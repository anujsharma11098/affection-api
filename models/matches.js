const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    male_id:{
        type: String,
        required: true
    },
    female_id : {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Match', MatchSchema)