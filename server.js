import { Appointment } from './models/Appointements.js'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = 5500

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// connecting to mongo-db
async function connectDb(){
  await mongoose.connect("mongodb://localhost:27017/ams");
  console.log("connected to database ...")
}connectDb();

app.use((req, res, next)=>{
  res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
  next();
})

const corsOptions = {
  origin : ['http://localhost:3000']
}

app.use(cors(corsOptions));
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
  res.redirect('http://localhost:3000/')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})