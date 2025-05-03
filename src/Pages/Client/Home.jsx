import React from 'react'
import Hero from '../../Components/Client/Hero'
import SecondSection from '../../Components/Client/SecondSection'
import NewsLatter from '../../Components/Client/NewsLatter'
import NewRelaseBooks from '../../Components/Client/NewRelaseBooks'
import FeatureBook from '../../Components/Client/FeatureBook'
import Offer from '../../Components/Client/Offer'
import FAQAlert from '../../Components/Client/FAQAlert'

const Home = () => {
  return (
    <>
      <Hero />
      <SecondSection />
      <NewsLatter />
      <NewRelaseBooks />
      <FeatureBook />
      <Offer />
      <FAQAlert />
    </>
  )
}

export default Home