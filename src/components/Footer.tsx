import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="w-full border-secondary border-t-2" style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }}>
            <div className="flex flex-row items-center justify-center">
                <BiCopyright /> 2025 Sandra Schwarz 
            </div>
        </div>
    );
};

export default Footer;