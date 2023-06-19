import React from "react";
import { nav } from "@/data/nav";
const Navbar = () => {
  return (
    <nav>
      <ul className="flex sm:gap-4">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={item.name}>
              <a
                className="text-dark hover:text-lightBg-b  rounded-md font-Inter sm:text-base font-bold transition"
                href={href}
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