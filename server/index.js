import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import userRouter from './routes/user.js';


const app = express()



app.use(bodyParser.json({ limit: "30mb", extended: true }))

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/users', userRouter)

const CONNECTION_URL = 'mongodb+srv://tanay_tapanshu:tanay123@cluster0.mwjku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`))).catch((error) => console.log(error.message))