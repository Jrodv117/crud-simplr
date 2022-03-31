const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });


const blogSchema = new Schema ({
    title: String,
    text: String,
    date: {
        type: Date,
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);