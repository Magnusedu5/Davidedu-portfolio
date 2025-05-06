import { stackData } from '../../utils/data'

const TechStackComp = () => {
  return (
    <div>
         <div className="text-center my-3">
        <h1 className="text-4xl font-medium text-[#FFFFFF]">
          Technical Stacks
        </h1>
        <p className="text-base font-normal mt-3">
          These are the tools I use to build and ship cool stuffs
        </p>
      </div>

      {/* Icons */}
      <div className="w-1/2 m-auto grid grid-cols-7 gap-4 my-14 justify-between">
        {stackData.map((stack, index) => (
          <div key={index} className="flex flex-col gap-2 items-center mb-6">
            <div className="">
              <img
                src={stack.icon}
                alt={stack.name}
                className="w-20 h-20 p-2 bg-[#212529] rounded-xl hover:border-t-3 hover:border-r hover:border-l hover:border-[#D6D6D7] before:bg-gradient-to-b before:from-[#D6D6D7] before:via-[#D6D6D7]/50 before:to-gray-500/0"
              />
            </div>
            <p className="text-lg font-medium text-[#FFFFFF]">{stack.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackComp