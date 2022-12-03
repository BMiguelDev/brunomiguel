import Tooltip from "@material-ui/core/Tooltip";

export default function SingleProject({ data, styles }) {
    return (
        <div className={styles.single_project_container}>
            {/* <img src={require('../../assets/images/image.jpg')} alt=""/> */}
            <img src={data.image} alt="" />
            <div className={styles.single_project_description_container}>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                <div className={styles.single_project_anchors_container}>
                    <a href={data.url} target="_blank" rel="noreferrer" className={styles.single_project_website_anchor}>
                        <p>Visit Website</p>
                        <p>➜</p>
                    </a>
                    <Tooltip title="Check the code" placement="bottom">
                    <a href={data.codeUrl} target="_blank" rel="noreferrer" className={styles.single_project_code_anchor}>
                        <i className="fa-solid fa-code"></i>
                    </a>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
