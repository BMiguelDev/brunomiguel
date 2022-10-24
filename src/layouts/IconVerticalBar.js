import React from 'react'

import styles from './Layouts.module.scss';


export default function IconVerticalBar() {
  return (
    <div className={styles.icon_vertical_bar_container}>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  )
}
