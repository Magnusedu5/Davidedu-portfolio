import { ProjectCard } from "../../types/projectCardType"


const ProjectCardComp = (props: ProjectCard) => {
  return (
    <div className='my-14'>
        <img src={props?.image} alt='' className='w-lg' />
        <h3 className='text-3xl font-medium text-[#FFFFFF] mt-6 mb-2'>{props?.title}</h3>
        <p className='text-base font-normal text-[#FFFFFF]'>{props?.description}</p>
    </div>
  )
}

export default ProjectCardComp