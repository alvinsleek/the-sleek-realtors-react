import React, { useState } from "react"
// import img from "../images/services.jpg"
// import Back from "../common/Back"
// import "../home/featured/Featured.css"
// import FeaturedCard from "../home/featured/FeaturedCard"



    function  Book() {
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [moveInDate, setMoveInDate] = useState("");
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Send form data to server
        console.log({ firstName, lastName, email, phone, moveInDate });
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
          <br />
          <label htmlFor="moveInDate">Move-in Date:</label>
          <input
            type="date"
            id="moveInDate"
            value={moveInDate}
            onChange={(event) => setMoveInDate(event.target.value)}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
    
    export default Book;
    



