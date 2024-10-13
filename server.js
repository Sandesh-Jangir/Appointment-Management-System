import { Appointment } from './models/Appointements.js'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to mongo-db
async function connectDb(){
  await mongoose.connect("mongodb://localhost:27017/ams");
  console.log("connected to database ...")
}connectDb();

// Endpoint to schedule a meeting.
app.get('/reqappointment', (req, res) => {
  const meeting  = new Appointment({
    clientName: "Sandesh Jangir",
    date: 20-10-24,
    subject: "Self improvement session.",
    id: 1
  })
  meeting.save();
  res.send("Created Successfully")
})

// Endpoint to fetch all of the scheduled meeting.
app.get('/fetchall', async (req, res)=>{
  const allMeetings = await Appointment.find({});
  res.send(allMeetings)
})

// Endpoint to authenticate the user.
app.post('/authadmin', (req, res)=>{
  const enteredPasskey = req.body.passkey;
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  if (enteredPasskey == "mykey"){
    res.sendStatus(200);
  }else res.sendStatus(400)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})