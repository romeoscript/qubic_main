import { motion } from 'framer-motion';
import CoreCards from './CoreCards';
import { Link } from 'react-router-dom';
import brain from "../assets/home/brain.svg";
import CoreCards2 from './CoreCards2';
import Carousel from './Carousel';

const CoreValues = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    return (
        <>
            <motion.div
                className='flex flex-col-reverse md:flex-row gap-8 my-[4rem]'
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{  margin: "-100px" }}
            >
                <motion.div className="md:hidden" variants={fadeInUp}>
                    <Carousel showIndicators={false} className='md:hidden'>
                        <CoreCards />
                        <CoreCards />
                        <CoreCards />
                    </Carousel>
                </motion.div>

                <motion.aside className='max-md:hidden flex gap-4' variants={fadeInUp}>
                    <CoreCards />
                    <CoreCards />
                    <CoreCards />
                </motion.aside>

                <motion.aside 
                    className='text-left flex flex-col gap-4'
                    variants={staggerContainer}
                >
                    <motion.span 
                        className='rounded-full px-4 py-2 bg-[#0033991A] text-[#003399] text-[12px] w-[fit-content]'
                        variants={fadeInUp}
                    >
                        Core values
                    </motion.span>
                    <motion.h1 
                        className='mt-[2rem] text-3xl'
                        variants={fadeInUp}
                    >
                        OpenSource Development
                    </motion.h1>
                    <motion.p variants={fadeInUp}>
                        A well positioned solution offering classy services to support all your business needs via opensource.
                    </motion.p>
                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                        <Link to="/auth/login" className="text-white px-4 py-2 rounded-full w-[fit-content] bg-[#003399] inline-block">
                            Try us out now
                        </Link>
                    </motion.div>
                </motion.aside>
            </motion.div>

            <motion.div
                className='text-left flex flex-col gap-4'
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.span 
                    className='rounded-full px-4 py-2 bg-[#0033991A] text-[#003399] text-[12px] w-[fit-content]'
                    variants={fadeInUp}
                >
                    Core values
                </motion.span>
                <motion.p 
                    className='text-3xl'
                    variants={fadeInUp}
                >
                    Explore Our <br />
                    <span className='flex items-center gap-4'>
                        Core Services 
                        <motion.img 
                            src={brain} 
                            alt="brain"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        />
                    </span>
                </motion.p>

                <motion.div 
                    className='grid md:grid-cols-2 gap-8'
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <CoreCards2 />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <CoreCards2 />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default CoreValues;