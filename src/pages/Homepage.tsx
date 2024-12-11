import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <CoreValues />
        <Products />
        <Testimonials />
        <CTASection
          title="If We Didn't Build It, Question It"
          subtitle="Scale your business performance with our professional workforce"
        />
      </motion.div>
    </div>
  );
};

export default Homepage;