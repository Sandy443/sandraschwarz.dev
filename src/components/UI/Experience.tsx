import React from "react";
import { FaRegCircle } from "react-icons/fa";

interface ExperienceProps {
  date?: string;
  title?: string;
  desc?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  date = "",
  title = "",
  desc = "",
}) => {
  return (
    <div>
        <div className="hidden md:grid grid-cols-[50%,50%] lg:w-full sm:mx-auto">
            <div className="flex flex-row justify-end">
                <div className="mr-2">
                    {date}
                </div>
                <div className="flex flex-col items-center">
                    <FaRegCircle size={22} />
                    <div className="border-l-secondary border-[1px] h-10"></div>
                </div>
            </div>
            <div className="ml-2 ">
                <div className="font-bold">{title}</div>
                <div>{desc}</div>
            </div>
        </div>
        <div className="md:hidden flex flex-row mx-2 sm:ml-24">
            <div className="flex flex-col items-center">
                <FaRegCircle size={22} />
                <div className="border-l-secondary border-[1px] h-20 sm:h-16"></div>
            </div>
            <div className="ml-2">
                <div className="font-bold">{title}</div>
                <div>{date}</div>
                <div>{desc}</div>
            </div>
        </div>
    </div>
  );
};

export default Experience;
