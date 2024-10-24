import { useRouter } from "next/router"
import { useState } from "react";

export default function  Admin() {
    // const [meetings, setMeetings] = useState([])
    var meetings=[]
    const listAppointment = async ()=>{
        const response = await fetch('http://localhost:5000/fetchall');
        meetings = await response.json();
        await meetings.map((meet)=>{
            console.log (meet)
        })
    };listAppointment();
    return (
        <div>
            <h1>Hello World, This is admin dashboard</h1>
            <div id="subjects">
            </div>
        </div>
    )
}