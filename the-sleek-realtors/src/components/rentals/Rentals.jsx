import React, { useState } from "react"
// import img from "../images/services.jpg"
// import Back from "../common/Back"
import "./rentals.css"
// import FeaturedCard from "../home/featured/FeaturedCard"



    const Rentals = () => {
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [property, setProperty] = useState("");
      const [moveInDate, setMoveInDate] = useState("");
// handelSubmit which handles the tenant details
      const handleSubmit = async (event) => {
        event.preventDefault();
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-type': 'application/json'},
          body: JSON.stringify({book: { firstName, lastName, email, phone, property, moveInDate}})
      };
      try {
        const response = await fetch('/rentals', requestOptions);
        const data = await response.json();
        console.log(data);
        //fetch updated rentals data from server
        
      }
      catch (error) {
        console.log(error);
      }
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
          <label htmlFor="Property">Property:</label>
          <input
            type="text"
            id="property"
            value={property}
            onChange={(event) => setProperty(event.target.value)}
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
          <br />
          
        </form>
      );
    }
    
    export default Rentals;
    



