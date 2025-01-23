import React from "react";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface LanguageProps {
    keyProp?: string;
    img?: string;
}
const Language: React.FC<LanguageProps> = ({ 
    keyProp = "", 
    img = ""
}) => { 
    return (
        <div className="h-12 w-12 sm:w-20 sm:h-20 md:w-24 md:h-24 m-auto">
            <img
                className="object-center object-contain w-full h-full"
                src={img}
                alt={keyProp}
                data-tooltip-id={keyProp} 
                data-tooltip-content={keyProp}
                title={keyProp} 
            />
            <Tooltip id={keyProp} place="bottom" />
        </div>
    );
};

export default Language;
