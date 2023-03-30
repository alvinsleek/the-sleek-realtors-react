import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Properties available' subtitle='Check out some of our properties being listed' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
