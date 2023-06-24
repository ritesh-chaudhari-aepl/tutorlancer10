 
 import boy from '@/assets/becomeATutorBoy.png'
 import girl from '@/assets/becomeATutorGirl.png'
const BecomeATutor = () => {
  return (
    <section
      class=" becomeATutorBg py-0 sm:py-4 lg:py-20"
    >
      <div class="mx-auto max-w-screen-2xl py-8 sm:py-16">
        <div class="flex px-6 flex-col items-center gap-3 sm:gap-6 sm:justify-center lg:flex-row sm:ml-0">
          <div class="  becomeATutorBgBoy w-[310px] sm:w-[480px] card1">
            <div
              class=" bg-lightBlue w-1/2 float-right items-center text-center mb-24 sm:h-80 p-4 sm:p-6 flex justify-center flex-col gap-0 sm:gap-2"
              
            >
              
              <h3 class="font-medium font-Inter text-normalWhite text-3xl  mt-2">
                Become A Teacher
              </h3>
              <p class="capitalize text-sm mt-4 mb-6 text-normalWhite font-Inter">
                We are hear to build your career.
              </p>
              <a
            href="/"
            className="inline-block rounded-md text-normalWhite w-fit bg-btnColor px-5 py-3 text-xs font-medium text-lightBg-n transition   capitalize"
          >
            Contact Us
          </a>
            </div>
          </div>

          <div class="  becomeATutorBgGirl w-[310px] sm:w-[480px] card2">
            <div
              class=" bg-lightBlue w-1/2 float-right items-center text-center mb-24 sm:h-80 p-4 sm:p-6 flex justify-center flex-col gap-0 sm:gap-2"
              
            >
              
              <h3 class="font-medium font-Inter text-normalWhite text-3xl  mt-2">
                Become A Student
              </h3>
              <p class="capitalize text-sm mt-4 mb-6 text-normalWhite font-Inter">
                We are hear to build your career.
              </p>
              <a
            href="/"
            className="inline-block rounded-md text-normalWhite w-fit bg-btnColor px-5 py-3 text-xs font-medium text-lightBg-n transition   capitalize"
          >
            Contact Us
          </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default BecomeATutor