import { BiLogoGmail } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mt-80 mb-72" id="contact">
      <div className="text-center">
        <p className=" text-black-400 dark:text-black-200">Get in Touch</p>
        <p className="font-bold text-2xl md:text-5xl mt-3 text-black-600 dark:text-white">
          Contact Me
        </p>
      </div>

      <div className="flex justify-center">
        <div className="mt-10 border-2 border-black-400 rounded-full text-center py-4 px-8 text-sm sm:text-lg flex items-center justify-between gap-3">
          
          <Icon icon={<BiLogoGmail />} link="mailto:arsaliftikhar@gmail.com"/>
          <Icon icon={<BiLogoTelegram />} link="https://t.me/fliktus"/>
          <Icon icon={<FaLinkedinIn />} link="https://www.linkedin.com/in/arsaliftikhar/"/>
        </div>
      </div>
      <div className="text-center mt-10 dark:text-black-200">
        <p>
         Copyright © 2023 John Doe. All Rights Reserved.
         </p>
      </div>
    </div>
  );
};

export default Contact;


export function Icon(props)
{
    return (
        <>
        <a href={props?.link} target="_blank">
        <div className="font-bold bg-black-500 dark:bg-white text-white dark:text-black-600 border-2 rounded-full p-2 cursor-pointer hover:scale-105 transition-all duration-300 hover:border-black-600 hover:dark:border-white hover:bg-white hover:dark:bg-black-600 hover:text-black-600 hover:dark:text-white">
            {props?.icon}
        </div>
        </a>
        </>
    )
}
