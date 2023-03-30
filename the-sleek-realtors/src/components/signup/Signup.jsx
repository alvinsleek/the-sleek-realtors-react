import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"

function Signup() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;