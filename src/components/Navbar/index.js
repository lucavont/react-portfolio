import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { Nav, NavbarWrapper, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnWrap, NavRoute } from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarWrapper>
                    <NavLogo to="/" onClick={toggleHome}>Luca Cavretti</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Chi sono</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Progetti</NavLinks>
                        </NavItem>
                        <NavBtnWrap>
                            <NavRoute as="a" href="mailto:cavrettiluca@live.it">
                                Scrivimi
                            </NavRoute>
                        </NavBtnWrap>
                    </NavMenu>
                </NavbarWrapper>
            </Nav>
        </>
    );
};

export default Navbar;
