var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log(req.headers);
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req,res,next) {
  res.send('Hello from B!');
});
module.exports = router;
