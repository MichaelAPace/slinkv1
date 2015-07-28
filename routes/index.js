var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var links = db.get('links');
var linktitles = db.get('linktitles');

/* GET home page. */
router.get('/', function(req, res, next) {
  links.find({}, function (err,docs){
    if (err) throw err
    res.render('index', {docs: docs})
  })
});

router.post('/test3', function (req,res, next){
  console.log('here is the req.body', req.body)
  function findLink(s) {
    var links = [];
    var titles = [];
    var splitVersion = s.split(' ');
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    for(i=0;i<splitVersion.length;i++){
      console.log(splitVersion[i]);
      if(regexp.test(splitVersion[i]) === true){
        links.push(splitVersion[i]);
      }else{
        titles.push(splitVersion[i]);
      }
    }
    return titles;
  }

    links.insert(req.body, function(err,doc){
      res.redirect('/', doc)
    })
})






module.exports = router;
