import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import kwick from "../assets/product/kwick.svg";
import outat from "../assets/product/outat.svg";

const Products = () => {
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div 
            className='my-[4rem]'
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }} // Removed once: true
            variants={containerVariants}
        >
            <motion.p 
                className='rounded-full text-left px-4 py-2 bg-[#0033991A] text-[#003399] text-[12px] w-[fit-content]'
                variants={itemVariants}
            >
                Core values
            </motion.p>
            
            <motion.p 
                className='text-3xl text-left my-[1rem]'
                variants={itemVariants}
            >
                Made By Qubic 
            </motion.p>

            <motion.div 
                className='grid md:grid-cols-4 gap-4'
                variants={containerVariants}
            >
                {[
                    { title: "Outat TV", subtitle: "Online Streaming Platform", image: outat },
                    { title: "Outat TV", subtitle: "Online Streaming Platform", image: kwick },
                    { title: "Outat TV", subtitle: "Online Streaming Platform", image: outat },
                    { title: "Outat TV", subtitle: "Online Streaming Platform", image: kwick }
                ].map((card, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <AnimatedCard
                            title={card.title}
                            subtitle={card.subtitle}
                            image={card.image}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Products;