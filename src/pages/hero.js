 

const Hero = () => {
  return (
    <div className=' heroBg h-screen-2xl sm:pt-28 pt-10'>
        <div className="w-full mx-auto  max-w-screen-2xl">
             <div className="lg:py-32 sm:py-32 py-28 sm:px-20 px-6   sm:w-2/3 lg:w-1/2">
                <div className="font-sans  text-normalWhite text-5xl font-bold">
                Set Sail for Success <br></br> with <span className="text-btnColor text-6xl">TutorBoat</span>
               </div>
               <div className="font-sans py-9 text-lg text-normalWhite">
               Guiding You Towards Educational Excellence!
               </div>
               <div className="">
                    <button className="font-sans   inline-block rounded-xl  bg-btnColor text-normalWhite px-8 py-4 text-sm font-medium text-lightBg-n transition   capitalize">Contact Us</button>
               </div>
             </div>
             </div>
    </div>
  )
}

export default Hero