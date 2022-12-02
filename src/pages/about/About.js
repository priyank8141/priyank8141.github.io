import React from 'react'
import { data } from '../../utils/info';
import styles from "./style.module.css";
import abpottImage from '../../images/about.svg';
import { Fade } from 'react-reveal';

export const About = ({ aboutDivRef, scrollToContact }) => {
    return (
        <div className={styles.about} ref={aboutDivRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <Fade left>
                            <div className="get_info">
                                <div className={styles.section_title_two}>
                                    <h6>About</h6>
                                    <h2>Know About Me</h2>
                                </div>
                                <div className={styles.aboutMe}>
                                    <p>{data?.about?.shortIntro || "your short Intro"}</p>
                                    <div className={styles.btns} >
                                        <button className={styles.hiremeBtn} onClick={scrollToContact}>Get in touch</button>
                                        <button className={styles.downloadCvBtn} onClick={() => { window.open("https://drive.google.com/file/d/1re0H8WGMyOm2hjW-DpzEoiTSiLEPfGQH/view?usp=sharing") }}>View CV</button>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                    </div>
                    <div className="col-lg-6 col-md-12">
                        <Fade right>
                            <div className={styles.aboutImageContainer}>
                                <img className={styles.aboutImage} src={abpottImage} alt="im" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}
