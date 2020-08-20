var express = require('express');
var router = express.Router();

downloadRouter = require('./download')

router.use('/download', downloadRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MkbekDev' });
});

module.exports = router;
