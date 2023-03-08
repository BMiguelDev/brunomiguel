import Tooltip from "@material-ui/core/Tooltip";
import styles from './Layouts.module.scss';


export default function DarkModeButton({ isDarkMode, handleChangeIsDarkMode }) {

    return (
        <Tooltip title={<span className={styles.tooltip_container}>Dark mode</span>} placement="bottom">
            <div className={styles.dark_mode_button_container} onClick={handleChangeIsDarkMode}>
                {isDarkMode ? (<i className="fa-solid fa-moon"></i>) : (<i className="fa-solid fa-sun"></i>)}
            </div>
        </Tooltip>
    )
}
