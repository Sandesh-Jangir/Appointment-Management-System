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
  
  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()
  console.log(formData)
    const formURL = e.target.action
    const data = new FormData()
  
    // Turn our formData state into data we can use with a form submission
  
    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: {
        passkey: "formData.passkey"
      },
      headers: {
        'accept': 'application/json',
      },
    }).then((response)=> console.log(response))
    .then((data) => {
      setFormData({
        passkey:""
      })
    })
  }
    return(
        <div>
            <form method="POST" action="http://localhost:5500/authadmin" onSubmit={submitForm}>
            <p>Please enter the passkey for verification :</p>
            <input type="password" name="passkey" onChange={handleInput} value={formData.passkey}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}