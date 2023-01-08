import React from 'react'
import Volunteer from '../components/volunteer/Volunteer'
import Navbar from '../components/navbar/Navbar'
import Faq from '../components/volunteer/Faq'
import Footer from '../components/footer/Footer'

export default function volunteer() {
  return (
      <><Navbar />
          <Volunteer />
          <Faq />
          <Footer />
      </>
  )
}
