import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Login from "../login/Login"
import Book from "../book/Book"
import Contact from "../contact/Contact"
import Signup from "../signup/Signup.jsx"
import Admin from "../admin/Admin"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/book' component={Book} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/admin' component={Admin} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
