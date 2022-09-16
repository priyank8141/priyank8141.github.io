import React from 'react'
import { data } from '../../utils/info';
import styles from "./style.module.css";
import abpottImage from '../../images/about.svg'

export const About = ({ aboutDivRef, scrollToContact }) => {
    return (
        <div className={styles.about} ref={aboutDivRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="get_info">
                            <div className={styles.section_title_two}>
                                <h6>About</h6>
                                <h2>Know About Me</h2>
                            </div>
                            <div className={styles.aboutMe}>
                                <p>{data?.about?.shortIntro || "your short Intro"}</p>
                                <div className={styles.btns} >
                                    <button className={styles.hiremeBtn} onClick={scrollToContact}>Hire Me</button>
                                    <button className={styles.downloadCvBtn}>Download CV</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.aboutImageContainer}>
                            <img className={styles.aboutImage} src={abpottImage} alt="im" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
