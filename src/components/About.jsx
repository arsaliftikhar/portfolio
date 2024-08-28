import Image from "next/image";
import { FaMedal } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="pt-10 pb-28" id="about">
        <div className="text-center ">
          <p className=" text-black-400 dark:text-black-200">Get To Know More</p>
          <p className="font-bold text-2xl md:text-5xl mt-3 text-black-600 dark:text-white">About Me</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center  md:gap-16 mt-20">
          <Image src={'/profile-image/image3.png'} alt="" height={350} width={350} className="rounded-2xl mb-10 w-36 md:w-56 lg:w-96 opacity-95" />
          <div className="flex flex-col w-full">
            <div className="flex gap-3 sm:gap-10">
              <div className="border-2 border-black-300 rounded-3xl w-full text-center p-5 text-sm sm:text-lg">
                <div className="flex justify-center">
                  <FaMedal className="text-2xl text-black-600 dark:text-black-100" />
                </div>
                <p className="font-bold mt-3 mb-1 text-black-600 dark:text-white">Experience</p>
                <p className="text-black-400 dark:text-black-300 text-base">6+ Years</p>
                <p className="text-black-400 dark:text-black-300 text-base">Full-stack Development</p>
              </div>
              <div className="border-2 border-black-300 rounded-3xl w-full text-center p-5 text-sm sm:text-lg">
                <div className="flex justify-center">
                  <FaUserGraduate className="text-2xl text-black-600 dark:text-black-100" />
                </div>
                <p className="font-bold mt-3 mb-1 text-black-600 dark:text-white">Education</p>
                <p className="text-black-400 dark:text-black-300 text-base">(BSCS)</p>
                <p className="text-black-400 dark:text-black-300 text-base">Bachelor of Computer Science</p>
              </div>
            </div>
            <div className="mt-8  text-black-600 dark:text-black-200 md:text-lg text-justify">
              <p>
                I&apos;m a passionate and experienced full-stack developer with a strong foundation in both front-end and back-end technologies. I specialize in building robust and scalable web applications that solve real-world problems and provide seamless user experiences. My expertise spans across various technologies, including HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, PHP, Laravel, and MySQL, among others.
              </p>
              <p className="mt-3">
                If you&apos;re looking for a developer who is not just technically proficient but also dedicated to building meaningful and impactful software, I&apos;m your go-to person.
              </p>
              <p className="mt-3 font-semibold dark:text-black-100 bg-black-100 dark:bg-black-600 p-1">
                Let&apos;s connect and create something amazing together!
              </p>
            </div>
            <div className="flex justify-end">
                <RiArrowDownDoubleLine className="text-5xl cursor-pointer mt-10"/>
              </div>
          </div>
        </div>
      </div>
  )
}

export default About