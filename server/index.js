const express = require("express");
const cors = require('cors');
const { default: mongoose } = require("mongoose");

var url = "mongodb://localhost:27017/dbChat";

const authRouter = require('./routes/auth');
const msgRouter = require('./routes/msg');
const convRouter = require('./routes/conversation');
const memberRouter = require('./routes/member');

const PORT = 8080;

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("DB connected");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

connectDB();

const app = express();

app.use(express.json());

app.use(cors({
    origin: '*',
}))

app.use('/api/auth', authRouter);
app.use('/api/msg', msgRouter);
app.use('/api/conversation', convRouter);
app.use('/api/member', memberRouter);

app.listen(
    PORT,
    () => console.log(`alive on ${PORT}`)
);