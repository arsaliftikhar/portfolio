"use client";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { useEffect, useState } from "react";

import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [logoImage, setLogoImage] = useState("/logo/dark-logo.png");
  const [mobileMenu,setMobileMenu] = useState(true);

  useEffect(() => {
    checkThemeMode();
  });

  const checkThemeMode = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setLogoImage("/logo/dark-logo.png");
    } else {
      setLogoImage("/logo/light-logo.png");
    }
  };


  const mobileMenuButton = ()=>{
    if(mobileMenu)
    {
        setMobileMenu(false)
    }
    else
    {
        setMobileMenu(true)
    }
  }

  return (
    <div className="">
      <div className="hidden md:block md:flex md:items-center md:justify-between mt-10">
        <Image
          src={logoImage}
          alt=""
          className="w-32 md:w-36 lg:w-44 xl:w-48"
          height={"180"}
          width={"180"}
        />
        <div className="flex items-center gap-8">
          <Link
            href={"#about"}
            className="text-2xl text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            About
          </Link>
          <Link
            href={"#experience"}
            className="text-2xl text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Experience
          </Link>
          <Link
            href={"#projects"}
            className="text-2xl text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Projects
          </Link>
          <Link
            href={"#reviews"}
            className="text-2xl text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Reviews
          </Link>
          <Link
            href={"#contact"}
            className="text-2xl text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Contact
          </Link>
          <div className="-mt-4">
            <div onClick={checkThemeMode}>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden flex items-center gap-3 justify-between p-5">
        <div onClick={checkThemeMode}>
          <ThemeToggle />
        </div>
        <div onClick={mobileMenuButton} className="text-4xl text-black-800 dark:text-white" >
            {mobileMenu?<HiMiniBars3/>:<IoCloseOutline/>}
        </div>
        
      </div>

      <div className={`flex justify-end ${mobileMenu?'hidden':''}`}>
        <div className="flex flex-col gap-2 w-40 border border-black-600 dark:border-black-300 bg-black-50 dark:bg-black-600 text-right p-3 px-5 rounded text-lg absolute z-10">
          <Link
            href={"#about"}
            className=" text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            About
          </Link>
          <Link
            href={"#experience"}
            className=" text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Experience
          </Link>
          <Link
            href={"#projects"}
            className=" text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Projects
          </Link>
          <Link
            href={"#reviews"}
            className=" text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Reviews
          </Link>
          <Link
            href={"#contact"}
            className=" text-black-700 dark:text-white pb-3 transition-all duration-300 border-transparent border-b-2 hover:border-black-300 hover:text-black-300 hover:dark:text-black-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
