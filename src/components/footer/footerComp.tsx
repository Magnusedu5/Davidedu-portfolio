import { Igithub, Ilinkedin } from "../../utils/icons.utils";

const FooterComp = () => {
  return (
    <div className="md:w-11/12 2xl:w-7/12 w-11/12 m-auto py-14 md:grid 2xl:grid-cols-7 md:grid-cols-5">
      <div className="2xl:col-span-3 md:col-span-2">
        <div className="md:mb-14 mb-6">
            <h1 className="lg:text-4xl md:text-2xl text-xl font-medium text-[#F8F9FA]">David Obazi-Ota Edu</h1>
            <p className="text-base font-normal text-[#DEE2E6] md:mt-2">Software developer</p>
        </div>
        <div className="md:mb-0 mb-6">
            <h4 className="text-base font-normal text-[#DEE2E6]">Find & connect with me on:</h4>
            <div className="flex gap-2 md:mt-3">
                <img src={Ilinkedin} alt="linkedin" />
                <img src={Igithub} alt="github" />
            </div>
        </div>
      </div>
      <div className="2xl:col-span-3 md:col-span-2">
        <div className="md:mb-14 mb-6">
            <h3 className="text-base font-normal text-[#DEE2E6]">Contact Me:</h3>
            <h2 className="lg:text-3xl md:text-2xl text-xl font-medium text-[#F8F9FA] md:mt-2">+234 816 571 6036</h2>
        </div>
        <div className="md:block hidden">
            <h3 className="text-base font-normal text-[#DEE2E6]">Email:</h3>
            <h2 className="lg:text-3xl md:text-2xl text-xl font-medium text-[#F8F9FA] md:mt-2">daveedu@gmail.com</h2>
        </div>
      </div>
      <div className="col-span-1 md:flex hidden items-end md:my-0 my-6">
        <h4 className="lg:text-base md:text-sm text-end font-normal text-[#DEE2E6]">©&nbsp; 2025 - Copyright</h4>
      </div>
      {/* small screen */}
      <div className="flex justify-between items-end md:hidden">
        <div className="">
            <h3 className="text-base font-normal text-[#DEE2E6]">Email:</h3>
            <h2 className="lg:text-3xl md:text-2xl text-xl font-medium text-[#F8F9FA] md:mt-2">daveedu@gmail.com</h2>
        </div>
          <div className="flex item-end">
            <h4 className="text-xs text-end font-normal text-[#DEE2E6]">©&nbsp; 2025 - Copyright</h4>
          </div>
      </div>
    </div>
  );
};

export default FooterComp;
