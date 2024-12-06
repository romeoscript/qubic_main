
import heroSvg from "../assets/home/hero.svg";
import hero1 from "../assets/people/hero1.svg";
import hero2 from "../assets/people/hero2.svg";
import hero3 from "../assets/people/hero3.svg";
import mouse from "../assets/home/mouse.svg";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div
            className="h-[80vh] w-full rounded-[20px] bg-no-repeat my-[1rem] bg-cover bg-center flex gap-4 flex-col items-center justify-center"
            style={{ backgroundImage: `url(${heroSvg})` }}
        >
            <div className='flex gap-4 '>
                <img src={hero2} alt="" />
                <img src={hero1} alt="" />
                <img src={hero3} alt="" />
            </div>
            <div className='flex items-center flex-col gap-6 mt-[1rem]'>

                <h2 className='font-400 text-3xl'>A Dynamic Marketplace for</h2>
                <h1 className='flex items-center text-5xl font-500'>Creative  <img src={mouse} className='w-12 h-12 mx-[0.5rem]' alt="mouse" />    Digital Services</h1>
                <p className='w-2/5 text-sm'>Qubic is a fully remote company with it's serene physical office in Nigeria, we offer services in software development and maintenance, cloud Infrastructure and automation and open source contributions.</p>

                <Link to="/auth/login" className="text-white px-4 py-2 rounded-full bg-[#003399]">
                    Try us out now
                </Link>
            </div>

        </div>
    );
};

export default Hero;
