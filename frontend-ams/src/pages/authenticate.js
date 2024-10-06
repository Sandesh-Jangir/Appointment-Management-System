import React, { useState, FormEvent } from 'react'

export default function Auth(){

    const [isLoading, setIsLoading] = useState(false)
 
    async function onSubmit(event) {
      event.preventDefault()
      setIsLoading(true) // Set loading to true when the request starts
   
      try {
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
          method: 'POST',
          body: formData,
        })

        console.log("response")
      } finally {
        setIsLoading(false) // Set loading to false when the request completes
      }
    }
   
    return(
        <div>
            <form onSubmit={onSubmit}>
            <p>Please enter the passkey for verification :</p>
            <input type="password" placeholder="Passkey" id="passkey"/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}