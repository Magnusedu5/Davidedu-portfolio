import NavBarComp from "../../components/navBar/navBarComp";
import { ImainCover, Irectangle } from "../../utils/icons.utils";
import CodeEditor from "../../components/codeEditor/codeEditorComp";
import ProjectCardComp from "../../components/projectCard/projectCardComp";
import FooterComp from "../../components/footer/footerComp";
import TechStackComp from "../../components/techStack/techStackComp";

const Landing = () => {
  return (
    <div>
      {/* Nav Bar */}
      <NavBarComp />

      {/* Hero section */}
      <div className="lg:w-10/12 w-11/12 m-auto md:mt-44 mt-32">
        <div className="flex justify-start gap-4 items-center">
          <img src={ImainCover} className="md:w-20 w-14 md:h-20" alt="Cover Photo" />
          <h1 className="lg:text-7xl md:text-5xl text-2xl font-bold text-white">SOFTWARE DEVELOPER</h1>
        </div>
        <div className="py-12">
          <p className="md:text-3xl text-xl font-medium text-white">
            I'm David, a software developer, app developer and consultant. I've
            been building websites and systems for the best part of 4 years now.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-[#F8F9FA] hover:bg-[#F8F9FA] text-[#000000] md:text-xl text-lg font-light py-2 px-4 rounded-sm"
          >
            Contact Me
          </button>
          <button
            type="button"
            className="bg-[#212529] hover:bg-[#212529] text-white md:text-xl text-lg font-light py-2 px-4 rounded-sm"
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* code editor */}
          <CodeEditor />

      {/* projects */}
      <div className="md:w-8/12 m-auto text-center my-3">
        <h1 className="md:text-4xl text-2xl font-medium text-[#FFFFFF]">Top Projects</h1>
        <p className="text-base font-normal mt-3">
          These are some outstanding projects I have worked on for organizations
          and clients
        </p>
      </div>
      {/* project cards */}
      <div className="2xl:w-7/12 lg:w-9/12 w-11/12 m-auto md:flex md:gap-6 justify-between">
        <ProjectCardComp
          title="Project 1"
          description="This is a project description"
          image={Irectangle}
        />
        <ProjectCardComp
          title="Project 1"
          description="This is a project description"
          image={Irectangle}
        />
      </div>

      {/* Tech Stacks */}
     <TechStackComp />

      {/* Footer */}
      <FooterComp />
    </div>
  );
};

export default Landing;
