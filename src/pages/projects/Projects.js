import React from 'react'
import { data } from '../../utils/info';
import styles from "./style.module.css";
import { ReactComponent as GithubIcon } from "./../../images/githubIcon.svg";
import { ReactComponent as LinkIcon } from "./../../images/linkIcon.svg";
import { ReactComponent as FolderIcon } from "./../../images/folderIcon.svg";

const EachProject = ({ project }) =>
    <div className={styles.eachProject}>
        <div className={styles.cardHeader} >
            <div className={styles.icon}><FolderIcon /></div>
            <div>
                {project?.github && <div className={styles.icon2}><GithubIcon onClick={() => { window.open(project?.github) }} /></div>}
                {project?.site && <div className={styles.icon2}><LinkIcon onClick={() => { window.open(project?.site) }} /></div>}
            </div>
        </div>
        <div className={styles.cardTitle}><h3>{project?.title}</h3></div>
        <div className={styles.cardDescription}><p>{project?.description}</p></div>
        <div className={styles.cardtechStack}><ul>{project?.techStack?.map((stack) => <li>{stack}</li>)}</ul></div>
    </div>

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
                        {
                            data?.projects?.map((project) => <EachProject project={project} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
