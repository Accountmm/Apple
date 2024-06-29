import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Hightlights from './Components/Hightlights'
import Model from './Components/Model'
import * as Sentry from "@sentry/react";
import Features from './Components/Features'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='bg-black min-h-full'>
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App)