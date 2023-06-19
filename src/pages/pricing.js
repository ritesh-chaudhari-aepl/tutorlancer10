"use client";
 
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PricingCard from  '@/components/card/pricingCard'
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Pricing = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <>
      <section id="pricing" className="bg-normalWhite text-black">
        <div className="container mx-auto max-w-screen-x lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex flex-col items-center">
              <h6 className="tracking-wide uppercase font-Roboto font-medium text-orange-home8">
                Pricing plan
              </h6>
              <h2 className="text-3xl capitalize font-medium font-Poppins mt-2 text-blue-main sm:text-4xl">
                take plan according to your need
              </h2>
              {/* <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" /> */}
            </div>
            {/* <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p> */}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <PricingCard
              title="standard"
              plan="30$"
              course="Access 05 courses"
              span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="Certificate"
              span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="Re Watch Course"
              span3={<CloseOutlinedIcon className="text-orange-500" />}
              li3="Conference"
              span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="teacher help"
              span5={<CheckOutlinedIcon className="text-green-600" />}
              li5="quizzes"
              span6={<CloseOutlinedIcon className="text-orange-500" />}
              li6="data storage"
              span7={<CloseOutlinedIcon className="text-orange-500" />}
              li7="free call"
            />

            <PricingCard
              title="standard"
              plan="40$"
              course="Access 10 courses"
              span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="Certificate"
              span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="Re Watch Course"
              span3={<CloseOutlinedIcon className="text-orange-500" />}
              li3="Conference"
              span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="teacher help"
              span5={<CheckOutlinedIcon className="text-green-600" />}
              li5="quizzes"
              span6={<CloseOutlinedIcon className="text-orange-500" />}
              li6="data storage"
              span7={<CheckOutlinedIcon className="text-green-600" />}
              li7="free call"
            />

            <PricingCard
              title="standard"
              plan="60$"
              course="Access 15 courses"
              span1={<CheckOutlinedIcon className="text-green-600" />}
              li1="Certificate"
              span2={<CheckOutlinedIcon className="text-green-600" />}
              li2="Re Watch Course"
              span3={<CheckOutlinedIcon className="text-green-600" />}
              li3="Conference"
              span4={<CheckOutlinedIcon className="text-green-600" />}
              li4="teacher help"
              span5={<CheckOutlinedIcon className="text-green-600" />}
              li5="quizzes"
              span6={<CloseOutlinedIcon className="text-orange-500" />}
              li6="data storage"
              span7={<CheckOutlinedIcon className="text-green-600" />}
              li7="free call"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
