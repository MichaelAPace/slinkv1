var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var links = db.get('links');
var linktitles = db.get('linktitles');

/* GET home page. */
router.get('/', function(req, res, next) {
  links.find({},{sort:{_id:-1}}, function (err,docs){
    if (err) throw err
    res.render('index', {docs: docs});
  });
});

router.post('/test3', function (req,res, next){
  function findLink(s) {
    var links = '';
    var titles = '';
    var splitVersion = s.split(' ');
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    for(i=0;i<splitVersion.length;i++){
      console.log(splitVersion[i]);
      if(regexp.test(splitVersion[i]) === true){
        links += splitVersion[i];
      }else{
        titles += splitVersion[i] + " ";
      }
    }
    result = []
    result.push(titles)
    result.push(links)

    req.body.title=result[0]
    req.body.url=result[1]
    console.log('inside the findlink fn')

    return result;

  }
  findLink(req.body.text)
  console.log(findLink)


  links.insert(req.body, function(err,doc){
    // res.redirect('/', doc)
    res.end()
  })
})






module.exports = router;
