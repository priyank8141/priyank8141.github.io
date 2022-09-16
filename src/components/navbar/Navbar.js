import React, { useState } from 'react' // rafc
import { data } from '../../utils/info';
import styles from "./navbar.module.css";


export const Navbar = ({ scrollToContact, scrollToHome, scrollToAbout, scrollToSkills, scrollToProjects }) => {
    const [colorChange, setColorchange] = useState(false);
    const [mobileNav, setOpenMobileNav] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const navlist = <>
        <li className={styles.navItem} onClick={scrollToHome} >Home</li>
        <li className={styles.navItem} onClick={scrollToAbout} >About</li>
        {/* <li className={styles.navItem}>Testimonial</li> */}
        <li className={styles.navItem} onClick={scrollToSkills}>Skills</li>
        <li className={styles.navItem} onClick={scrollToProjects} >Projects</li>
        <li className={styles.navItem} onClick={scrollToContact}>Contact</li>
    </>

    return (
        <div>
            <nav className={colorChange ? styles.navbarActive : styles.navbar}>
                <div className={styles.container}>
                    <p className={styles.logo}>
                        {data?.about?.name || 'Your Name'}
                    </p>
                    <button className={styles.navbar_toggler} onClick={() => setOpenMobileNav(!mobileNav)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-2x fa-bars"></i></button>
                    <div className={styles.navContainer}>
                        <ul className={colorChange ? styles.navListActive : styles.navList}>
                            {navlist}
                        </ul>
                    </div>
                </div>
                {
                    mobileNav && <div className={styles.navMobileContainer}>
                        <ul className={styles.navMobileListActive}>
                            {navlist}
                        </ul>
                    </div>
                }
            </nav>

        </div>
    )
}
