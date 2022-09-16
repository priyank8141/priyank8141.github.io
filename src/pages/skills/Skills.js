import React from 'react'
import { data } from '../../utils/info';
import styles from "./style.module.css";

const EachSkill = ({ skillName, imageFile }) =>
    <div className={styles.eachSkill}>
        <img src={imageFile} height="100" width="100" />
        <h5>{skillName}</h5>
    </div>


export const Skills = ({ skillsDivRef }) => {
    return (
        <div className={styles.skills} ref={skillsDivRef}>
            <div className="container">
                <div className="row">
                    <div className={styles.section_title_two}>
                        <h5>Skills</h5>
                        <h2>For those who know what they’re looking for..</h2>
                    </div>
                </div>
                <div className="row">
                    <div className={styles.skillsList}>
                        {
                            data?.skills?.skillsList.map((skill) => <EachSkill skillName={skill.skillName} imageFile={skill.imageFile} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
