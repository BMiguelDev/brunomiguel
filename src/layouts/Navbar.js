import { NavLink } from "react-router-dom"

import styles from './Layouts.module.scss';
import DarkModeButton from './DarkModeButton';


export default function Navbar({ isDarkMode, handleChangeIsDarkMode, isBurgerMenuToggled, handleBurgerMenuToggle, burgerMenuRef }) {

    return (
        <header>
            <nav className={styles.navbar}>
                <NavLink to='/' className={styles.navbar_title_link}>
                    <div className={styles.navbar_title_container}>
                        <div className={styles.navbar_title_logo_container}>
                            <div className={styles.navbar_title_logo}>
                                <i className="fa-solid fa-b"></i>
                                <i className="fa-solid fa-m"></i>
                                <div className={styles.navbar_title_polygon}></div>
                            </div>
                        </div>
                        <h4>Bruno Miguel</h4>
                    </div>
                </NavLink>
                <div className={styles.navbar_links_container}>
                    <NavLink
                        end
                        to='/'
                        className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                        Home
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                        About
                    </NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                        Projects
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                        Contact
                    </NavLink>
                    <DarkModeButton isDarkMode={isDarkMode} handleChangeIsDarkMode={handleChangeIsDarkMode} />
                </div>
                <div className={styles.navbar_mobile_buttons_container}>
                    <DarkModeButton isDarkMode={isDarkMode} handleChangeIsDarkMode={handleChangeIsDarkMode} />
                    <button
                        className={styles.navbar_burger_button_container}
                        onClick={handleBurgerMenuToggle}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div
                        ref={burgerMenuRef}
                        className={isBurgerMenuToggled ? `${styles.navbar_burger_menu_container}` : `${styles.navbar_burger_menu_container} ${styles.burger_menu_closed}`}
                    >
                        <div className={styles.burger_menu_button_close} onClick={handleBurgerMenuToggle}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <NavLink
                            end
                            to='/'
                            onClick={handleBurgerMenuToggle}
                            className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                            Home
                        </NavLink>
                        <NavLink
                            to='/about'
                            onClick={handleBurgerMenuToggle}
                            className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                            About
                        </NavLink>
                        <NavLink
                            to='/projects'
                            onClick={handleBurgerMenuToggle}
                            className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                            Projects
                        </NavLink>
                        <NavLink
                            to='/contact'
                            onClick={handleBurgerMenuToggle}
                            className={({ isActive }) => isActive ? `${styles.navbar_link} ${styles.navbar_link_active}` : `${styles.navbar_link}`}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}