import React from "react";
import { Button } from "./Button/Button";
import ReactMarkdown from 'react-markdown';


interface ProjectProps {
    img?: string;
    title?: string;
    desc?: string;
    url?: string;
    className?: string;
}

const Project: React.FC<ProjectProps> = ({
    img = "", 
    title = "", 
    desc = "", 
    url = "", 
    className = ""
}) => {
    return (
        <div className={`w-full flex flex-col sm:flex-row p-5 gap-4 sm:gap-8 my-4  ${className} `} >
            <img alt={title} src={img} className="sm:w-[50%] object-contain mx-auto drop-shadow-2xl shadow-sm" />
            <div className="sm:w-[40%] mt-8">
                <div className="text-2xl mb-2 font-semibold">{title}</div>
                <ReactMarkdown>{desc}</ReactMarkdown>
                <div className="mt-6">
                    <a href={url} target="_blank">
                        <Button variant="outlined">Check it out</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;