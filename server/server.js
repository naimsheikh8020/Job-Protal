import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';


// Initialize Express app
const app = express()

// Middleware
app.use(cors());
app.use(express.json());


//Routes 
app.get('/',(req, res)=>{
    res.send('Job Portal Server is Running')
})

//connect to Database
await connectDB()

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})