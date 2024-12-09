import { useEffect, useState } from "react";
import styles from "../styles/page.meeting.css";
export default function ScheduleMeeting() {
    const [Meetings, setMeetings] = useState([])
    // Sample function to fetch data from the backend api.
    const getData = async ()=>{
        let data = await fetch('http://localhost:5000/fetchall')
        let res = await data.json();
        setMeetings(res);
    };
    useEffect(()=>{
        getData();
    }, [])
    Meetings.map((meeting)=>{
                    let date = new Date(meeting.date)
                    let day = date.getDate()
                    document.getElementById("calendar").innerHTML += `<div class="box">${day}</div>`
    })
    return (
        <container>
            <title>Schedule Meeting</title>
            <div className="flexContainer">
                <form>
                    <label>Name</label>
                    <input/>
                    <label>Email</label>
                    <input/>
                    <label>Subject</label>
                    <textarea/>

                    <button>Submit Request &rarr;</button>
                </form>

            </div>
            <div className="calender" id="calendar">
                
            </div>

        </container>
    )
}