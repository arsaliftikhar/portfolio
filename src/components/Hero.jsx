import Button from "@/components/Button";
import Image from "next/image";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center mt-28">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="relative">
            <Image 
              src={'/profile-image/image1.png'} 
              className="w-56 md:w-80 lg:w-96 border-4 border-gray-300 rounded-full object-cover transition-transform duration-300 hover:scale-105" 
              alt="Profile Picture" 
              height={400} 
              width={400}
            />
          </div>
          <div className="text-center p-5">
            <p className="font-semibold md:text-xl text-black-400 dark:text-black-200">Hello, I&apos;m</p>
            <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-4 font-extrabold text-black-600 dark:text-white">Arsal Iftikhar</p>
            <p className="text-2xl sm:text-2xl md:text-3xl xl:text-4xl mt-3 font-bold text-black-400 dark:text-black-200">Full-stack Developer</p>
            <div className="mt-5 flex justify-center items-center gap-4">
                <Button type="outline" value="Download CV"/>
                <Button type="fill" value="Contact Info"/>
            </div>
            <div className="mt-6 flex justify-center items-center gap-3">
              <Link href={'/'}>
                <IoLogoLinkedin className="text-4xl text-black-600 dark:text-white"/>
              </Link>
              <Link href={'/'}>
                <FaGithubSquare className="text-4xl text-black-600 dark:text-white"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero