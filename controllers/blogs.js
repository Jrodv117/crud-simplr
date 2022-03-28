const Blog = require('../models/blog');

module.exports ={
    index,
    new: newBlog,
    create
}

function index(req, res){
    Blog.find({}, function(err, blogs){
        res.render('blogs/index', { blogs})
    })
};

function newBlog(req, res){
    res.render('blogs/new', {title:"New Blog"})
}

function create(req, res){
    const blog = new Blog(req.body);
    blog.save(function(err) {
        if (err) return res.redirect('/blogs/new');
        console.log(blog);
        res.redirect('/blogs/index')
    });
}