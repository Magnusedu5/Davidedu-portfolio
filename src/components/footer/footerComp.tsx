import { Igithub, Ilinkedin } from "../../utils/icons.utils";

const FooterComp = () => {
  return (
    <div className="border-t border-t-[#3B3B3B] w-full px-32 py-14 grid grid-cols-5">
      <div className="col-span-2">
        <div className="mb-14">
            <h1 className="text-4xl font-medium text-[#F8F9FA]">David Obazi-Ota Edu</h1>
            <p className="text-base font-normal text-[#DEE2E6] mt-2">Software developer</p>
        </div>
        <div className="">
            <h4 className="text-base font-normal text-[#DEE2E6]">Find & connect with me on:</h4>
            <div className="flex gap-2 mt-3">
                <img src={Ilinkedin} alt="linkedin" />
                <img src={Igithub} alt="github" />
            </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="mb-14">
            <h3 className="text-base font-normal text-[#DEE2E6]">Contact Me:</h3>
            <h2 className="text-3xl font-medium text-[#F8F9FA] mt-2">+234 816 571 6036</h2>
        </div>
        <div className="">
            <h3 className="text-base font-normal text-[#DEE2E6]">Email:</h3>
            <h2 className="text-3xl font-medium text-[#F8F9FA] mt-2">daveedu@gmail.com</h2>
        </div>
      </div>
      <div className="col-span-1 flex items-end">
        <h4 className="text-base font-normal text-[#DEE2E6]">©&nbsp; 2025 - Copyright</h4>
      </div>
    </div>
  );
};

export default FooterComp;
