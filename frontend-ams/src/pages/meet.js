import { useEffect, useState } from "react";
import styles from "../styles/page.meeting.css";
import style from "../styles/page.meeting.css";
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
        const month = new Date(Date.now()).getMonth();
        const year = new Date(Date.now()).getFullYear();
        const renderMonth = (month,year)=>{
            let result = [];
            // Rendering the month eith exact dates and days.
            const len = new Date(year, month, 0).getDate() +1;
            for (let i = 1; i <= len; i++) {
                let date = new Date(year, month, i)
                let day = date.getDay();
                let ndate = date.getDate();
                let occupyStatus = false;
                result.push({
                    "day": day,
                    "date": ndate,
                    "occupied": occupyStatus
                })
            }
            
            return result;
        };
        // console.log(month)
        var res = renderMonth(month, year)
    }, [])
    let i = 0
    Meetings.map((meeting)=>{
        let meetDay = new Date(meeting.date)
        let meetDate = meetDay.getDate()
        if (meetDate == res[i].date) res[i].occupied = true;
        i++;
    })
    Meetings.map((meeting)=>{
        let date = new Date(meeting.date)
                    let day = date.getDate()
                    document.getElementById("calendar").innerHTML += `<button value =  class="box">${day}</button>`
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