"use client";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import Navbar from "./navBar";
import MobileNav from "./mobileNav";
import Image from "next/image";
import logo from "@/assets/logo15.png"
export default function Header({ myRef }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 170 ? setScroll(true) : setScroll(false);
    });
  }, []);
  return (
   
    <header
      className={`${
        scroll
          ? "top-0  navBg z-30 sm:top-0 sm:py-3 bg-lightBg-h shadow-2xl overflow-hidden"
          : "top-0 sm:top-0"
      } py-2  text-normalWhite   sm:py-8 fixed w-full transition-all z-10`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 flex justify-between items-center">
        {/* logo */}
        <a href="#" className="bg-secondary p-1">
          <span className="font-Inter font-bold tracking-[10px] text-2xl uppercase sm:text-[30px]">
             <Image src={logo} height={80} alt="LOGO" />
          </span>
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden sm:flex sm:items-center sm:gap-3">
          <Navbar ref={myRef} />
        </div>
        <div className="hidden   sm:block">
          
          <a
            href="https://wa.me/message/OXQMEEW5ME6UC1"
            className="inline-block rounded-xl bg-black px-8 py-4 text-sm font-medium text-lightBg-n transition   capitalize"
          >
            Chat With Us
          </a>
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className="sm:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-primary" />
          ) : (
            <AiOutlineMenu className="text-3xl text-secondary" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] sm:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
   
  );
}