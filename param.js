let express=require('express');
let app=express();
app.param('id', function (req, res, next, id) {
  req.id = id
  
  next()
})
app.put('/message/:id', function(req, res){ 
	let id=req.params.id;
	let crypto1=require('crypto').createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
      res.end(crypto1)
 }).listen(process.argv[2])