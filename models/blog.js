const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var blogSchema = new Schema ({
    title: String,
    text: String,
    dateCreated: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Blog', blogSchema);