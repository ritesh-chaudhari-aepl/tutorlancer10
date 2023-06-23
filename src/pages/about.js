 
import Image from "next/image"
import aboutImg from "@/assets/about.png"
const data=[
    {
        no:18,
        text:"Certified Tutors"
    },
    {
        no:401,
        text:"Students"
    },
    {
        no:30,
        text:'Courses'
    },
    {
        no:50,
        text:"Awards"
    }
]
const About = () => {
  return (
    <div id="about" className="aboutBg"> 
        <div className="max-w-screen-xl  items-center mx-auto">
            <div className="grid px-0 sm:px-12 lg:grid-flow-col grid-flow-row grid-cols-1 lg:grid-cols-2">
                <div className="lg:py-20 sm:py-10 py-0 sm:px-10 px-0 lg:px-7"><Image className="" src={aboutImg} alt="not found" /></div>
                <div className="lg:py-20 py-7 px-7">
                    <div className="font-sans font-bold text-normalWhite py-4 text-3xl">About TutorBoat</div>
                    <div className="text-normalWhite py-4 text-sm">Embark on a transformative learning journey with TutorBoat, your trusted partner in education. We offer personalized and comprehensive tutoring services designed to empower students of all ages and abilities. </div>
                    <div className="text-normalWhite text-sm">Our team of expert educators are dedicated to nurturing academic growth, building confidence, and unlocking the full potential of every learner. From math and science to language arts and test preparation, we provide tailored guidance that sails beyond the classroom. Discover a voyage towards educational excellence with TutorBoat today.</div>
                </div>
            </div>
            <div className="mx-auto relative text-center lg:pt-0 sm:pt-8  text-normalWhite justify-between px-4 sm:px-12 lg:px-24 pb-6 sm:pb-12 lg:pb-20 w-full  grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 grid-flow-row">
                {data.map((e)=>{
                    return(
                         <div className="py-6" key={e.text}>
                           <div className="font-extrabold text-3xl"> {e.no}</div>
                           <div className="mt-3 text-sm font-bold">{e.text}</div>
                            </div>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default About