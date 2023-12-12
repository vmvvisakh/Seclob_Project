import React from 'react'
import Banner from '../Components/Home/Banner/Banner'
import Section from '../Components/Home/Section/Section'
import ProductSection from '../Components/Home/ProductSection/ProductSection'
import Footer from '../Components/Home/Footer/Footer'

function HomePage() {
  return (
    <div>
        <Banner />
        <Section />
        <ProductSection />
        <Footer />
    </div>
  )
}

export default HomePage