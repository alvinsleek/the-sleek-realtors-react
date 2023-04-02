import React from "react"
// import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              
            </div>
            <button className='btn5'>Contact Us Today</button>

          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
              <h2>Your ultimate Real estate partner!</h2>
              
              
            </div>
          </div>

 
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 The Sleek Realtors.</span>
      </div>
    </>
  )
}

export default Footer
