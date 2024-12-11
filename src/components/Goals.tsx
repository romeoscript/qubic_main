import Card from './AboutCard'
import rocket from "../assets/home/rocket.svg"

const Goals = () => {
    return (
        <div className="px-4 md:px-0">
            <span className='rounded-full mt-8 md:mt-16 block w-fit mx-auto px-4 py-2 bg-[#0033991A] text-[#003399] text-xs'>
                Core values
            </span>

            <div className='flex flex-col gap-2 items-center text-xl md:text-3xl my-6 md:my-8'>
                <h2 className='flex gap-2 items-center text-center'>
                    Turning Ideas into
                    <img src={rocket} alt="" className="w-6 md:w-auto" />
                </h2>
                <h2 className='text-center px-4'>Exceptional Software Solutions</h2>
            </div>

            <p className='w-full md:w-4/5 lg:w-3/5 text-sm md:text-base text-center mx-auto mb-6 md:mb-8 px-4'>
                We are committed to bringing your software dreams to life. Through collaboration, our passionate team turns your vision into innovative solutions, delivering exceptional software from concept to launch.
            </p>

            <div className="px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <Card title="Cloud Software" description="Together, we create software that not only meets your needs but exceeds expectations, driving your success in a digital-first world." />
                <Card title="Cloud Software" description="Together, we create software that not only meets your needs but exceeds expectations, driving your success in a digital-first world." />
                <Card title="Cloud Software" description="Together, we create software that not only meets your needs but exceeds expectations, driving your success in a digital-first world." />
           
                </div>
            </div>
        </div>
    )
}

export default Goals