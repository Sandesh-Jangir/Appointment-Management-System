import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    clientName : String,
    date: Date,
    subject: String,
    id: Number
})
  
export  const Appointment = mongoose.model('requestedappointments', appointmentSchema);