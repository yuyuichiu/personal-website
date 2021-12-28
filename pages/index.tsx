import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/index.module.scss'
import Link from 'next/link'
import ProfilePic from '../public/assets/cropped_yuyuichiu_bg_2.png';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={`${styles.indexContainer}`} onLoad={() => console.log('loaded completely.')}>
        <div className='row m-0'>
          <div className={`col-lg-8 col-md-8 col-sm-12 ${styles.left}`}>
            <aside className={`${styles.rectangle}`}></aside>
            <aside className={`${styles.triangle}`}></aside>
            <img src={ProfilePic.src} className={`${styles.profilePicture}`}/>
            <h1>Maxwell Yu</h1>
            <p>Web Developer. Builds your dream project. Evolves with the newest technology.</p>
            <ul>
              <Link href="#" passHref>
                <li>About Me</li>
              </Link>
              <Link href="#" passHref>
                <li>My Projects</li>
              </Link>
              <Link href="#" passHref>
                <li>Resume and Contact</li>
              </Link>
            </ul>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-12 p-0 ${styles.right}`}>
            <div className={styles.rightTop}>
              {}
            </div>
            <div className={styles.rightBottom}>
              {}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
