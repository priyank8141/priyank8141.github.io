import React from 'react'
import { data } from '../../utils/info';
import styles from "./style.module.css";
import { Fade, Zoom } from 'react-reveal';

const EachSkill = ({ skillName, imageFile }) =>
    <div className={styles.eachSkill}>
        <img src={imageFile} alt="imagefile" height="70" width="70" />
        <h5>{skillName}</h5>
    </div>


export const Skills = ({ skillsDivRef }) => {
    return (
        <div className={styles.skills} ref={skillsDivRef}>
            <div className="container">
                <Fade top>
                    <div className="row">
                        <div className={styles.section_title_two}>
                            <h5>Skills</h5>
                            <h2>For those who know what they’re looking for..</h2>
                        </div>
                    </div>
                </Fade>
                <div className="row">
                    <div className={styles.skillsList}>
                        {
                            data?.skills?.skillsList.map((skill) => <Zoom><EachSkill skillName={skill.skillName} imageFile={skill.imageFile} /></Zoom>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
