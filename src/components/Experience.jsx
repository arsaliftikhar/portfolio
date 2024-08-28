import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="pt-10 pb-28" id="experience">
        <div className="text-center">
          <p className=" text-black-400 dark:text-black-200">Explore My</p>
          <p className="font-bold text-2xl md:text-5xl mt-3 text-black-600 dark:text-white">Experience</p>
        </div>
        <div className="grid grid-cols-1  xl:grid-cols-3 gap-5 sm:gap-10 mt-16">
          <div className="border-2 bg-black-50 dark:bg-black-600 border-black-300 rounded-3xl w-full text-center p-5 text-sm sm:text-lg">
            <p className="font-bold mt-3 mb-1 text-black-400 dark:text-black-300 text-2xl">Frontend Development</p>
            <div className="mt-5 grid justify-center grid-cols-2 xl:grid-cols-2 gap-5">
                <Skill name="HTML" level="Experienced"/>
                <Skill name="CSS" level="Experienced"/>
                <Skill name="JavaScript" level="Intermediate"/>
                <Skill name="JQuery" level="Intermediate"/>
                <Skill name="AJAX" level="Intermediate"/>
                <Skill name="Bootstrap" level="Experienced"/>
                <Skill name="Tailwind Css" level="Intermediate"/>
                <Skill name="ReactJS" level="Intermediate"/>
            </div>
          </div>
          <div className="border-2 bg-black-50 dark:bg-black-600 border-black-300 rounded-3xl w-full text-center p-5 text-sm sm:text-lg">
            <p className="font-bold mt-3 mb-1 text-black-400 dark:text-black-300 text-2xl">Backend Development</p>
            <div className="mt-5 grid justify-center grid-cols-2 xl:grid-cols-2 gap-5">
                <Skill name="PHP" level="Intermediate"/>
                <Skill name="Laravel" level="Intermediate"/>
                <Skill name="ExpressJS" level="Intermediate"/>
                <Skill name="NodeJS" level="Intermediate"/>
                <Skill name="MySQL" level="Intermediate"/>
                <Skill name="MongoDB" level="Intermediate"/>
                <Skill name="NextJS" level="Intermediate"/>
                <Skill name="Github" level="Intermediate"/>
            </div>
          </div>
          <div className="border-2 bg-black-50 dark:bg-black-600 border-black-300 rounded-3xl w-full text-center p-5 text-sm sm:text-lg">
            <p className="font-bold mt-3 mb-1 text-black-400 dark:text-black-300 text-2xl">Services</p>
            <div className="mt-5 grid justify-start gap-5">
                <Skill name="MLM | CMS Development" level="Experienced"/>
                <Skill name="E-commerce Solution" level="Experienced"/>
                <Skill name="Web Application Development" level="Experienced"/>
                <Skill name="API Integration & Development" level="Experienced"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Experience


export function Skill(props) {
    return (
      <div className="flex items-center gap-3 m-3">
        <BsPatchCheckFill className="w-6 h-6 text-black-600 dark:text-black-200 hidden sm:block"/>
        <div className="text-left">
          <p className="text-black-600 dark:text-white font-bold text-sm">{props?.name}</p>
          <p className="text-black-400 text-sm">{props?.level}</p>
        </div>
      </div>
    )
  }