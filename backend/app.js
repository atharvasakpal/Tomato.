const express  = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const foodRouter  = require('./routes/foodRoute');
const UserRouter = require('./routes/userRoute');
const cartRoute = require('./routes/cartRoute');


if(process.env.NODE_ENV !== "production")
{
	require('dotenv').config();
}

//app config
const app = express();
const port = 4000;


//DB connection
// mongodb+srv://atharvasakpal14:atharvasakpal14@cluster0.in5c1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 
main().catch(err => console.log(err));
	async function main() {
		await mongoose.connect('mongodb+srv://atharvasakpal14:atharvasakpal14@cluster0.in5c1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
		console.log('connection open !');
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//middleware
app.use(express.json());
app.use(cors());


//creating api endpoints
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'));
app.use('/user',UserRouter)
app.use('/api/cart',cartRoute)


app.get('/',(req,res)=>{
    res.send('API working');
})






app.listen(port,()=>{
    console.log('Server Started')
})