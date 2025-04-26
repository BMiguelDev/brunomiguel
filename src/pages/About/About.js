import { useContext } from 'react';
import { Link } from 'react-router-dom';

import SkillsData from '../../data/SkillsData';
import { DarkModeContext } from "../../layouts/PageLayout";
import styles from './About.module.scss';

export default function About() {
    const isDarkMode = useContext(DarkModeContext);

    return (
        <main className={styles.about_container}>
            <div className={styles.about_main_title}>
                <h2>About</h2>
            </div>
            <div className={styles.about_content}>
                <div className={styles.about_description}>
                    <div className={styles.about_description_text}>
                        <p>I'm a <span>Software Engineer</span> specialized in <span>Frontend Web Development</span>, based in Porto, Portugal.</p>
                        <p>With over 2 years of professional experience, I excel in creating seamless user experiences with a strong emphasis on <span>TypeScript</span> and <span>React</span>. I'm results-oriented and committed to continuous learning, growth, and teamwork. Adaptability is one of my core strengths; if I don't know it, I can learn it.</p>
                        <p>My work experience includes <a href="#about_full_stack_experience">Full Stack Engineering</a> and <a href="https://repositorio-aberto.up.pt/handle/10216/136558" target="_blank" rel="noreferrer">Data Science Research</a>.</p>
                    </div>
                    <div className={styles.about_description_items_container}>
                        <div className={styles.about_description_item}>
                            <a href="#about_timeline" className={styles.description_item_text}>
                                <p className={styles.description_item_text_title}>B.S. + M.S.</p>
                                <p className={styles.description_item_text_explanation}>
                                    Informatics Engineering
                                </p>
                            </a>
                        </div>
                        <div className={styles.about_description_item}>
                            <Link to='/brunomiguel/projects' className={styles.description_item_text}>
                                <p className={styles.description_item_text_title}>8+</p>
                                <p className={styles.description_item_text_explanation}>
                                    Projects Completed
                                </p>
                            </Link>
                        </div>
                        <div className={styles.about_description_item}>
                            <a href="#about_skills" className={styles.description_item_text}>
                                <p className={styles.description_item_text_title}>22+</p>
                                <p className={styles.description_item_text_explanation}>
                                    Technologies Used
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* TODO: Uncomment this once updated CV/Resume is ready */}
                    {/* <a href={require('../../assets/files/brunos_resume.pdf')} target='_blank' rel='noreferrer' className={styles.about_description_btn}>
                        <span className={styles.btn_text}>Download CV</span>
                        <span className={styles.btn_icon}><i className="fas fa-download"></i></span>
                    </a> */}
                </div>
                <div className={styles.about_skills} id="about_skills">
                    <h3 className={styles.about_skills_title}>My Skills</h3>
                    <div className={styles.about_skills_technologies}>
                        {
                            SkillsData.map(skill => <div key={skill.id} className={styles.skills_technology_container} title={skill.hoverTitle ?? skill.title}>
                                <p>{skill.title}</p>
                                <img src={(isDarkMode && skill.image_dark) ? skill.image_dark : skill.image} alt={skill.title} className={skill.title === 'MongoDB' ? styles.skill_img_rounded_border : ''} />
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.about_timeline_container} id="about_timeline">
                <h3 className={styles.about_timeline_title}>My Timeline</h3>
                <div className={styles.about_timeline_row}>
                    <div className={styles.about_timeline_column}>
                        <h4 className={styles.about_timeline_subtitle}>Work Experience</h4>
                        <div className={styles.about_timeline_content}>
                            <div className={styles.about_timeline_item} id="about_full_stack_experience">
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-briefcase"></i>
                                </div>
                                <p className={styles.timeline_duration}>2025 - Present</p>
                                <h5>Intermediate Full Stack Engineer<span className={styles.flex}>Controlar - Innovating Industry</span></h5>
                                <ul className={styles.timeline_description}>
                                    <li>
                                        As a Full Stack Engineer, directed the entire project management lifecycle, from <span>requirements engineering</span> and <span>system architecture</span> to <u>planning</u>, <u>implementation</u>, and <u>deployment</u> of frontend and backend applications. Collaborated with <u>cross-functional teams</u> to ensure alignment with business goals and user requirements.
                                    </li>
                                    <li>
                                        Planned and <span>supervised internship programs</span>, including documentation, overseeing technical tasks, and <u>mentoring to improve intern skills</u>.
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-briefcase"></i>
                                </div>
                                <p className={styles.timeline_duration}>2024 - 2025</p>
                                <h5>Junior Full Stack Engineer<span className={styles.flex}>Controlar - Innovating Industry</span></h5>
                                <ul className={styles.timeline_description}>
                                    <li>
                                        As part of an <span>Agile web development</span> team, architected and implemented a resource management application using <span>TypeScript</span> and <span>React</span>, providing real-time search and visualization of project and equipment data through dynamic dashboards and charts. Developed interactive components to automate tasks, provide CRUD functionalities for complex resources, and compute valuable business KPIs. Achieved a <u>centralized</u> tool adopted company-wide, <u>increasing user engagement by 62%</u> and reducing manual work.
                                    </li>
                                    <li>
                                        Implemented a reusable <span>TypeScript React UI component library</span> with full accessibility support and dynamic customization, applicable across all internal applications, resulting in <u>greater code scalability</u> and <u>faster development</u> of new functionalities.
                                    </li>
                                    <li>
                                        Designed and implemented two central backend <span>REST APIs</span> using <span>Node.js</span> and <span>Flask (Python)</span>, fostering the adoption of a <span>Model-View-Controller architecture</span>, and leading to the migration of all existing backend services into <u>centralized APIs</u>, resulting in an upgraded modular infrastructure.
                                    </li>
                                    <li>
                                        Modeled <span>SQL databases</span> and upgraded existing operations with optimized <span>queries</span>, <span>views</span>, and <span>stored procedures</span>. Integrated them with backend <span>REST API</span> endpoints for data retrieval and CRUD operations, resulting in <u>8x faster query performance</u>.
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-briefcase"></i>
                                </div>
                                <p className={styles.timeline_duration}>2020 - 2021</p>
                                <h5>Data Science Researcher<span className={styles.flex}>University of Porto</span></h5>
                                <ul className={styles.timeline_description}>
                                    <li>
                                        Implemented <u>web scraping</u> and <u>data retrieval</u> using <span>Python</span>.
                                    </li>
                                    <li>
                                        Studied the impact of several factors in web search engine results at the <span>Information Systems Research Group</span> at <span>DEI/FEUP</span>.
                                    </li>
                                    <li>
                                        Published <u>dissertation thesis</u> <span>"Mutability of Web Search Engines Results - Data Collection and Brief Analysis"</span>, along with structured datasets to aid future investigations.
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-briefcase"></i>
                                </div>
                                <p className={styles.timeline_duration}>2020</p>
                                <h5>Full Stack Developer <span className={styles.flex}>EFACEC / University of Porto</span></h5>
                                <ul className={styles.timeline_description}>
                                    <li>
                                        As part of an <span>Agile web development</span> team, implemented an application using <span>React</span>, <span>Node.js</span>, and <span>SQL</span>, to search and display real-time public transportation information using data from <u>EFACEC</u>'s "TimeKeeper" system.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.about_timeline_column}>
                        <h4 className={styles.about_timeline_subtitle}>Education</h4>
                        <div className={styles.about_timeline_content}>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-book"></i>
                                </div>
                                <p className={styles.timeline_duration}>2025 - Present</p>
                                <h5>NextJS 15 <span>course</span></h5>
                                <p className={styles.timeline_description}>
                                    <span>Frontend specialization</span> course in <span>NextJS 15</span>, by <u>Maximilian Schwarzmüller</u> (Udemy).
                                </p>
                            </div>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-book"></i>
                                </div>
                                <p className={styles.timeline_duration}>2023</p>
                                <h5>Redux Toolkit and Node.js <span>courses</span></h5>
                                <p className={styles.timeline_description}>
                                    <span>Full Stack specialization</span> courses in <span>Redux Toolkit</span> and <span>Node.js</span>, by <u>Dave Gray</u>.
                                </p>
                            </div>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-book"></i>
                                </div>
                                <p className={styles.timeline_duration}>2022</p>
                                <h5>React <span>course</span></h5>
                                <p className={styles.timeline_description}>
                                    <span>Frontend specialization</span> course in <span>React</span>, by <u>Bob Ziroll</u> (Coursera).
                                </p>
                            </div>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i className="fa-solid fa-graduation-cap"></i>
                                </div>
                                <p className={styles.timeline_duration}>2015 - 2021</p>
                                <h5>B.S. + M.S. <span>in Informatics and Computing Engineering</span></h5>
                                <p className={styles.timeline_description}>
                                    <span>Bachelor's + Master's</span> degree in <span>Informatics and Computing Engineering</span>, completed at the <u>Faculty of Engineering of the
                                        University of Porto (FEUP)</u>, Portugal.
                                </p>
                            </div>
                            <div className={styles.about_timeline_item}>
                                <div className={styles.timeline_icon}>
                                    <i class="fa-solid fa-school"></i>
                                </div>
                                <p className={styles.timeline_duration}>2012 - 2015</p>
                                <h5>High School Diploma <span>in Science and Technology</span></h5>
                                <p className={styles.timeline_description}>
                                    <span>High school diploma</span> in the field of <span>Science and Technology</span>, at Boavista Highschool.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
