 "use client"

import Hero from '@/pages/hero'
import Grid from '@/pages/grid'
import WhatWeOffer from '@/pages/whatWeOffer'
import About from '@/pages/about'
import Services from '@/pages/services'
import BecomeATutor from '@/pages/becomeATutor'
import Pricing from '@/pages/pricing'
import RequestAQuote from '@/pages/requestAQuote'
import Testimonials from '@/pages/testimonials'
import Download from '@/pages/download'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Home() {
  return (
    <main>
              
              <a
            href="https://wa.me/message/OXQMEEW5ME6UC1"
            className="  w-fit h-fit z-50 bg-[green]  text-base font-semibold text-[white] hover:scale-105 duration-300  delay-100  rounded-full right-7 bottom-5 fixed"
          >
           <span className=" px-2 pl-6  text-primaryWhite">Chat In</span> <WhatsAppIcon fontSize='large' className="inline-flex text-5xl p-1"  />
          </a>
              <Hero/>
              <Grid/>
              <WhatWeOffer/>
              <About/>
              <Services/>
              {/* <BecomeATutor/> */}
              <Pricing/>
              <RequestAQuote/>
              {/* <Testimonials/> */}
              <Download/>
    </main>
  )
}
