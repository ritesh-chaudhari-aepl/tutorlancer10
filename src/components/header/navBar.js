import React from "react";
import { nav } from "@/data/nav";
const Navbar = () => {
  const navigate=(href)=>{
    let value=document.getElementById(href)
    value.scrollIntoView({behavior:'smooth',block:'center',inline:'center'})
  }
  return (
    <nav>
      <ul className="flex sm:gap-4">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={item.name}>
              <a
                className="text-normalWhite cursor-pointer  hover:text-btnColor  rounded-md font-Inter sm:text-base font-bold transition"
                onClick={()=>navigate(href)}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;