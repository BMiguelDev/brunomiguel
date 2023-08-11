import React, { createContext, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styles from './Layouts.module.scss';
import Navbar from "./Navbar"
import Footer from './Footer';
import EmailVerticalButton from './EmailVerticalButton';
import IconVerticalBar from './IconVerticalBar';

export const DarkModeContext = createContext(true);


export default function PageLayout() {

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isBurgerMenuToggled, setIsBurgerMenuToggled] = useState(false);

    const burgerMenuRef = useRef(null);
    const appContainerRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        // Function to update height to prevent 100vh bug where page may be covered by the browser's UI (in mobile), and also to 
        // undo these modifications on "About" and "Projects" pages, as this pages have scrolling
        const handleResize = () => {
            if (appContainerRef.current) {
                if (location.pathname === '/portfolio-website/about' || location.pathname === '/portfolio-website/projects') {
                    appContainerRef.current.style.height = "unset";
                    appContainerRef.current.style.maxHeight = "unset";
                    appContainerRef.current.style.minHeight = "100vh";
                }
                // If user isn't in about or project page, lock height at window's inner height
                else {
                    appContainerRef.current.style.height = `${window.innerHeight}px`;
                    appContainerRef.current.style.minHeight = "unset";
                    appContainerRef.current.style.maxHeight = "unset";
                    if (window.innerWidth > 1200 && window.innerHeight > 650) appContainerRef.current.style.maxHeight = "100vh";
                }
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [location])


    function handleChangeIsDarkMode() {
        setIsDarkMode(prevIsDarkMode => !prevIsDarkMode);
    }

    function handleBurgerMenuToggle(event) {
        setIsBurgerMenuToggled(prevIsBurgerMenuToggled => !prevIsBurgerMenuToggled);
        event.stopPropagation();
    }

    function handlePageClick(event) {
        if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) setIsBurgerMenuToggled(false);
    }

    return (
        <div ref={appContainerRef} className={isDarkMode ? `${styles.app_container} ${styles.dark_mode}` : styles.app_container} onClick={handlePageClick}>
            <Navbar
                isDarkMode={isDarkMode}
                handleChangeIsDarkMode={handleChangeIsDarkMode}
                isBurgerMenuToggled={isBurgerMenuToggled}
                handleBurgerMenuToggle={handleBurgerMenuToggle}
                burgerMenuRef={burgerMenuRef}
            />
            <DarkModeContext.Provider value={isDarkMode}>
                <Outlet />
            </DarkModeContext.Provider>
            <Footer />
            <IconVerticalBar />
            <EmailVerticalButton />
        </div>
    )
}
