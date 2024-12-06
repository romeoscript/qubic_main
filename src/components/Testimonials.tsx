import React from 'react'
import TestimonialCard from './TestimonialCard'
import hero1 from "../assets/People/hero1.svg";

const Testimonials = () => {
    return (
        <div className='grid grid-cols-3'>
            {
                Array.from({ length: 8 }).map((_, index) => (
                    <TestimonialCard
                        quote="Qubic has been an amazing amazing support structure to the development of Outat mobile app, despite having many fallbacks with the folks on Fiverr, I was able to make progress with and they felt like familty."
                        author={{
                            name: "Ahmed Sanusi",
                            role: "Founder & CEO, Outat TV",
                            image: hero1
                        }}
                    />
                ))
            }
        </div>
    )
}

export default Testimonials
