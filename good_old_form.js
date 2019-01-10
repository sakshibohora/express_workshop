let express=require('express');
let path=require('path');
const bodyparser = require('body-parser')
let app=express();

app.use(bodyparser.urlencoded({extended: false}));
app.post('/form',function(req,res){
	let resStr=req.body.str.split('').reverse().join('')
	res.end(resStr);
})
app.listen(process.argv[2])