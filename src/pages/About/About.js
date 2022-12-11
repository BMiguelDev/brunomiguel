import styles from './About.module.scss';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className={styles.about_container}>
      <div className={styles.about_main_title}>
        <h2>About</h2>
      </div>
      <div className={styles.about_content}>
        <div className={styles.about_description}>
          <div className={styles.about_description_text}>
            <p>I'm a <span>Software Engineer</span>, specializing in <span>Front End Web Development</span>, based in Porto, Portugal.</p>
            <p>I create great user experiences and my skillset is mainly focused on <span>React</span>, and that's the area I'd like to work on the most.</p>
            <p>In the past, I have also worked in full stack development and <a href="https://repositorio-aberto.up.pt/handle/10216/136558" target="_blank" rel="noreferrer">data science projects</a>.</p>
          </div>
          <div className={styles.about_description_items_container}>
            <div className={styles.about_description_item}>
              <a href="#about_timeline" className={styles.description_item_text}>
                <p className={styles.description_item_text_title}>BS + MS</p>
                <p className={styles.description_item_text_explanation}>
                  Informatics Engineering
                </p>
              </a>
            </div>
            <div className={styles.about_description_item}>
              <Link to='/projects' className={styles.description_item_text}>
                <p className={styles.description_item_text_title}>5+</p>
                <p className={styles.description_item_text_explanation}>
                  Projects Completed
                </p>
              </Link>
            </div>
            <div className={styles.about_description_item}>
              <a href="#about_skills" className={styles.description_item_text}>
                <p className={styles.description_item_text_title}>11+</p>
                <p className={styles.description_item_text_explanation}>
                  Tecnologies Used
                </p>
              </a>
            </div>
          </div>
          <a href={require('../../assets/files/brunos_resume.pdf')} target='_blank' rel='noreferrer' className={styles.about_description_btn}>
            <span className={styles.btn_text}>Download CV</span>
            <span className={styles.btn_icon}><i className="fas fa-download"></i></span>
          </a>
        </div>
        <div className={styles.about_skills} id="about_skills">
          <h3 className={styles.about_skills_title}>My Skills</h3>
          <div className={styles.about_skills_technologies}>
            <div className={styles.skills_technology_container}>
              <p>HTML</p>
              <img src={require("../../assets/images/html_logo.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>CSS</p>
              <img src={require("../../assets/images/css_logo.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>Javascript</p>
              <img src={require("../../assets/images/javascript_logo2.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>Typescript</p>
              <img src={require("../../assets/images/typescript_logo.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>React</p>
              <img src={require("../../assets/images/react_logo.svg.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>Redux Toolkit</p>
              <img src={require("../../assets/images/redux_toolkit.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>Sass</p>
              <img src={require("../../assets/images/sass_logo.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              {/* <p>React Testing Library</p> */}
              <p>RTL</p>
              <img src={require("../../assets/images/react_testing_library_logo.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>Jest</p>
              <img src={require("../../assets/images/jest_logo.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>Cypress</p>
              <img src={require("../../assets/images/cypress_logo1.png")} alt="" />
            </div>
            <div className={styles.skills_technology_container}>
              <p>Git</p>
              <img src={require("../../assets/images/git_logo.svg.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_timeline_container} id="about_timeline">
        <h3 className={styles.about_timeline_title}>My Timeline</h3>
        <div className={styles.about_timeline_content}>
          <div className={styles.about_timeline_item}>
            <div className={styles.timeline_icon}>
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <p className={styles.timeline_duration}>2015-2021</p>
            <h5>BS + MS <span>in Informatics Engineering</span></h5>
            <p className={styles.timeline_description}>
              <span>Informatics and Computing Engineering Bachelor + Masters</span> degree, completed at the <span>Faculty of Engineering of the
              University of Porto</span>, Portugal
            </p>
          </div>
          <div className={styles.about_timeline_item}>
            <div className={styles.timeline_icon}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <p className={styles.timeline_duration}>2012-2015</p>
            <h5>Highschool Degree <span>in Science</span></h5>
            <p className={styles.timeline_description}>
              Highschool degree in the field of Sciences, at Boavista Highschool
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
