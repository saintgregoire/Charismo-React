import React from 'react'

import style from './Home.module.scss'

import Banner from '../Sections/Banner'
import Principles from '../Sections/Principles'
import Solutions from '../Sections/Solutions'
import Reviews from '../Sections/Reviews'
import Partners from '../Sections/Partners'
import LearnMore from '../Sections/LearnMore'


function Home() {
  return (
    <main>
      <Banner />
      <Principles />
      <Solutions />
      <Reviews />
      <Partners />
      <LearnMore />
    </main>
  )
}

export default Home