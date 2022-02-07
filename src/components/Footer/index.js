import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialLink } from './FooterElements';
import { FaLinkedin } from 'react-icons/fa'

const index = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Get in touch!</FooterLinkTitle>
                                {/* <FooterLink to="about">Chi sono</FooterLink>
                                <FooterLink to="projects">Progetti</FooterLink> */}
                                <SocialLink href="https://www.linkedin.com/in/luca-cavretti/" target="_blank"><FaLinkedin /></SocialLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default index;
