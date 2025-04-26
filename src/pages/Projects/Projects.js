import styles from './Projects.module.scss';
import ProjectsData from '../../data/ProjectsData';
import SingleProject from './SingleProject';

export default function Projects() {
  return (
    <main className={styles.projects_container}>
      <div className={styles.projects_main_title}>
        <h2>Projects</h2>
      </div>
      <div className={styles.projects_content_container}>
        <h5 className={styles.projects_description}>Personal projects reflecting my solid foundational skills, though my knowledge and expertise have greatly improved since their completion.</h5>
        {
          ProjectsData.map(project => <SingleProject key={project.id} data={project} styles={styles} />)
        }
      </div>
    </main>
  )
}