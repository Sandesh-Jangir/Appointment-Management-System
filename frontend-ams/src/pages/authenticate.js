
import { useRouter } from 'next/router';
import React, { useState} from 'react'
import styles from "../styles/page.authenticate.css"
import Error from '@/components/error';

export default function Auth(){
  const router = useRouter()
  const [formData, setFormData] = useState({
    passkey: ""
  });

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }
  
  const submitForm = async (e) => {
    // We don't want the page to refresh
    e.preventDefault()
    const data = new FormData()

    // POST the data to the URL of the form
    const request = new Request("http://localhost:5000/authadmin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({passkey: formData.passkey})
    })
    const response = await fetch(request);
    if (response.status == 200){
      router.push('/dashboard')
    }else if (response.status == 400){
      document.getElementById("error").style.display = "flex";
    }
  }
    return(
      <div>
        <container>
            <form method="POST" action="http://localhost:5000/authadmin" onSubmit={submitForm}>
            <p>Please <span> enter the passkey </span> for verification :</p>
            <input type="password" name="passkey" onChange={handleInput} value={formData.passkey}/>
            <button type="submit">Submit</button>
            </form>

        </container>
            <Error message="Invalid Credentials"></Error>
        </div>
    )
}