import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Signup from "../signup/Signup"
import Login from "../login/Login"
import Contact from "../contact/Contact"
import Book from "../book/book"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} /> 
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/book' component={Book} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
