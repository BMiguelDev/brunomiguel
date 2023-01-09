import React, { createContext, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

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
    <div className={isDarkMode ? `${styles.app_container} ${styles.dark_mode}` : styles.app_container} onClick={handlePageClick}>
      <Navbar
        isDarkMode={isDarkMode}
        handleChangeIsDarkMode={handleChangeIsDarkMode}
        isBurgerMenuToggled={isBurgerMenuToggled}
        handleBurgerMenuToggle={handleBurgerMenuToggle}
        burgerMenuRef={burgerMenuRef}
      />
      <DarkModeContext.Provider value={isDarkMode} /*value={moodsState}*/>
        <Outlet />
      </DarkModeContext.Provider>
      <Footer />
      <IconVerticalBar />
      <EmailVerticalButton />
    </div>
  )
}
