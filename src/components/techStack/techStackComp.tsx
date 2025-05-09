import { stackData } from '../../utils/data'

const TechStackComp = () => {
  return (
    <div>
         <div className="text-center my-8">
        <h1 className="md:text-4xl text-2xl font-medium text-[#FFFFFF]">
          Technical Stacks
        </h1>
        <p className="text-base font-normal mt-3">
          These are the tools I use to build and ship cool stuffs
        </p>
      </div>

      {/* Icons */}
      <div className="2xl:w-1/2 lg:w-5/7 md:w-11/12 w-10/12 m-auto grid md:grid-cols-7 grid-cols-4 lg:gap-4 md:gap-6 gap-2 my-14 md:justify-between justify-center">
        {stackData.map((stack, index) => (
          <div key={index} className="flex flex-col gap-2 items-center md:mb-6">
            <div className="">
              <img
                src={stack.icon}
                alt={stack.name}
                className="md:w-20 w-12 md:h-20 md:p-2 bg-[#212529] rounded-xl hover:border-t-3 hover:border-r hover:border-l hover:border-[#D6D6D7] before:bg-gradient-to-b before:from-[#D6D6D7] before:via-[#D6D6D7]/50 before:to-gray-500/0"
              />
            </div>
            <p className="md:text-lg text-xs font-medium text-[#FFFFFF]">{stack.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackComp