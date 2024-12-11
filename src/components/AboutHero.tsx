import heroSvg from "../assets/home/abouthero.svg";

const Hero = () => {
    return (
        <div
            className="min-h-[60vh] md:h-[80vh] w-full rounded-[20px] text-white bg-no-repeat my-4 md:my-[1rem] bg-cover bg-center flex gap-4 flex-col items-center justify-center px-4 md:px-8"
            style={{ backgroundImage: `url(${heroSvg})` }}
        >
            <div className='flex items-center flex-col gap-3 md:gap-5 mt-6 md:mt-[1rem]'>
                <h2 className='text-lg md:text-2xl font-normal text-center'>
                    Empowering Businesses
                </h2>
                <h1 className='text-2xl md:text-4xl font-medium text-center px-4 md:px-0'>
                    Through Digital Innovation
                </h1>
                <p className='w-full md:w-3/4 lg:w-1/2 text-xs md:text-sm text-center px-4 md:px-0 leading-relaxed'>
                    At Qubic NG, we specialize in delivering cutting-edge digital software solutions tailored to meet the unique needs of modern businesses. Since 2022, we've helped several companies and established brands reimagine their business processes, driving growth and enhancing efficiency through innovative technology. From intuitive web development and robust software design to enterprise tools, our mission is to transform ideas into impactful digital experiences. With a customer-centric approach and a team of industry experts, we're here to help your business thrive in an ever-evolving digital landscape
                </p>
            </div>
        </div>
    );
};

export default Hero;