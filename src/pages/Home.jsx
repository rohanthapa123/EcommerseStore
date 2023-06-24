import React from 'react'
import TopSection from '../components/TopSection'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ProductDisplay from '../components/ProductDisplay'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <TopSection />
        <NavBar />
        <SideBar/>
        <Hero />
        <ProductDisplay />
        <Footer/>
    </>
  )
}

export default Home