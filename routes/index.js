var express = require('express');
var router = express.Router();
var rwoDates=[
  {name: '魏文博'},
  {name: '魏文博',sex: '男'},
  {name: '魏文博',sex: '男'}
];
/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log(req.headers);
  res.render('index', {
    title: 'Express' ,
    homeToBaby: rwoDates
  });
});
router.get('/test',function(req,res,next) {
  res.send('Hello from B!');
});
module.exports = router;
