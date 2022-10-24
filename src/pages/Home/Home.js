import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className={styles.home_container}>
      <div className={styles.home_text_container}>
        <h4>Hi, I'm Bruno Miguel</h4>
        <div className={styles.prof_titles_container}>
          <h2>Software Engineer,</h2>
          <h2>Front End Developer</h2>
        </div>
        <h6>I build elegant user experiences</h6>
        <Link to='/about' className={styles.home_about_link_container}>
          <h6>More About Me</h6>
          <span>➜</span>
        </Link>
      </div>
      <div className={styles.home_picture_container}>
        <img src={require('../../assets/images/profile_picture2.png')} alt="" />
      </div>
    </main>
  )
}
