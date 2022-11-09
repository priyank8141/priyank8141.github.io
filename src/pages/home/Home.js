import React from 'react'
import styles from "./home.module.css";
import svgfile from '../../images/homebackgound.svg'
import freelancerImage from '../../images/f_man.20b27179.png'
import teaPaper from '../../images/teaPaper.png'
import tableImage from '../../images/table.1040818b.png'
import homeShadow from '../../images/homeShadow.png'

export const Home = ({ homeDivRef, scrollToContact }) => {
    return (
        <div className={styles.home} ref={homeDivRef}>
            <div className={styles.bubble}>
                <div className={styles.bubbleGreen}></div>
                <div className={styles.bubbleOrange}></div>
                <div className={styles.bubblePurple}></div>
                <div className={styles.bubblePink}></div>
                <div className={styles.bubbleYellow}></div>
                <div className={styles.bubbleBlue}></div>
            </div>
            <img src={svgfile} className={styles.bgImage} alt="backgroundImage" />
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col_lg_6}>
                        <div className={styles.homeContent}>
                            <h2>Hey there!
                                <br />
                                I'm Priyank Jain <br />
                                Independent <span>Freelancer</span>
                            </h2>
                            <h4><span>I CREATE THOUSAND OF WEBSITE</span></h4>
                            <button className={styles.hiremeBtn} onClick={scrollToContact}>Hire Me</button>
                        </div>
                    </div>
                    <div className={styles.col_lg_6}>
                        <div className={styles.frelencer_img}>
                            <img src={freelancerImage} className={styles.freelancerImageStyle} alt="freelancerImage" />
                            <img src={tableImage} className={styles.tableImageStyle} alt="tableImage" />
                            <img src={teaPaper} className={styles.teaPaperStyle} alt="freelancerImage" />
                            <img src={homeShadow} className={styles.homeShadowStyle} alt="tableImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
