import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Available Apartment vacancy for rent' subtitle='Find your suitable apartment and enjoy your stay!' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
