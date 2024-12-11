import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroSvg from "../assets/home/hero.svg";
import hero1 from "../assets/People/hero1.svg";
import hero2 from "../assets/People/hero2.svg";
import hero3 from "../assets/People/hero3.svg";
import mouse from "../assets/home/mouse.svg";

const Hero = () => {
    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
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

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            className="h-[80vh] w-full rounded-[20px] bg-no-repeat my-[1rem] bg-cover bg-center flex gap-4 flex-col items-center justify-center"
            style={{ backgroundImage: `url(${heroSvg})` }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className='flex gap-4'
                variants={containerVariants}
            >
                {[hero2, hero1, hero3].map((hero, index) => (
                    <motion.img
                        key={index}
                        src={hero}
                        alt=""
                        variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                ))}
            </motion.div>

            <motion.div 
                className='flex items-center flex-col gap-6 mt-[1rem]'
                variants={containerVariants}
            >
                <motion.h2 
                    className='font-400 text-2xl md:text-3xl'
                    variants={itemVariants}
                >
                    A Dynamic Marketplace for
                </motion.h2>

                <motion.h1 
                    className='flex items-center text-2xl md:text-5xl font-500'
                    variants={itemVariants}
                >
                    Creative 
                    <motion.img 
                        src={mouse} 
                        className='md:w-12 md:h-12 h-[1.5rem] w-[1.5rem] mx-[0.5rem]' 
                        alt="mouse"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    />
                    <span>Digital Services</span>
                </motion.h1>

                <motion.p 
                    className='md:w-2/5 w-3/4 text-sm'
                    variants={itemVariants}
                >
                    Qubic is a fully remote company with it's serene physical office in Nigeria, 
                    we offer services in software development and maintenance, cloud Infrastructure 
                    and automation and open source contributions.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link 
                        to="/auth/login" 
                        className="text-white px-4 py-2 rounded-full bg-[#003399] inline-block"
                    >
                        Try us out now
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;