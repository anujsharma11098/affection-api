const mongoose = require('mongoose')

const ConnectionSchema = new mongoose.Schema({
    user_id:{
        type: String,
        required: true
    },
    connections : [{}]
}, {
    timestamps: true
})

module.exports = mongoose.model('Connections', ConnectionSchema)