import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();
//to accept cross origin requests from our given clients only
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//to accept json data
app.use(express.json({
    limit: "16kb"
}))
//to accept form data and other things from URL
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
//to serve static files like images, css, js
app.use(express.static("public"))

//to parse cookies
app.use(cookieParser())

export { app };