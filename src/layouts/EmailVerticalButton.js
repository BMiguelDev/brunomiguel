import React from 'react'

import styles from './Layouts.module.scss';


export default function EmailVerticalButton() {
  return (
    <div className={styles.vertical_email_container}>
        <a href="mailto:bmiguelpro@outlook.com">bmiguelpro@outlook.com</a>
    </div>
  )
}
