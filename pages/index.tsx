import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/index.module.scss';

const Intro: React.FC = () => {
  return <div className={`container`}>
    <section className={`${styles.intro}`}>
      <div className={`${styles.avatar_mobile}`}>
       <img src={'/assets/cropped_yuyuichiu_bg.webp'} title='Profile picture' />
      </div>

      <h1>Dave Yu</h1>
      <div>
        <p>Full stack programmer</p>
        <div className={`${styles.badge}`}>
          <img src={'/assets/js_icon.webp'} title='Proficient in JavaScript' />
        </div>
        
        <div className={`${styles.badge}`}>
          <img src={'/assets/nodejs_icon.jpg'} title='Proficient in Node.js' />
        </div>

        <div className={`${styles.badge}`}>
          <img src={'/assets/react_icon.webp'} title='Proficient in React.js' />
        </div>

        <div className={`${styles.badge}`}>
          <img src={'/assets/oracle_icon.webp'} width="30" height="30" title='Proficient in Oracle DB' />
        </div>
      </div>

      <div className={`${styles.avatar}`}>
       <img src={'/assets/cropped_yuyuichiu_bg.webp'} title='Profile picture' />
      </div>

      <h2>Builds your vision, evolves with technology.</h2>
      <p>For years, I have studied various fields of web technologies and transformed what I learned into responsive web pages and interactive web applications. I am innovative to learn emerging technologies on my own and am open to team collaboration in a job environment. </p>
      <p>I am armed to be your ally in the journey of web development! Contact me via my business email -- 📧 yuichiuyu1915@gmail.com</p>
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
  return <section id='showcase' className={`${styles.showcase}`}>
      <h2>What I am capable of</h2>
      <p>
        List of my capabilities, but not limitations. &nbsp;
        <a href='./assets/CV202212.pdf' target='_blank' rel='noreferrer' className='text-primary' title='Resume (Open on new tab)'>Resume</a>
      </p>

      <div className='container pb-5'>
        <SkillMenu title={'Front-end skillsets'} showInitially={false}>
          <div className={`${styles.skillList}`}>
            <div>HTML, CSS, JavaScript</div>
            <div>Responsive Design</div>
            <div>React.js</div>
            <div>Bootstrap</div>
            <div>Essential web design</div>
            <div>Cross browser compatibility</div>
          </div>
        </SkillMenu>
        
        <SkillMenu title={'Server-side & others'} showInitially={false}>
          <div className={`${styles.skillList}`}>
            <div>Node.js</div>
            <div>SQL (MySQL, PostgreSQL)</div>
            <div>NoSQL (MongoDB)</div>
            <div>Template engines (EJS)</div>
            <div>Cloud Hosting</div>
            <div>Git</div>
          </div>
        </SkillMenu>

        <SkillMenu title={'My Qualifications'} showInitially={false}>
          <div className="mb-4">
            <h4 style={{fontSize: '1.2em'}}>Bachelor of Business Administration in City University of Hong Kong</h4>
            <p style={{color: '#b4b4b4', marginLeft: '1em'}}>2018~2022 | Double Major in Information Management and Accountancy</p>
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
        <div className="row mx-md-5">
          <div className="col-md-4 col-6 my-2 d-flex justify-content-center">
            <a href='https://www.cityu.edu.hk/esu/' target='_blank' rel='noreferrer'>
              <img src={'/assets/cityu_esu_logo.svg'} width='200' height='50' title='Enterprise Solution Office@City University of Hong Kong' alt='CityU'/>
            </a>
          </div>

          <div className="col-md-4 col-6 my-2 d-flex justify-content-center">
            <a href='https://music.theuxm.com/' target='_blank' rel='noreferrer'>
              <img src={'/assets/uxm_logo.png'} width='140' height='40' title='The UXM - https://music.theuxm.com/' alt='UXM'/>
            </a>
          </div>

          <div className="col-md-4 col-12 my-2 d-flex justify-content-center">
            <a href='https://sunsmart.netlify.app/' target='_blank' rel='noreferrer'>
              <img src={'/assets/sunsmart_brand.webp'} width='180' height='50' title='Sun Smart Learning Centre' alt='Sun smart'/>
            </a>
          </div>
        </div>
      </div>
  </section>
}

const Projects: React.FC = () => {
  return <section id='projects' className={`${styles.projects} container`}>
    <h2>My professional projects</h2>
    <p>Source code are not available due to privacy reason.</p>
    
    <div className={`${styles.items}`}>
      <div>
        <img src={'/assets/csrs-showcase.png'} alt='Community Service Record System showcase'/>
        <h3>Community Service Record System (CSRS)</h3>
        <p>JavaScript, jQuery, PL/SQL</p>

        <p>Gathered user requirements and developed a system to digitizes the management of student development activities held by CityU.</p>
        <p>Capability: process excel files, generate reports, integrate with QuestionPro</p>

        <a href='/assets/CSRS User Guide.pdf' target='_blank' rel='noreferrer'>
          <button className='button'>User guide</button>
        </a>
      </div>

      <div>
        <img src={'/assets/cocurricular-showcase.png'} alt='co-curricular transcript showcase'/>
        <h3>Co-curricular Transcript for CityU students</h3>
        <p>Node.js, PDF Generation, PL/SQL</p>

        <p>Generate PDF report via Node.js that summarizes of co-curricular achievement of students.</p>

        <a href='/assets/curricular-sample.pdf' target='_blank' rel='noreferrer'>
          <button className='button'>Sample PDF</button>
        </a>

        <a href='https://www.cityu.edu.hk/e-certification/5xd912e9' target='_blank' rel='noreferrer'>
          <button className='button' onClick={() => alert("Access code: f9ktrs3y (copy it first)")}>Live Example</button>
        </a>

      </div>

      <div>
        <img src={'/assets/admission-showcase.png'} alt='admission system showcase'/>
        <h3>CityU Admission System</h3>
        <p>.NET, Oracle DB</p>

        <p>Revamps an internal software system to streamline existing workflow and enhance user experience.</p>
        
        <a href='/assets/admission_system_layout.pdf' target='_blank' rel='noreferrer'>
          <button className='button'>System Overview</button>
        </a>
      </div>
    </div>

    <h2>Personal projects</h2>
    <p>My open-source projects.</p>

    <div className={`${styles.items}`}>
      <div>
        <img src={'/assets/sunsmart_showcase-mf.webp'} alt='sun smart showcase'/>
        <h3>日月思教育中心 - Landing page</h3>
        <p>React.js, Typescript, Web Design, CSS3 Animations</p>

        <p>Created a modern landing page for a local learning centre</p>

        <a href='https://github.com/yuyuichiu/sun-smart-learning-centre' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://sunsm.art' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>

      <div>
        <img src={'/assets/not-pizza-hut-showcase-mf.webp'} alt='not pizza hut'/>
        <h3>Not Pizza Hut</h3>
        <p>React.js, Bootstrap, JavaScript</p>

        <p>Recreated the pizza hut online order website with React.js</p>

        <a href='https://github.com/yuyuichiu/not-pizza-hut' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://not-pizzahut.netlify.app/' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>

      <div>
        <img src={'/assets/whatsnearme-showcase-mf.webp'} alt='whatsnearme'/>
        <h3>WhatsNearMe</h3>
        <p>Google Map API, JavaScript</p>

        <p>A web application to find your nearest target places conveniently</p>

        <a href='https://github.com/yuyuichiu/whatsnearme-hk' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://yuyuichiu.github.io/WhatsNearMe-HK/' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>
    </div>
    
  </section>
}

const Footer: React.FC = () => {
  return <div id='footer' className={`${styles.footer}`}>
    <h2 id='contact'>Contact &#38; Resume</h2>
    <p>
      View my resume: &nbsp;
      <a href='./assets/CV202212.pdf' target='_blank' rel='noreferrer' className='text-primary'>
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
      Email 📧: yuichiuyu1915@gmail.com
      <button
        className='btn btn-sm text-primary'
        onClick={() => {navigator.clipboard.writeText('yuichiuyu1915@gmail.com')}}
      >
        Copy
      </button>
    </p>
  </div>
}

const Home: NextPage = () => {
  return <Layout noContainer={true}>
    <Intro />  
    <Showcase />  
    <Projects />
    <Footer />
  </Layout>
}

export default Home;
