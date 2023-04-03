import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import axios from "axios";


const Signup = () => {
  const history = useHistory();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {name: name, email, password};
    const response = await axios.post("http://localhost:3000/api/v1/users", { user });
    console.log(response);
     window.location.href = "/login";
 
    history.push({
      pathname:"/",
      state: {username: name },
    })
  };
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