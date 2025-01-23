import React from "react";
import Language from "./UI/Stack";

const languages = [
    { name: "HTML", img: "/images/languages/html.png" },
    { name: "CSS", img: "/images/languages/css.png" },
    { name: "JavaScript", img: "/images/languages/js.png" },
    { name: "React", img: "/images/languages/react.png" },
    { name: "PHP", img: "/images/languages/php.png" },
    { name: "Java", img: "/images/languages/java.png" },
    { name: "SQL", img: "/images/languages/sql.png" },
    { name: "Git", img: "/images/languages/git.png" },
    { name: "VsCode", img: "/images/languages/vscode.png" },
];

const TechStack = () => {
    return (
        <div id="techstack">
            <h2>My Tech Stack</h2>
            <div className="subheading">What I've worked with</div>
            <div className="flex flex-wrap gap-8 md:gap-x-12 md:max-w-3xl gap-y-12 md:gap-y-16 mx-6 md:mx-auto">
                {languages.map((language) => (
                    <Language key={language.name} keyProp={language.name} img={language.img} />                
                ))}
            </div>
        </div>
    );
};

export default TechStack;
