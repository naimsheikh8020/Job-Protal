import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import './config/instrument.js';
import * as Sentry from "@sentry/node";

// Initialize Express app
const app = express()

// Middleware
app.use(cors());
app.use(express.json());


//Routes 
app.get('/',(req, res)=>{
    res.send('Job Portal Server is Running')
})
app.get('/debug-sentry', function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });


//connect to Database
await connectDB()

const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})