var express = require('express');
const req = require('express/lib/request');
const blogs = require('../controllers/blogs');
const router = express.Router();
const blogsCtrl = require('../controllers/blogs')
const isLoggedIn = require('../config/auth')

/* GET users listing. */
router.get('/', blogsCtrl.index);
router.get('/new', isLoggedIn, blogsCtrl.new);
router.get('/:id', blogsCtrl.show);
router.post('/', isLoggedIn, blogsCtrl.create);
router.delete('/:id', blogsCtrl.delete);

module.exports = router;
