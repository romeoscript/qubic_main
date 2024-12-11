import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import hero1 from "../assets/People/hero1.svg";
import Carousel from './Carousel';

const Testimonials = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={containerVariants}
            className="my-8"
        >
            <motion.h2 
                variants={itemVariants}
                className="text-3xl font-semibold text-center mb-4"
            >
                What Clients say
            </motion.h2>
            
            <motion.p 
                variants={itemVariants}
                className="text-center max-w-2xl mx-auto mb-12 text-gray-600"
            >
                Don't just take our word for it - see what our clients have to say about their experience with Qubic.
            </motion.p>
            
            <motion.div 
                className='max-md:hidden grid grid-cols-3 gap-6'
                variants={containerVariants}
            >
                {Array.from({ length: 8 }).map((_, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <TestimonialCard
                            quote="Qubic has been an amazing support structure to the development of Outat mobile app, despite having many fallbacks with the folks on Fiverr, I was able to make progress with and they felt like family."
                            author={{
                                name: "Ahmed Sanusi",
                                role: "Founder & CEO, Outat TV",
                                image: hero1
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                variants={itemVariants}
                className='md:hidden my-8'
            >
                <Carousel>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <TestimonialCard
                            key={index}
                            quote="Qubic has been an amazing support structure to the development of Outat mobile app, despite having many fallbacks with the folks on Fiverr, I was able to make progress with and they felt like family."
                            author={{
                                name: "Ahmed Sanusi",
                                role: "Founder & CEO, Outat TV",
                                image: hero1
                            }}
                        />
                    ))}
                </Carousel>
            </motion.div>
        </motion.div>
    );
};

export default Testimonials;