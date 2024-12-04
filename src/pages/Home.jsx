import React from 'react'
import Banner from '../components/Banner'
import BrandPartners from '../components/BrandPartners'
import CategoryCard from '../components/CategoryCard'
import FeaturedProduct from '../components/FeaturedProduct'
import SalesBanner from '../components/SalesBanner'
import Services from '../components/Services'


const Home = () => {
  return (
    <>
      <Banner />
      <BrandPartners />
      <CategoryCard />
      <FeaturedProduct />
      <SalesBanner />
      <Services />
    </>
  )
}

export default Home
