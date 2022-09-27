const express = require("express");
const cors = require('cors');
const { default: mongoose } = require("mongoose");

var url = "mongodb://localhost:27017/dbChat";

const authRouter = require('./routes/auth');

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

// app.get("/msg", (req, res) => {
//     getMsg("aza")
//         .then(data => {
//             res.status(200).send(data)
//         })
//         .catch(err => console.log(err))
// })

// app.post("/msg/:username", (req, res) => {
//     const { username } = req.params;
//     const { conversation_id } = req.body;
//     const { send_time } = req.body;
//     const { text } = req.body;

//     if(!text || !conversation_id || !send_time) {
//         res.status(418).send({ message: "bad request" });
//     } else {
//         addMsg(text, username, conversation_id, send_time);
//         console.log(`${text} ${conversation_id} ${send_time} ${text}`)
//         res.send({
//             msg: `${text} of sender ${username} at ${send_time} to id ${conversation_id}`,
//         })
//     }
// })

app.listen(
    PORT,
    () => console.log(`alive on ${PORT}`)
);