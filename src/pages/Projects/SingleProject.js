import { useContext } from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { DarkModeContext } from "../../layouts/PageLayout";


export default function SingleProject({ data, styles }) {

    const isDarkMode = useContext(DarkModeContext);

    return (
        <div className={styles.single_project_container}>
            {/* <img src={require('../../assets/images/image.jpg')} alt=""/> */}
            <img src={isDarkMode ? data.imageDark : data.image} alt="" />
            <div className={styles.single_project_description_container}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <div className={styles.single_project_anchors_container}>
                    <a href={data.url} target="_blank" rel="noreferrer" className={styles.single_project_website_anchor}>
                        <p>Visit Website</p>
                        <p>➜</p>
                    </a>
                    <Tooltip title={<span className={styles.tooltip_container}>Check the code</span>} placement="bottom">
                    <a href={data.codeUrl} target="_blank" rel="noreferrer" className={styles.single_project_code_anchor}>
                        <i className="fa-solid fa-code"></i>
                    </a>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
