import React from "react";
import {Button} from "./UI/Button/Button"

const Hero = () => {
    return (
        <div className="flex flex-col justify-center gap-4 h-[94dvh] -mt-8">
            <div>
                <img src="/images/portrait.jpg" className="rounded-full object-contain h-36 sm:h-52 mx-auto"/>
            </div>
            <div className="flex flex-col justify-center text-center gap-4">
                <div className="text-5xl font-bold">Sandra Schwarz</div>
                <div className="text-2xl font-bold opacity-60">Developer</div>
                <div className="flex flex-row gap-4 justify-center">
                    <a href="/Lebenslauf.pdf" download="Lebenslauf_Sandra_Schwarz" className="">                        
                        <Button variant="outlined">Lebenslauf</Button>
                    </a>
                    <a href="mailto:sandra3.schwarz@gmail.com">
                        <Button>Contact Me</Button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Hero;