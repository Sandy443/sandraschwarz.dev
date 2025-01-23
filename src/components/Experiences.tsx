import React from "react";
import Experience from "./UI/Experience";

const Experiences = () => {
    return (
        <div id="experience" className="mx-auto max-w-3xl mt-20">
            <h2>Experience</h2>
            <div className="subheading">Where I've worked</div>
            <div className="flex flex-col">
                <Experience 
                    date="16/10/2023 – 16/06/2024"
                    title="Alpin GmbH"
                    desc="Software Developerin im Web-Bereich" />
                <Experience 
                    date="30/01/2023 – 10/02/2023"
                    title="Schulpraktikum bei tt-consulting"
                    desc="Schulpraktikum im Bereich Web Development" />
                <Experience 
                    date="16/06/2022 – 30/06/2022"
                    title="Praktikum bei Additive Lana"
                    desc="Praktikum im Bereich des Digital Marketing" />
                <Experience 
                    date="30/05/2022 – 15/06/2022"
                    title="Schulpraktikum bei Additive Lana"
                    desc="Schulpraktikum im Bereich des Digital Marketing" />
            </div>
        </div>
    );
};

export default Experiences;
