import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import OverviewSection from '../components/OverviewSection'
import Trainer from '../components/Trainer'
import NewsSection from '../components/NewsSection'
import BlogSection from '../components/BlogSection'
import PriceSection from '../components/PriceSection'
import TestimonialSection from '../components/TestimonialSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
            <NavBar />
    <HeroSection />
    <OverviewSection />
    <Trainer />
    <NewsSection />
    <BlogSection />
    <PriceSection />
    <TestimonialSection />
    <Footer />
    </div>
  )
}

export default HomePage