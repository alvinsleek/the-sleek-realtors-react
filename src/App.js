// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         {/* <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch> */}
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }


import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pages from "./components/Pages"

function App() {
  const [loginform, setLoginForm] = useState([]);
  const [signupform, setSignupForm] = useState([]);
  const [houses, setHouses] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [payments, setPayments] = useState([]);
  

  useEffect(() => {
    fetch('/api/loginform')
    .then(response => response.json())
    .then(data => setLoginForm(data))
    .catch(error => console.error(error));

    fetch('/api/signupform')
    .then(response => response.json())
    .then(data => setSignupForm(data))
    .catch(error => console.error(error));

    fetch('/api/houses')
    .then(response => response.json())
    .then(data => setHouses(data))
    .catch(error => console.error(error));

    fetch('/api/tenants')
    .then(response => response.json())
    .then(data => setTenants(data))
    .catch(error => console.error(error));

    fetch('/api/payments')
    .then(response => response.json())
    .then(data => setPayments(data))
    .catch(error => console.error(error));
  }, []);
  return 
    
  
    <div>
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/houses">Houses</Link>
            </li>
            <li>
              <Link to="/tenants">Tenants</Link>
            </li>
            <li>
              <Link to="/payments">Payments</Link>
            </li>
            <li>
              <Link to="/loginform">Login</Link>
            </li>
            <li>
              <Link to="/signupform">Sign Up</Link>
            </li>
          </ul>
        </nav>
        {/* <Switch>
          <Route path="/houses">
            render={() => <div>{houses}</div>} 
          </Route>
          <Route path="/tenants">
            render={() => <div>{tenants}</div>} 
            </Route>
            <Route path="/payments">
               render={() => <div>{payments}</div>} 
              </Route>
              <Route path="/loginform">
                render={() => <div>{LoginForm}</div>} 
              </Route>
              <Route path="/signupform">
                render={() => <div>{SignupForm}</div>} 
              </Route>
        </Switch> */}
      
    </Router>
</div>
  
}

export default App;
