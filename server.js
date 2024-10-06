import { Appointment } from './models/Appointements.js'
import e from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = e()
const port = 5500
app.use(cors());

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})