import { useContext } from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { DarkModeContext } from "../../layouts/PageLayout";

export default function SingleProject({ data, styles }) {
    const isDarkMode = useContext(DarkModeContext);
    let animationDelayCounter = 0;

    return (
        <article className={styles.single_project_container_article}>
            <h4>{data.title}</h4>
            <div className={styles.single_project_container_wrapper}>
                <div className={styles.single_project_skills_container}>
                    {data.mainSkills
                        ? data.mainSkills.map((skill) => {
                              animationDelayCounter = animationDelayCounter + 0.125;
                              return (
                                  <div
                                      className={styles.single_project_skills_item}
                                      key={skill.title}
                                      title={skill.title}
                                      style={{
                                          animationDelay: animationDelayCounter + "s",
                                          backgroundColor:
                                              skill.title === "Redux Toolkit" && isDarkMode
                                                  ? "rgba(81, 167, 213, 1)"
                                                  : skill.title === "React" && !isDarkMode
                                                  ? "rgba(66, 141, 182, 1)"
                                                  : skill.title === "NodeJS" && isDarkMode
                                                  ? "rgba(27, 81, 109, 1)"
                                                  : "",
                                      }}
                                  >
                                      <img src={skill.image} alt={skill.title} className={skill.title==="MongoDB" ? styles.skills_item_rounded_border : ""}></img>
                                  </div>
                              );
                          })
                        : ""}
                </div>
                <div className={styles.single_project_container}>
                    <img src={isDarkMode ? data.imageDark : data.image} alt="" />
                    <div className={styles.single_project_description_container}>
                        <p>{data.description}</p>
                        <div className={styles.single_project_anchors_container}>
                            <a
                                href={data.url}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.single_project_website_anchor}
                            >
                                <p>Website</p>
                                <p>➜</p>
                            </a>
                            <Tooltip
                                title={<span className={styles.tooltip_container}>Check the code</span>}
                                placement="bottom"
                            >
                                <a
                                    href={data.codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.single_project_code_anchor}
                                >
                                    <i className="fa-solid fa-code"></i>
                                </a>
                            </Tooltip>
                            {
                                data.APICodeURL ? (
                                    <Tooltip
                                        title={<span className={styles.tooltip_container}>Check the API code</span>}
                                        placement="bottom"
                                    >
                                        <a
                                            href={data.APICodeURL}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.single_project_code_anchor}
                                        >
                                            <i className="fa-solid fa-server"></i>
                                        </a>
                                    </Tooltip>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
