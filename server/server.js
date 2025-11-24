import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from "body-parser";
import connectDB from './config/db.js';
import './config/instrument.js';
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js';

// Initialize Express app
const app = express();

// REQUIRED for Clerk Webhooks (raw body)
app.use("/webhooks", bodyParser.raw({ type: "application/json" }));

// Normal middleware for rest of API
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Job Portal Server is Running');
});

// Webhooks Route
app.post('/webhooks', clerkWebhooks);

// Connect to database
await connectDB();

const PORT = process.env.PORT || 5000;

// Sentry error handler
Sentry.setupExpressErrorHandler(app);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
