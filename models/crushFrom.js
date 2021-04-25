const mongoose = require('mongoose')

const CrushFromSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    crush_from_id : {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('CrushFrom', CrushFromSchema)