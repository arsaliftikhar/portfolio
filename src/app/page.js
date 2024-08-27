import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaMedal } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-6 lg:px-20 xl:px-40 font-moderustic">
      <Navbar />
      <Hero />

      <div className="mt-40">
        <div className="text-center">
          <p className=" text-black-400 dark:text-black-200">Get To Know More</p>
          <p className="font-bold md:text-5xl mt-3 text-black-600 dark:text-white">About Me</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-20">
          <Image src={'/profile-image/image3.png'} alt="" height={350} width={350} className="rounded-2xl w-36 md:w-56 lg:w-80 opacity-95" />
          <div className="flex flex-col w-full">
            <div className="flex gap-3 sm:gap-10">
              <div className="border-2 border-black-300 rounded-3xl w-full text-center p-5 text-sm sm:text-lg">
                <div className="flex justify-center">
                  <FaMedal className="text-2xl text-black-600 dark:text-black-100" />
                </div>
                <p className="font-bold mt-3 mb-1 text-black-600 dark:text-white">Experience</p>
                <p className="text-black-400">6+ Years</p>
                <p className="text-black-400">Full-stack Development</p>
              </div>
              <div className="border-2 border-black-300 rounded-3xl w-full text-center p-5 text-sm sm:text-lg">
                <div className="flex justify-center">
                  <FaUserGraduate className="text-2xl text-black-600 dark:text-black-100" />
                </div>
                <p className="font-bold mt-3 mb-1 text-black-600 dark:text-white">Education</p>
                <p className="text-black-400">Information Computer Science (ICS)</p>
                <p className="text-black-400">Bachelor of Computer Science (BSCS)</p>
              </div>
            </div>
            <div className="mt-5  text-black-600 dark:text-white">
              <p>
                I'm a passionate and experienced full-stack developer with a strong foundation in both front-end and back-end technologies. I specialize in building robust and scalable web applications that solve real-world problems and provide seamless user experiences. My expertise spans across various technologies, including HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, PHP, Laravel, and MySQL, among others.
              </p>
              <p className="mt-3">
                If you're looking for a developer who is not just technically proficient but also dedicated to building meaningful and impactful software, I'm your go-to person.
              </p>
              <p className="mt-3 font-semibold">
                Let's connect and create something amazing together!
              </p>

            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
