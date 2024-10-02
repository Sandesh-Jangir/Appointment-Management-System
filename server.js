const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5500

// connecting to mongo-db
async function connectDb(){
  await mongoose.connect("mongodb://localhost:27017/ams");
  console.log("connected to database ...")
}connectDb();

const appointmentSchema = new mongoose.Schema({
  clientName : String,
  date: Date,
  subject: String
})

const Appointment = mongoose.model('admin', appointmentSchema);

async function createMeeting(name, date, subject) {
  const meeting = new Appointment({
    clientName: name,
    date: date,
    subject: subject
  });
  await meeting.save();
}
createMeeting("sandesh jangir", 20-10-24, "business growth"); // example meeting request
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})