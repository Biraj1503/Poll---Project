const express = require('express')
const morgan = require('morgan')
//const multer = require('multer')
//const {Schema,model} = require('mongoose')
const mongoose = require('mongoose');
const router = require('./Router/Pollroute')
const {AllgetPoll,ViewgetPoll,ViewpostPoll} = require('./Controller/Controller')
const app = express()
app.set('views engine','ejs')
app.use(morgan('dev'))
app.use(express.urlencoded({extened:true}))
app.use(express.json())
const PORT = process.env.PORT || 4000
const { MongoClient } = require('mongodb');
/*const uploads='./uploads'
const storage = multer.diskStorage({
	destination:uploads
})
const upload = multer({
	storage,
	fileFilter:(req,file,cb)=>{
		console.log(req.f)
	}
})
app.get('/create',(req,res)=>{
	res.render('home.ejs')
})

console.log(multer)
app.post('/create',(req,res)=>{
	let user = {
		name:req.body.name,
		option:req.body.option
	}
})

app.get('/',(re,res)=>{
	res.json({
		message:'Wellcome our project'
	})
})
app.post('/uploads',upload.single('avater'),(req,res)=>{
	res.render('uploads.ejs')
})
app.get('/uploads',(req,res)=>{
	res.render('uploads.ejs')
})*/
/*const up = './public/data/uploads/'
const storage = multer.diskStorage({
	destination:up
})*/
//const upload = multer({storage}).upload.single('avater')
/*const userSchema = new Schema({
	name:String,
	email:String
})

const User = model('User',userSchema)

app.get('/create',(req,res)=>{
	res.render('create.ejs')
})

app.get('/uploads',async (req,res,)=>{
	try{
		let search = await User.find()
		console.log('kfkflk'+search)
	}catch(err){
		console.log(err)
	}

	res.render('uploads.ejs')
})

app.post('/uploads',async(req,res)=>{
	let useres = new User({
		name:req.body.name,
		email:req.body.email
	})
	try{
		//console.log(req.body)
		let ok = await useres.save()
		console.log(ok)
		res.redirect('/')
	}catch(err){
		console.log(err)
	}
})*/


/*const uri = 'mongodb+srv://Biraj:Biraj1245@newproject.92n8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  app.listen(4545,()=>{
	console.log(`Server is Running Now On Port 4545`)
})

  console.log('Database Is connect')
  client.close();
});*/
app.use('/createpoll',router)
app.get('/allpolls',AllgetPoll)
app.get('/allpolls/:id',ViewgetPoll)
app.post('/allpolls/:id',ViewpostPoll)
app.get('/', (req,res)=>{
	res.render('home.ejs')
})

mongoose.connect('mongodb+srv://Poll:Biraj1234@cluster0.yj1c9.mongodb.net/test',
	{useNewUrlParser:true},
	()=>{
		app.listen(PORT,()=>{
		console.log(`Server is ready Now PORT ${PORT}`)
		console.log('Database is Ready Now')
	})
})



/*const uri = "mongodb+srv://Poll:Biraj1234@cluster0.yj1c9.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
	console.log('Database Is connect')
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  app.listen(4545,()=>{
	console.log(`Server is Running Now On Port 4545`)
})

  client.close();
});*/