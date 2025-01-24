import React from "react";
import Project from "./UI/Project";


const projects = {
    montana: {
        title: "Montana", 
        desc: `
Montana ist ein Geografiespiel rund um Südtirol, das als Abschlussprojekt in der 5. Klasse Oberschule entwickelt wurde. 
Das Frontend wurde mit HTML und CSS erstellt, während die Spiellogik in JavaScript implementiert wurde. 
Die serverseitige Verarbeitung erfolgt durch PHP.

Außerdem habe ich mit React Native bereits einen ersten Prototypen für die Mobile App entwickelt.
        `,
        url: "https://montana-suedtirol.com",
        img: "/images/montana.png",
    },
    tailwind: {
        title: "React mit Tailwind", 
        desc: "Erstellung einer fiktiven Business-Website zur Vertiefung meiner Kenntnisse in Tailwind CSS. Fokus auf modernes Design und responsive Layouts.", 
        url: "https://tailwind-demo-seven.vercel.app/",
        img: "/images/tailwind.png",
    },
};

const Projects = () => {
    return (
        <div id="projects" className="mx-auto sm:max-w-5xl my-20">
            <h2>Projects</h2>
            <div className="subheading">What I've made</div>
            <div className="flex flex-col">
                <Project img={projects.montana.img} title={projects.montana.title} desc={projects.montana.desc} url={projects.montana.url} />
                <Project 
                className={'sm:flex-row-reverse'}
                img={projects.tailwind.img} title={projects.tailwind.title} desc={projects.tailwind.desc} url={projects.tailwind.url} />
            </div>
        </div>
    );
};

export default Projects;