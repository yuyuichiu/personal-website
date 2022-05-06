import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/index.module.scss';

// Image static import
import companyLogo1 from '../public/assets/uxm_logo.png';
import showcase1 from '../public/assets/not-pizza-hut-showcase.webp';
import showcase2 from '../public/assets/whatsnearme-showcase.webp';
import showcase3 from '../public/assets/trial-alert-showcase.webp';
import showcase4 from '../public/assets/noteboard-showcase.webp';
import showcase5 from '../public/assets/blog-showcase.webp';

const Intro: React.FC = () => {
  return <div className={`container`}>
    <section className={`${styles.intro}`}>
      <h1>Dave Yu</h1>
      <div>
        <p>Full stack web developer</p>
        <div className={`${styles.badge}`}>
          <Image
            src={`/assets/js_icon.webp`}
            placeholder="blur"
            blurDataURL={`/assets/js_icon.webp`}
            height={30}
            width={30}
            alt='js'
            title='Javascript'>
          </Image>
        </div>
        
        <div className={`${styles.badge}`}>
          <Image
            src={`/assets/react_icon.webp`}
            placeholder="blur"
            blurDataURL={`/assets/react_icon.webp`}
            height={30}
            width={30}
            alt='react'
            title='React.js'>
          </Image>
        </div>

        <div className={`${styles.badge}`}>
          <Image
            src={`/assets/nodejs_icon.webp`}
            placeholder="blur"
            blurDataURL={`/assets/nodejs_icon.webp`}
            height={30}
            width={45}
            alt='js'
            title='Node.js'>
          </Image>
        </div>
      </div>

      <div className={`${styles.avatar}`}>
        <Image src={`/assets/cropped_yuyuichiu_bg.png`} placeholder="blur" blurDataURL={`/assets/cropped_yuyuichiu_bg.png`} layout='fill' alt='Profile picture' />
      </div>

      <h2>Builds your web projects, evolves with technology.</h2>
      <p>For years, I have studied various fields of web technologies and transformed what I learned into responsive web pages and interactive web applications. I am innovative to learn emerging technologies on my own and am open to team collaboration in a job environment. </p>
      <p>I am armed to be your ally in the journey of web development! Contact me via my business email -- yuichiuyu1915@gmail.com</p>
    </section>
  </div>
}

interface SkillMenuProps {
  title: string,
  showInitially?: boolean
}

const SkillMenu: React.FC<SkillMenuProps> = (props) => {
  const [open, setOpen] = useState(props.showInitially);

  return <div className={`${styles.skillItem}`}>
    <div className={`${styles.title} ${open ? styles.active : ''}`} onClick={() => setOpen(!open)}>
      <h3>{props.title}</h3>
      <div className={`${styles.triangle}`}></div>
    </div>

    <div className={`${styles.content} ${open ? styles.active : ''}`}>
      {props.children}
    </div>
  </div>
}

const Showcase: React.FC = () => {
  return <section className={`${styles.showcase}`}>
      <h2>What I am capable of</h2>
      <p>
        List of my capabilities, but not limitations. &nbsp;
        <a href='https://yuyuichiu-personal.s3.us-west-1.amazonaws.com/Yu+Yui+Chiu_CV_2022.pdf' target='_blank' rel='noreferrer' className='text-primary' title='Open on new tab'>
          Resume
        </a>
      </p>

      <div className='container pb-5'>
        <SkillMenu title={'Front end skillsets'} showInitially={true}>
          <div className={`${styles.skillList}`}>
            <div>HTML, CSS, Javascript</div>
            <div>Responsive Design</div>
            <div>React.js</div>
            <div>Bootstrap</div>
            <div>Essential web design</div>
            <div>Cross browser compatibility</div>
          </div>
        </SkillMenu>
        
        <SkillMenu title={'Server-side and miscellaneous technologies'} showInitially={true}>
          <div className={`${styles.skillList}`}>
            <div>Node.js</div>
            <div>SQL (MySQL, PostgreSQL)</div>
            <div>NoSQL (MongoDB)</div>
            <div>Template engines (EJS)</div>
            <div>Cloud Hosting</div>
            <div>Git</div>
          </div>
        </SkillMenu>

        <SkillMenu title={'My Qualifications'}>
          <div className="mb-4">
            <h4 style={{fontSize: '1.2em'}}>Bachelor of Business Administration in City University of Hong Kong</h4>
            <p style={{color: '#b4b4b4', marginLeft: '1em'}}>Graduated at 2022 | Double Major in Information Management and Accountancy</p>
          </div>
          <div className="mb-4">
            <h4 style={{fontSize: '1.2em'}}>CS50x - Introduction to Computer science
              <a style={{fontSize: '0.7em'}} href='https://certificates.cs50.io/9a3f14ce-c93a-4b04-8155-9dd4227f3b0c.pdf?size=letter' target='_blank' rel='noreferrer'>
                &nbsp; (Link to certificate)
              </a>
            </h4>
          </div>
          <div className="mb-4">
            <h4 style={{fontSize: '1.2em'}}>freeCodeCamp - Responsive Web Design Certification
              <a style={{fontSize: '0.7em'}} href='https://www.freecodecamp.org/certification/yuyuichiu/responsive-web-design' target='_blank' rel='noreferrer'>
                &nbsp; (Link to certificate)
              </a>
            </h4>
          </div>
        </SkillMenu>

        <h2>Who I worked with</h2>
        <p>I am glad to work with these awesome clients</p>
        <div className="d-flex justify-content-center">
          <div className="mx-4">
            <a href='https://music.theuxm.com/' target='_blank' rel='noreferrer'>
              <Image src={companyLogo1} placeholder="blur" width='120' height='40' alt='UXM' title='The UXM - https://music.theuxm.com/'/>
            </a>
          </div>

          {/* <div className="mx-4">
            <a href='https://music.theuxm.com/' target='_blank' rel='noreferrer'>
              <Image src={companyLogo1} placeholder="blur" width='120' height='40' alt='The UXM'/>
            </a>
          </div> */}
        </div>
      </div>
  </section>
}

const Projects: React.FC = () => {
  return <section className={`${styles.projects} container`}>
    <h2 id='projects'>My past works</h2>
    <p>Link to Github contains source code and documentation of these projects</p>

    <div className={`${styles.items}`}>
      <div>
        <Image src={showcase1} placeholder="blur" alt='not pizza hut'/>
        <h3>Not Pizza Hut</h3>
        <p>Javascript, Bootstrap, React.js, Firebase</p>

        <p>My attempt to rebuilt the official pizza hut website with React.js</p>

        <a href='https://github.com/yuyuichiu/not-pizza-hut' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://not-pizzahut.netlify.app/' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>

      <div>
        <Image src={showcase2} placeholder="blur" alt='whatsnearme'/>
        <h3>WhatsNearMe</h3>
        <p>Vanilla Javascript, Google Map API</p>

        <p>A web application to find your nearest target places conveniently.</p>

        <a href='https://github.com/yuyuichiu/whatsnearme-hk' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://yuyuichiu.github.io/WhatsNearMe-HK/' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>

      <div>
        <Image src={showcase3} placeholder="blur" alt='trial alert'/>
        <h3>Trial Alert</h3>
        <p>Node.js, EJS, PostgreSQL, Heroku</p>

        <p>A web application to remind important moments with scheduled emails.</p>

        <a href='https://github.com/yuyuichiu/trial-alert' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://trial-alert-webapp.herokuapp.com/' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>

      <div>
        <Image src={showcase4} placeholder="blur" alt='noteboard'/>
        <h3>Noteboard</h3>
        <p>Vanilla Javascript, Local Storage</p>

        <p>A simple web application to jot down notes digitally.</p>

        <a href='https://github.com/yuyuichiu/noteboard-web' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://yuyuichiu.github.io/noteboard-web/' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>

      <div>
        <Image src={showcase5} placeholder="blur" alt='blog'/>
        <h3>Personal Blog</h3>
        <p>React.js, Bootstrap, MongoDB</p>

        <p>(Work in Progress) A blog where user can upload, edit and view other posts.</p>

        <a href='https://www.yuyuichiu.com/blog' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>

    </div>
  </section>
}

const Footer: React.FC = () => {
  return <div className={`${styles.footer}`}>
    <h2 id='contact'>Contact &#38; Resume</h2>
    <p>
      View my resume: &nbsp;
      <a href='https://yuyuichiu-personal.s3.us-west-1.amazonaws.com/Yu+Yui+Chiu_CV_2022.pdf' target='_blank' rel='noreferrer' className='text-primary'>
        Open in new tab
      </a>
    </p>
    <p>
      Linkedin: &nbsp;
      <a href='https://www.linkedin.com/in/yuyuichiu/' className='text-primary' target='_blank' rel='noreferrer'>
        Link
      </a>
    </p>
    <p>
      Contact via email: yuichiuyu1915@gmail.com
      <button
        className='btn text-primary'
        onClick={() => {navigator.clipboard.writeText('yuichiuyu1915@gmail.com')}}
      >
        Copy
      </button>
    </p>
  </div>
}

const Home: NextPage = () => {
  return <Layout noContainer={true}>
    <div className="alert-light p-2 mx-5">
      <p className="text-center fw-bold my-1">🚧 The blog is functional but the styling is under construction. 🚧</p>
      <p className="text-center">
        It may take longer to load the blog since I am using a free database service. &nbsp;
      </p>
    </div>

    <Intro />  
    <Showcase />  
    <Projects />
    <Footer />
  </Layout>
}

export default Home;
