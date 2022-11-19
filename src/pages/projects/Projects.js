import React from 'react'
import { data } from '../../utils/info';
import styles from "./style.module.css";

const EachProject = ({ project }) => <>
    <li className={styles.bookingcard} style={{ backgroundImage: `url(${project?.projectImg})` }}>
        <div className={styles.emptyDiv}>
            &nbsp;
        </div>
        <div className={styles.informationscontainer}>
            <h2 className={styles.title} onClick={() => { window.open(project?.site) }} >{project.title}</h2>
            <div className={styles.cardtechStack}><ul>{project?.techStack?.map((stack) => <li>&#x2022; {stack}</li>)}</ul></div>
            <div className={styles.moreinformation}>
                <div className={styles.infoanddatecontainer}>
                    <div classNames={(styles.box, styles.info)}>
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>
</>

export const Projects = ({ projectDivRef }) => {
    return (
        <div className={styles.projects} ref={projectDivRef}>
            <div className="container">
                <div className="row">
                    <div className={styles.section_title_two}>
                        <h5>Projects</h5>
                        <h2>Some Things I’ve Built</h2>
                    </div>
                </div>
                <div className="row">
                    <div className={styles.projectsList}>
                        <ul className={styles.eachprojectlist}>
                            {
                                data?.projects?.map((project) => <EachProject project={project} />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
