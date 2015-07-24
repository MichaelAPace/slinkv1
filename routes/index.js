var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//GET /TEST
router.get('/test', function (req, res, next){
  res.render('test')
})

//GET /TEST 2
router.get('/test2', function (req, res,next){
  res.render ('test2')
})

router.post('/test2', function (req,res, next){
    console.log(req.body.url)
    // res.render('test2',{url:req.body.url, name:req.body.name, color:req.body.color});
    res.render('test2', {body:req.body})
})

module.exports = router;
