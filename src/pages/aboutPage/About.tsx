import ArticleCardsComp from "../../components/article/articleCardsComp";
import FooterComp from "../../components/footer/footerComp";
import NavBarComp from "../../components/navBar/navBarComp";
import TechStackComp from "../../components/techStack/techStackComp";
import { Icover, IcoverOne, IcoverTwo, IcoverThree, IcoverFour, Istar, IexperienceIcon } from "../../utils/icons.utils";

const About = () => {
  return (
    <div className="">
      <NavBarComp />
      {/* Hero Section  */}
      <div className="flex justify-between w-6/12 m-auto mt-44 relative">
        <div className="flex flex-col gap-20">
          <img src={IcoverFour} alt="" className="w-36 h-36" />
          <img src={IcoverThree} alt="" className="w-36 h-36 -ml-8"/>
        </div>
        <div className="">
          <img src={Icover} alt="" />
        </div>
        <div className="flex flex-col gap-20">
          <img src={IcoverTwo} alt="" className="w-36 h-36"/>
          <img src={IcoverOne} alt="" className="w-36 h-36 -ml-8"/>
        </div>
      </div>

      <div className="absolute left-[44%] flex justify-center gap-2 bg-[#202225]/60 backdrop-blur-transparent rounded-2xl p-4 w-[16rem] rotate-[-5deg] z-50 border-r border-l border-t border-[#3B3B3B]">
        <img src={Istar} alt="" />
        <span className="text-white">4 Years of Experience</span>
        <img src={IexperienceIcon} alt="" />
      </div>




      {/* Profile */}
      <div className="w-7/12 m-auto mt-10">
        <div className="text-center my-3">
          <h1 className="text-6xl font-bold text-white">SOFTWARE DEVELOPER</h1>
          <p className="text-base font-normal mt-4 text-start">
            My name is David Obazi-Ota Edu, and I am a seasoned software
            engineer with over 4 years of experience in the industry. I have
            dedicated my career to mastering Java and building robust, scalable
            software solutions. Currently, I am working finding my next role
            where I can contribute in engineering and high-performance corporate
            software. Throughout my career, I have been instrumental in
            architecting and implementing large-scale systems that have
            significantly enhanced business operations and customer
            satisfaction.
          </p>
          <p className="text-base font-normal mt-3 text-start">
            Frontend Engineer with 4+ years of experience in executing frontend
            mobile and web development using Angular, React, React.js,
            JavaScript, TypeScript, HTML/CSS and other frontend programming
            language tools in Fintech, EdTech, and Business sectors. Committed
            to crafting high presentation UI with exceptional handling to
            improve user experience.
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="w-7/12 m-auto mt-20">
        <div className="text-center my-3">
          <h1 className="text-4xl font-medium text-white">Work Experience</h1>
          <p className="text-base font-normal mt-3">
            Here are some of my career progression
          </p>
        </div>
        <ArticleCardsComp
          isWorkExperience={true}
          title="Dec 2023 - Present"
          description="Frontend developer, Payable"
        />
      </div>

      {/* Education */}
      <div className="w-5/12 m-auto mt-20">
        <div className="text-center my-3">
          <h1 className="text-4xl font-medium text-white">
            Education & Certifications
          </h1>
          <p className="text-base font-normal mt-3">
            Here are some of my career progression
          </p>
        </div>
        <div className="my-10 bg-[#212529] rounded-2xl py-4 px-5">
          <h3 className="text-3xl font-medium text-white">
            Harvard University
          </h3>
          <h6 className="text-base font-normal text-[#DEE2E6]">
            Master of Science, Data Science, 2020 - 2022
          </h6>
        </div>
        <div className="my-10 bg-[#212529] rounded-2xl py-4 px-5">
          <h3 className="text-3xl font-medium text-white">
            University of Abuja
          </h3>
          <h6 className="text-base font-normal text-[#DEE2E6]">
            Bachelor of Science, Computer Science, 2010 - 2015
          </h6>
        </div>
      </div>

      {/* Articles */}
      <div className="w-7/12 m-auto mt-20">
        <div className="text-center my-3">
          <h1 className="text-4xl font-medium text-white">Articles</h1>
          <p className="text-base font-normal mt-3">
            I write awesome documents and journals
          </p>
        </div>
        <ArticleCardsComp title="Article" description="Article Title" />
      </div>

      {/* Tech Stacks */}
      <TechStackComp />

      {/* Footer */}
      <FooterComp />
    </div>
  );
};

export default About;
