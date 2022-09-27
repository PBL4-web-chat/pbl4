const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'conversations',
    },
    content: {
        type: String,
        require: true,
    },
    attached: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('message', msgSchema);