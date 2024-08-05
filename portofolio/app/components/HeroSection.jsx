import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 place-self-center text-center sm:text-left" >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Portofolio Website
          </h1>
          <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Minima consequatur rem
          </p>
          <div>
            <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 mt-3 bg-white hover:bg-slate-200 text-black'  >Download CV</button>
            <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 mt-3 bg-transparent hover:bg-slate-800 text-white border border-white ' >About Me</button>
          </div>
        </div>
        <div className='col-span-5 mt-4 lg:mt-0 flex justify-center lg:justify-end'>
          <div className="rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <Image 
              src="/images/hero-Reza.png" 
              alt="hero-image"
              className='absolute w-[100px] h-[100px] object-cover rounded-full'
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
