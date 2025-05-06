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
      <div className="w-8/12 m-auto mt-44">
        <div className="flex justify-start gap-4 items-center">
          <img src={ImainCover} className="w-20 h-20" alt="Cover Photo" />
          <h1 className="text-7xl font-bold text-white">SOFTWARE DEVELOPER</h1>
        </div>
        <div className="py-12">
          <p className="text-3xl font-medium text-white">
            I'm David, a software developer, app developer and consultant. I've
            been building websites and systems for the best part of 4 years now.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-[#F8F9FA] hover:bg-[#F8F9FA] text-[#000000] text-xl font-light py-2 px-4 rounded-sm"
          >
            Contact Me
          </button>
          <button
            type="button"
            className="bg-[#212529] hover:bg-[#212529] text-white text-xl font-light py-2 px-4 rounded-sm"
          >
            Download Resume
          </button>
        </div>
      </div>

      {/* code editor */}
      <CodeEditor />

      {/* projects */}
      <div className="w-8/12 m-auto text-center my-3">
        <h1 className="text-4xl font-medium text-[#FFFFFF]">Top Projects</h1>
        <p className="text-base font-normal mt-3">
          These are some outstanding projects I have worked on for organizations
          and clients
        </p>
      </div>
      {/* project cards */}
      <div className="w-8/12 m-auto flex justify-between">
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
