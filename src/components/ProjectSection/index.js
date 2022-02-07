import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from '../InfoSection/InfoElements';
import { motion } from "framer-motion";
import images from "./images";

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <motion.div className='carousel'>
                                <motion.div drag='x' dragConstraints={{ right: 0, left: -1886 }} whileTap={{ cursor: 'grabbing' }} className='inner-carousel'>
                                    {images.map(image => {
                                        return (
                                            <motion.div className='item'>
                                                <img src={image}></img>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;