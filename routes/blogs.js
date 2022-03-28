var express = require('express');
var router = express.Router();
const blogsCtrl = require('../controllers/blogs')

/* GET users listing. */
router.get('/', blogsCtrl.index);
router.get('/new', blogsCtrl.new);
router.post('/', blogsCtrl.create);

module.exports = router;
