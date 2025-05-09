import ArticleCardsComp from "../../components/article/articleCardsComp";
import FooterComp from "../../components/footer/footerComp";
import NavBarComp from "../../components/navBar/navBarComp";
import TechStackComp from "../../components/techStack/techStackComp";
import { Icover, IcoverOne, IcoverTwo, IcoverThree, IcoverFour, Istar, IexperienceIcon } from "../../utils/icons.utils";

const About = () => {
  return (
    <div className="">
      <NavBarComp />
      {/* Mobile Hero Section  */}
      <div className="lg:hidden flex justify-between md:w-6/12 w-10/12 m-auto md:mt-44 mt-34 relative">
        <div className="flex flex-col justify-between h-10/12 absolute top-4 -left-5">
          <img src={IcoverFour} alt="" className="lg:w-36 w-14 lg:h-36 h-14" />
          <img src={IcoverThree} alt="" className="lg:w-36 w-14 lg:h-36 h-14 lg:-ml-8"/>
        </div>
        <div className="">
          <img src={Icover} alt="" />
        </div>
        <div className="flex flex-col justify-between h-11/12 absolute top-4 -right-5">
          <img src={IcoverTwo} alt="" className="lg:w-36 w-14 lg:h-36 h-14"/>
          <img src={IcoverOne} alt="" className="lg:w-36 w-14 lg:h-36 h-14 lg:-ml-8"/>
        </div>
      </div>
      {/* Mobile Hero Section  */}
      <div className="lg:flex hidden justify-between lg:w-8/12 2xl:w-6/12 m-auto mt-44 relative">
        <div className="flex flex-col justify-between">
          <img src={IcoverFour} alt="" className="w-28 h-28" />
          <img src={IcoverThree} alt="" className="w-28 h-28 -ml-8"/>
        </div>
        <div className="">
          <img src={Icover} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <img src={IcoverTwo} alt="" className="w-28 h-28"/>
          <img src={IcoverOne} alt="" className="w-28 h-28 -ml-8"/>
        </div>
      </div>

      <div className="absolute 2xl:left-3/7 lg:left-[40%] md:left-2/6 left-14 flex justify-center gap-2 bg-[#202225]/60 backdrop-blur-transparent rounded-2xl md:p-4 p-3 w-[16rem] rotate-[-5deg] z-30 border-r border-l border-t border-[#3B3B3B]">
        <img src={Istar} alt="" />
        <span className="text-white">4 Years of Experience</span>
        <img src={IexperienceIcon} alt="" />
      </div>




      {/* Profile */}
      <div className="lg:w-7/12 w-11/12 m-auto lg:mt-10 md:mt-20 mt-14">
        <div className="text-center my-3">
          <h1 className="md:text-6xl text-2xl font-bold text-white">SOFTWARE DEVELOPER</h1>
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
      <div className="lg:w-7/12 w-11/12 m-auto mt-20">
        <div className="text-center my-3">
          <h1 className="md:text-4xl text-2xl font-medium text-white">Work Experience</h1>
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
      <div className="lg:w-5/12 md:w-9/12 w-11/12 m-auto mt-20">
        <div className="text-center my-3">
          <h1 className="md:text-4xl text-2xl font-medium text-white">
            Education & Certifications
          </h1>
          <p className="text-base font-normal md:mt-3 mt-1">
            Here are some of my career progression
          </p>
        </div>
        <div className="my-10 bg-[#212529] rounded-2xl py-4 px-5">
          <h3 className="md:text-3xl text-xl font-medium text-white">
            Harvard University
          </h3>
          <h6 className="text-base font-normal text-[#DEE2E6]">
            Master of Science, Data Science, 2020 - 2022
          </h6>
        </div>
        <div className="my-10 bg-[#212529] rounded-2xl py-4 px-5">
          <h3 className="md:text-3xl text-xl font-medium text-white">
            University of Abuja
          </h3>
          <h6 className="text-base font-normal text-[#DEE2E6]">
            Bachelor of Science, Computer Science, 2010 - 2015
          </h6>
        </div>
      </div>

      {/* Articles */}
      <div className="lg:w-7/12 md:w-9/12 w-11/12 m-auto mt-20">
        <div className="text-center my-3">
          <h1 className="md:text-4xl text-2xl font-medium text-white">Articles</h1>
          <p className="text-base font-normal md:mt-3 mt-1">
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
