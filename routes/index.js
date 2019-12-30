var express = require('express');
var router = express.Router();
const db = require('../models/notepad')
var slugify = require('slugify')
const shortid = require('shortid');
 


var data={}
/*
db.Notepad.find({}).then(r=>{
  r.forEach((d)=>{
    db.Notepad.findByIdAndRemove(d._id) .then((rr)=>{
        console.log("deleted")
    })
  })
})

*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',(req,res)=>{
  //console.log(req.body)
  let sendData = {
    title:req.body.title,
    text:req.body.content,
    slug:shortid.generate()
  }
  console.log(sendData)
  db.Notepad.create(sendData).then(()=>{
    res.send({
      result:"Saved Into Database",
      url:`http://localhost:3000/notes/${sendData.slug}`

    })
  })

  
})

router.get('/save',(req,res)=>{
  db.Notepad.find({}).then((r)=>{
    res.send(r)
  })
  

  // res.render('save',{saved:data.saved})
})

router.get('/notes/:slug',(req,res)=>{
    const slug =  req.params.slug
    db.Notepad.find({slug:slug}).then((r)=>{
      console.log(r[0])
      //res.send(r)
      res.render('save',{data:r[0]})
    })
})
module.exports = router;
