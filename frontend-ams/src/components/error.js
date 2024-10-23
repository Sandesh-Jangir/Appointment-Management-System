import styles from "../styles/page.components.css"
export default function Error({message}){
    const hideMessage = ()=>{
        document.getElementById("error").style.display = "none";
    }
    return (
        <div>
        <div className="error" id="error">
            <div className="backgroundbox"></div>
            <p>{message}</p>
            <a href="#" onClick={hideMessage}>&#x2715;</a>
        </div>
        </div>
    )
}