import React from 'react'
import Hero from '../components/Hero'
import CoreValues from '../components/CoreValues'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <CoreValues />
      <Products />
      <Testimonials />

      <CTASection
        title="If We Didn't Build It, Question It"
        subtitle="Scale your business performance with our professional workforce"
      />
    </div>
  )
}

export default Homepage
