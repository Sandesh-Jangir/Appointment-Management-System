import { Appointment } from './models/Appointements.js'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = 5000

app.use(cors())
app.use(express.json()); 

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
  const data = req.body.passkey
  console.log(data)
  req.set('Access-Control-Allow-Origin', 'https://localhost:3000/');
  // res.status(301).redirect('http://localhost:3000/')
  res.json(data)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})