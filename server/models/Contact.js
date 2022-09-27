const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    phoneNum: {
        type: String,
        require: true,
    },
    gender: {
        type: Boolean,
        default: true,
        enum: ['nam', 'nữ'],
    },
    email: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    }
})

module.exports = mongoose.model('contacts', ContactSchema);