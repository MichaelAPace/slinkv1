var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var links = db.get('links')

/* GET home page. */
router.get('/', function(req, res, next) {
  links.find({}, function (err,docs){
    if (err) throw err
    res.render('index', {docs: docs})
  })
});
//
// //GET /TEST
// router.get('/test', function (req, res, next){
//   res.render('test')
// })
//
// //GET /TEST 2
// router.get('/test2', function (req, res,next){
//   res.render ('test2')
// })
//
// router.post('/test2', function (req,res, next){
//     console.log(req.body.url)
//     // res.render('test2',{url:req.body.url, name:req.body.name, color:req.body.color});
//     res.render('test2', {body:req.body})
// })
//
//
//
// //TEST 3
// router.get('/test3', function (req, res,next){
//   res.render ('test3')
// })
//
// router.post('/test3', function (req,res, next){
//     console.log(req.body)
//     console.log(req.body)
//     links.insert(req.body, function(err,doc){
//       res.redirect('/', doc)
//     })
// })

module.exports = router;
