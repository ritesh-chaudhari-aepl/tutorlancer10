/* eslint-disable react/prop-types */

// const PricingCard = ({ icon, iconBgColor, title, description }) => {
//     return (
//       <div className="rounded-md bg-white p-6 gap-5 flex flex-col mb-10 sm:items-start sm:justify-start items-center justify-center">
//         <div className="">
//           {/* icon */}
//           <div
//             className={`w-14 h-14 rounded-[15px] items-center justify-center flex ${iconBgColor}`}
//           >
//             <img src={icon} alt="Icon" className="w-7 h-7" />
//           </div>
//         </div>
//         <span className="font-semibold md:text-base font-Inter sm:text-[24px]">{title}</span>
//         <p className="text-sm capitalize md:text-[14px] sm:text-left text-center font-medium font-Inter">{description}</p>
//       </div>
//     );
//   };
//   export default PricingCard;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classNames from "classnames";

const PricingCard = ({
  plan,
  course,
  li1,
  span1,
  li2,
  span2,
  li3,
  span3,
  li4,
  span4,
  li5,
  span5,
  li6,
  span6,
  li7,
  span7,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClasses = classNames(
    "flex flex-col text-black gap-3 bg-white cursor-pointer rounded-xl border border-pink-500/10 shadow-md transition",
    {
      "hover:shadow-blue-light -translate-y-4":
        isHovered,
    }
  );
  // const cardClasses = classNames(
  //   "flex flex-row mb-4",
  //   {
  //     "bg-white hover:shadow-pink-hotPink": isHovered,
  //   }
  // );

  // const iconClasses = classNames(
  //   "rounded-full text-blue-main border-2 w-auto h-fit p-4 transition bg-primaryWhite",
  //   {
  //     "border-blue-main": isHovered,
  //   }
  // );

  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="wrapper grid-flow-col block rounded-xl border border-pink-500/10 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
        <div className="bg-gray text-center gap-8 py-6 rounded-t-xl">
          <p className="font-semibold font-Poppins font-xl capitalize text-blue-main">
            {title}
          </p>
          <p className="font-semibold text-4xl font-Poppins text-blue-main">
            {plan}{" "}
            <span className="font-medium text-sm text-blue-main capitalize">
              / mon
            </span>
          </p>
          <h6 className="font-semibold font-Poppins font-md capitalize text-blue-main">
            {course}
          </h6>
        </div>
        <div className="card gap-4 p-8 justify-start flex flex-col">
          <ul className="grid gap-3 mb-6">
            <li className="capitalize gap-4 border-b pb-2">
              <span className="">{span1}</span> {li1}
            </li>
            <li className="capitalize gap-4 border-b pb-2">
              <span className="">{span2}</span> {li2}
            </li>
            <li className="capitalize gap-4 border-b pb-2">
              <span className="">{span3}</span> {li3}
            </li>
            <li className="capitalize gap-4 border-b pb-2">
              <span className="">{span4}</span> {li4}
            </li>
            <li className="capitalize gap-4 border-b pb-2">
              <span className="">{span5}</span> {li5}
            </li>
            <li className="capitalize gap-4 border-b pb-2">
              <span className="">{span6}</span> {li6}
            </li>
            <li className="capitalize gap-4 border-b pb-2">
              <span className="">{span7}</span> {li7}
            </li>
          </ul>

          <a
            href="#"
            className="uppercase text-center  bg-btnColor from-orange-home8 to-yellow-home8 sm:px-8 px-12 py-3 text-sm font-medium text-normalWhite transition hover:bg-blue-main focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Buy plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
