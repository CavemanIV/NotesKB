/**
 * Created by caveman on 14-6-29.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('editing', { title: 'Editing Entity' });
});

router.get('/:entity', function(req, res) {
    res.redirect("http://www.google.com/?q=" + req.params.entity);
});

module.exports = router;
