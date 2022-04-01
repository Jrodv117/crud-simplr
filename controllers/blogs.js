const Blog = require('../models/blog');

module.exports = {
    index,
    new: newBlog,
    create,
    show,
    delete: deleteBlog
}

function index(req, res) {
    Blog.find({}, function(err, blogs) {
        res.render('blogs/index', {
            title: 'Dashboard',
            blogs
        })
    })
};

function newBlog(req, res) {
    res.render('blogs/new', {
        title: "Create Post"
    })
}


function create(req, res) {
    const blog = new Blog(req.body);
    blog.userBlog = req.user._id;
    blog.save(function(err) {
        if (err) return res.redirect('/blogs/new');
        console.log(blog);
        res.redirect(`/blogs/${blog._id}`);
    });
}


function show(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        res.render('blogs/show', {
            title: 'Post',
            blog
        });
    });
}

function deleteBlog(req, res) {
    Blog.findByIdAndDelete({
        _id: req.params.id,
        user: req.user._id
    }, function(err) {
        res.redirect('/blogs');
    });
}