import { redirect } from 'next/dist/server/api-utils';
import { permanentRedirect } from 'next/navigation';
import React, { useState, FormEvent } from 'react'

export default function Auth(){
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
    const formURL = e.target.action
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
      console.log("Success")
    }else if (response.status == 400){
      console.log("Failed")
    }
  }
    return(
        <div>
            <form method="POST" action="http://localhost:5000/authadmin" onSubmit={submitForm}>
            <p>Please enter the passkey for verification :</p>
            <input type="password" name="passkey" onChange={handleInput} value={formData.passkey}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}