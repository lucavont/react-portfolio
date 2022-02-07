import React from 'react';
import Video from "../../video/video.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from "./HeroElements";

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Luca Cavretti</HeroH1>
                <HeroP>&lt;Front End Developer /&gt;</HeroP>
            </HeroContent>
        </HeroContainer >
    );
};

export default HeroSection;