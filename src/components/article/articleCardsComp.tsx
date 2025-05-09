import { ArticleCardsProps } from "../../interface/articleInterface";
import { IarrowUpRight, IrectangleTwo } from "../../utils/icons.utils";

const ArticleCardsComp: React.FC<ArticleCardsProps> = ({
  isWorkExperience,
  title,
  description,
}) => {
  return (
    <div className="">
      <div className="flex justify-between items-end mt-10 mb-2">
        <div className="flex items-end gap-4">
          <div>
            <img src={IrectangleTwo} alt="" className="w-16 h-16" />
          </div>
          <div>
            <h4 className="text-base font-normal text-[#DEE2E6]">{title}</h4>
            <h6 className="md:text-3xl text-lg font-medium text-white">{description}</h6>
          </div>
        </div>
        <div>
          <img src={IarrowUpRight} alt="arrow" />
        </div>
      </div>
      {isWorkExperience && (
        <div className="block">
          <ul className="list-disc ml-5">
            <li className="text-base font-normal text-[#DEE2E6]">
              Spearheaded the frontend development team to design the brand
              website of Payable with React, including informative details about
              Payable that will improve customer’s adoption by 20%, leading to
              $1M in revenue from transactions on Payable’s POS device.
            </li>
            <li className="text-base font-normal text-[#DEE2E6]">
              Collaborated with a diverse team of marketers and developers to
              identify user needs from ideation to development improvement by
              designing a matrix dashboard for monitoring agent’s activities and
              other general transactions targeting over 100,000 users.
            </li>
            <li className="text-base font-normal text-[#DEE2E6]">
              Designed the onboarding platform tailored for merchants to utilize
              the Payable banking system to maintain cross-browser
              functionality, guaranteeing accessibility across various devices
              and operating systems.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArticleCardsComp;
