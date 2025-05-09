import FooterComp from "../../components/footer/footerComp";
import NavBarComp from "../../components/navBar/navBarComp";
import ProjectCardComp from "../../components/projectCard/projectCardComp";
import TechStackComp from "../../components/techStack/techStackComp";
import { Irectangle } from "../../utils/icons.utils";

const Projects = () => {
  return (
    <div>
      <NavBarComp />

      <div className="2xl:w-6/12 lg:w-8/12 w-11/12 m-auto mt-44">
        <div className="md:w-8/12 w-11/12 m-auto text-center my-3">
          <h1 className="md:text-4xl text-2xl font-medium text-[#FFFFFF]">Selected Projects</h1>
          <p className="md:text-base text-sm font-normal mt-3">
          These are some outstanding projects I have worked on for organizations and clients
          </p>
        </div>

        {/* project cards */}
        <div className="w-full gap-4 m-auto md:flex justify-between">
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
      </div>
      {/* Tech Stacks */}
      <TechStackComp />

      {/* Footer */}
      <FooterComp />
    </div>
  );
};

export default Projects;
