const mongoose = require('mongoose')

const CrushToSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    crush_to_id:{
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('CrushTo', CrushToSchema)