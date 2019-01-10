let express=require('express');
let app=express();

 	app.use(require('stylus').middleware(process.argv[3]))
 	app.use(express.static(process.argv[3])).listen(process.argv[2]);