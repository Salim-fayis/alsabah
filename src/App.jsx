import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import TryOurProducts from './components/TryOutProducts'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const App = () => {
  return (
   <div className="min-h-screen" >
    <Header />
    <Hero />
    <AboutUs />
    <Products />
    <TryOurProducts />
    <CallToAction />
    <Footer />
   </div>
  )
}

export default App
