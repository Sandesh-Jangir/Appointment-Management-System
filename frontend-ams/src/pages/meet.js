export default function ScheduleMeeting() {

    // Sample function to fetch data from the backend api.
    const getData = async ()=>{
        let data = await fetch('http://localhost:5500/fetchall')
        let res = await data.json();
        console.log(res)
    };getData();
    return (
        <container>
            <title>Schedule Meeting</title>
            <div>
                <h1>Hello World</h1>
            </div>

        </container>
    )
}