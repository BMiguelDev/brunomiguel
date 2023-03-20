import React from 'react'

import styles from './Layouts.module.scss';


export default function IconVerticalBar() {
  return (
    <div className={styles.icon_vertical_bar_container}>
      <a href="https://www.linkedin.com/in/miguel--bruno/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/BMiguelDev" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  )
}
