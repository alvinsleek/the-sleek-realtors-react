import React, {useState, useEffect} from "react"
function Login () {
  
  // state variables are initialized to hold email and password
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  //useEffect to set value in the input fields
  useEffect(() => {
    document.getElementById("email").value = email
    document.getElementById("password").value = password
  },[email, password])

  // handleSubmit to handle on the form submission
  const handleSubmit = (e) => {
    e.preventDefault()
// A POST request is sent to 'login' route containing email and password
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({email, password})
    })
    // page is reloaded after request
    .then(() => window.location.reload())
  }
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>

      <button type="submit" href="/">Log In</button>
      <p>You don't have an account? <a href="/signup">Sign Up Today</a></p>
    </form>



   
   
  )
}

export default Login;
