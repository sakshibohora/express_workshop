let fs=require('fs');
let express=require('express');
let app=express()
app.get('/books',function(req,res){
	fs.readFile(process.argv[3],function(err,object){
		let str =JSON.parse(object)
		res.json(str);
	})
}).listen(process.argv[2]);