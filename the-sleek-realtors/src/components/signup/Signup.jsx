import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "../home/recent/recent.css"



const Signup = () => {
  const history = useHistory(); // the useHistory object is gotten from the react-router-dom module
  // state variables used are initialized using UseState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// handlesubmit function which is called upon submitting the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {name: name, email, password};

    try {
      const response = await fetch("http://localhost:3000/api/v1/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          },
          body: JSON.stringify({ user }),
        });
      console.log(response);
     window.location.href = "/login";// user is redirected to the login page
 
    } catch (error) {
      console.log(error);
    }
  };

  //render

  return (
    <form onSubmit={handleSubmit} action="/signup" method="POST">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" 
      onChange={(event) => setName(event.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" 
      onChange={(event) => setEmail(event.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" 
      onChange={(event) => setPassword(event.target.value)} />

      <button type="submit">Sign Up</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </form>
    
  );
  }

export default Signup;