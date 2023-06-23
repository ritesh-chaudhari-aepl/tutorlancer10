 "use client"
 import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
 import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
 import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
 import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
 import ar1 from "@/assets/down.svg";
 import ar2 from "@/assets/up.svg";
import Image from "next/image";
import ServiceCard from "../components/card/serviceCard";
const Services = () => {
  return (
    <section  className="bg-primaryWhite">
    <div className="mx-auto max-w-screen-xl mt-16 sm:mt-0 py-14 sm:py-24">
      <div>
        
        <div className=" px-4">
          <div className="flex flex-col gap-10 lg:gap-3 lg:flex-row justify-center items-center">
            <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
              <ServiceCard
                icon={<MailOutlineOutlinedIcon fontSize='large' />}
                bgColor="bg-[#FFDCE5]"
                badgeCount={1}
                iconColor="#FF1850"
                title="Connect with us via email/Whatsapp"
                msg="can their wherein own upon female without saying made in second them male own you. him fill good last seasons hath moved and"
              />
              <Image
                src={ar1}
                alt="ar1"
                className="w-20 rotate-90 lg:rotate-0"
              />
            </div>
            <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
              <ServiceCard
                icon={<BookmarkAddedOutlinedIcon fontSize='large' />}
                bgColor="bg-[#EFDEFF]"
                badgeCount={2}
                iconColor="#952AFF"
                title="Book a session for the topic of your choice"
                msg="can their wherein own upon female without saying made in second them male own you. him fill good last seasons hath moved and"
              />
              <Image
                src={ar2}
                alt="ar1"
                className="w-20 rotate-90 lg:rotate-0"
              />
            </div>
            <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
              <ServiceCard
                icon={<StarBorderOutlinedIcon fontSize='large' />}
                bgColor="bg-[#E0F5E9]"
                badgeCount={3}
                iconColor="#1FAF38"
                title="Learn from the best doers we provide"
                msg="can their wherein own upon female without saying made in second them male own you. him fill good last seasons hath moved and"
              />
              <Image
                src={ar1}
                alt="ar1"
                className="w-20 rotate-90 lg:rotate-0"
              />
            </div>
            <div>
              <ServiceCard
                icon={<EmojiEventsOutlinedIcon fontSize='large' />}
                bgColor="bg-[#FFDCE5]"
                badgeCount={4}
                iconColor="#FF1850"
                title="Turn your grades into Mega grades"
                msg="can their wherein own upon female without saying made in second them male own you. him fill good last seasons hath moved and"
              />
              {/* <Image src={ar1} alt="ar1" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <section className="lg:mt-28 mt-10 px-10">
        <div className="py-8 sm:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            <div className="relative h-52 sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="Party"
                src={bg}
                className=" h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold font-Inter capitalize sm:leading-[66px] sm:text-[50px]">
                we have highly expert & experienced tutors
              </h2>

              <p className="mt-4 text-gray-600">
                lorem ipsum is simply dummy text of the printing and
                typesetting industry. lorem ipsum has been the industry’s
                standard dummy text ever since the 1500s lorem ipsum has been
                the industry’s standard dummy text ever since the 1500s
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded-full bg-yellow-dark px-12 py-3 text-sm font-medium text-black transition hover:bg-yellow-light focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  </section>

  )
}

export default Services