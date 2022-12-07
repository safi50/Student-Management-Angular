const mongoose = require('mongoose')

var studentSchema = mongoose.Schema
    ({
        name: { type: String },
        email: { type: String },
        password: { type: String },
        phone: { type: Number },
        department: { type: String },
        _id: { type: Number }
    })


module.exports = mongoose.model('Student', studentSchema);


