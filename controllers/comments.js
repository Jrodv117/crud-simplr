const Blog = require('../models/blog')

module.exports = {
    create,
    delete: deleteComment
}

function create(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        blog.comments.push(req.body);
        blog.save(function(err) {
            res.redirect(`/blogs/${blog._id}`);
        });
    });
}

function deleteComment(req, res, next) {
    Blog.findOne({
            'comments._id': req.params.id
        })
        .then(function(blog) {
            const comment = blog.comments.id(req.params.id);
            if (!comment.user.equals(req.user._id)) return res.redirect(`/blogs/${blog._id}`);
            comment.remove();
            blog.save().then(function() {
                res.redirect(`/blogs/${blog._id}`);
            }).catch(function(err) {
                return next(err);
            });
        });
}