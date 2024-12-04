import styles from "../styles/page.meeting.css";
export default function ScheduleMeeting() {

    // Sample function to fetch data from the backend api.
    const getData = async ()=>{
        let data = await fetch('http://localhost:5000/fetchall')
        let res = await data.json();
        console.log(res[1].date)
    };getData();
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

                <div className="calender"></div>
            </div>

        </container>
    )
}