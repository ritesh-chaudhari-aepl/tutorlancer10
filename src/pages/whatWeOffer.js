"use client"
import Image from "next/image"
import sideImg from "@/assets/whatWeOffer.png"
import WhatWeOfferCard from '@/components/card/whatWeOfferCard'
import HeadphonesIcon from '@mui/icons-material/Headphones';


import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
 
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { title } from "process";
const WhatWeOffer = () => {
  const data=[
    {
      icon:<AppsOutlinedIcon   className="text-btnColor iconstyle" />,
      title:'Apps For Mobile & Web',
      msg:'Our doers will make very user-friendly and efficient apps,exactly matching your needs. Boost your business now!'
  
    },
    {
      icon:<ContentPasteSearchOutlinedIcon  className="text-btnColor iconstyle" />,
      title:'Homework Help',
      msg:'Stuck with homework? PhD doers have a distinctive mode of expression assisting students to solve assignments flawlessly.'
  
    },
    {
      icon:<VideoCameraFrontOutlinedIcon  className="text-btnColor iconstyle" />,
      title:'Live session',
      msg:'We provide the best doers for you to interact with in real time to get instant solutions for your problems. Pickup your phone now !'
  
    },
    {
      icon:<ScienceOutlinedIcon  className="text-btnColor iconstyle" />,
      title:'Lab Work',
      msg:'PSpice, Orcad, AutoCAD,Solidworks, and many more simulation softwares, our Lab doers can handle them all.'
  
    },
    {
      icon:<DataUsageOutlinedIcon  className="text-btnColor iconstyle" />,
      title:'Project Help',
      msg:'Get the most professional project assistance from our PhD doers who can guide and walk you through your project online.'
  
    },
    {
      icon:<DriveFileRenameOutlineOutlinedIcon  className="text-btnColor iconstyle" />,
      title:'Writing Help',
      msg:'Our Native essay doers help you meet university standards in terms of writing and structuring of academic essays.'
  
    },
  ]
  return (
    
    <div id='services' className='bg-normalWhite '>
    <div className="flex flex-row  mx-auto px-5  max-w-screen-xl">
         <div className="lg:p-8 p-0 pt-0 px-3 lg:pt-16 w-full  sm:w-2/3">
            <div className="font-sans text-center sm:text-left  py-7 text-3xl font-semibold">
           What We Offer
           </div>
           <div className="font-sans text-center sm:text-left  py-2 lg:py-5 text-sm font-semibold  ">
           On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
           </div>
           <div className="relative grid-flow-row grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1  lg:py-5">
            {data.map(e=><div key={e.title} className="lg:my-9 sm:my-3 my-4 mx-0  sm:mx-0 lg:mx-5"><WhatWeOfferCard icon={e.icon} title={e.title} msg={e.msg}/></div>)}
            {/* <div className="lg:my-9 sm:my-3 my-4 mx-0  sm:mx-0 lg:mx-5"><WhatWeOfferCard icon={<HeadphonesIcon fontSize="large" className="text-pink-2"/>} title="24/7 Support" msg="Thsi is ttjhe lorem in the otere of in  ssfagae,."/></div>
            <div className="lg:my-9 sm:my-3 my-4 mx-0  sm:mx-0 lg:mx-5"><WhatWeOfferCard icon={<HeadphonesIcon fontSize="large" className="text-pink-2"/>} title="24/7 Support" msg="Thsi is ttjhe lorem in the otere of in  ssfagae,."/></div>
            <div className="lg:my-9 sm:my-3 my-4 mx-0  sm:mx-0 lg:mx-5"><WhatWeOfferCard icon={<HeadphonesIcon fontSize="large" className="text-pink-2"/>} title="24/7 Support" msg="Thsi is ttjhe lorem in the otere of in  ssfagae,."/></div>
            <div className="lg:my-9 sm:my-3 my-4 mx-0  sm:mx-0 lg:mx-5"><WhatWeOfferCard icon={<HeadphonesIcon fontSize="large" className="text-pink-2"/>} title="24/7 Support" msg="Thsi is ttjhe lorem in the otere of in  ssfagae,."/></div>
            <div className="lg:my-9 sm:my-3 my-4 mx-0  sm:mx-0 lg:mx-5"><WhatWeOfferCard icon={<HeadphonesIcon fontSize="large" className="text-pink-2"/>} title="24/7 Support" msg="Thsi is ttjhe lorem in the otere of in  ssfagae,."/></div>
            <div className="lg:my-9 sm:my-3 my-4 mx-0  sm:mx-0 lg:mx-5"><WhatWeOfferCard icon={<HeadphonesIcon fontSize="large" className="text-pink-2"/>} title="24/7 Support" msg="Thsi is ttjhe lorem in the otere of in  ssfagae,."/></div>
             */}
           </div>
           
         </div>
         <div className="w-1/2 sm:2/5 lg:w-1/3 hidden   sm:block">
                <Image
                className=" h-screen"
                src={sideImg}
                alt="Not found"
                />

         </div>
         </div>
</div>
  )
}

export default WhatWeOffer