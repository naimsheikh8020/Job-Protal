import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import JobListing from '../Components/JobListing'
import AppDownload from '../Components/AppDownload'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JobListing/>
        <AppDownload/>
    </div>
  )
}

export default Home