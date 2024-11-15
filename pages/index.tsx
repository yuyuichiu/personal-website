import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import Label from '../components/Label';
import styles from '../styles/index.module.scss';

const ContactButtons: React.FC = () => {
  return <div className='d-flex justify-content-center'>
    <a href='mailto:yuichiuyu1915@gmail.com' target='_blank' rel='noreferrer'>
        <button className='button'>Email</button>
      </a>
      <a href='https://www.linkedin.com/in/yuyuichiu/' target='_blank' rel='noreferrer'>
        <button className='button'>LinkedIn</button>
      </a>
      <a href='/assets/resume2024.pdf' target='_blank' rel='noreferrer'>
        <button className='button'>Resume</button>
      </a>
  </div>
}

const WhoIWorkedWirh: React.FC = () => {
  return <div>
    <h2 className='mb-0'>Who I worked with</h2>
      <p className='text-center'>I am glad to work with these awesome clients</p>
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
}

const Intro: React.FC = () => {
  return <div className={`container`}>
    <section className={`${styles.intro}`}>
      {/* <div className={`${styles.avatar_mobile}`}>
       <img src={'/assets/cropped_yuyuichiu_bg.webp'} title='Profile picture' />
      </div> */}

      <h1 className='text-center'>Dave Yu</h1>
      <div>
        <div className={`${styles.badge}`}>
          <img src={'/assets/js_icon.webp'} title='Proficient in JavaScript' />
        </div>
        
        <div className={`${styles.badge}`}>
          <img src={'/assets/nodejs_icon.jpg'} title='Proficient in Node.js' />
        </div>

        <p className='text-center'>IT Specialist in Web Development and Databases</p>

        <div className={`${styles.badge}`}>
          <img src={'/assets/react_icon.webp'} title='Proficient in React.js' />
        </div>

        <div className={`${styles.badge}`}>
          <img src={'/assets/oracle_icon.webp'} width="30" height="30" title='Proficient in Oracle DB' />
        </div>
      </div>

      {/* <div className={`${styles.avatar}`}>
       <img src={'/assets/cropped_yuyuichiu_bg.webp'} title='Profile picture' />
      </div>
      <h2>Builds your vision, evolves with technology.</h2> */}

      <ContactButtons />
      {/* <p>For years, I have studied various fields of web technologies and transformed what I learned into responsive web pages and interactive web applications. I am innovative to learn emerging technologies on my own and am open to team collaboration in a job environment. </p>
      <p>I am armed to be your ally in the journey of web development! Contact me via my business email -- 📧 yuichiuyu1915@gmail.com</p> */}

      {/* Qualifications */}

      {/* Who I worked with */}
      {/* <WhoIWorkedWirh /> */}
    </section>
    <hr></hr>
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

const Qualifications: React.FC = () => {
  return <section id='showcase' className={`${styles.showcase}`}>
      <h2>My qualifications</h2>

      <div className='container pb-5'>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td align={'left'} colSpan={2}><h3 style={{fontSize: '1em', margin: '0px', fontWeight: '700'}}>Education</h3></td>
            </tr>
            <tr>
              <td>2018 - 2022</td>
              <td className="mb-4">
                <h4 style={{fontSize: '1.2em'}}>CityU Double Major - Information Management & Accountancy</h4>
                <p style={{marginLeft: '1em', marginBottom: '0px'}}>
                  Upper Second Class Honours
                </p>
              </td>
            </tr>
            
            <tr>
              <td align={'left'} colSpan={2}><h3 style={{fontSize: '1em', margin: '0px', fontWeight: '700'}}>Certifications  </h3></td>
            </tr>
            <tr>
              <td>2024</td>
              <td>
                <h4 style={{fontSize: '1.2em'}}>Microsoft Certified: Azure Database Administrator Associate
                  <a style={{fontSize: '0.7em'}} href='https://learn.microsoft.com/en-us/users/daveyu/credentials/a2d97baa591042d1' target='_blank' rel='noreferrer'>
                    &nbsp; (Link to certificate)
                  </a>
                </h4>
              </td>
            </tr>
            <tr>
              <td>2024</td>
              <td>
                <h4 style={{fontSize: '1.2em'}}>Microsoft Applied Skills: Azure AI Language
                  <a style={{fontSize: '0.7em'}} href='https://learn.microsoft.com/en-us/users/daveyu/credentials/2af42d222ba59836' target='_blank' rel='noreferrer'>
                    &nbsp; (Link to certificate)
                  </a>
                </h4>
              </td>
            </tr>
            <tr>
              <td>2024</td>
              <td>
                <h4 style={{fontSize: '1.2em'}}>Microsoft Applied Skills: Azure AI Document Intelligence
                  <a style={{fontSize: '0.7em'}} href='https://learn.microsoft.com/en-us/users/daveyu/credentials/17e4afe7b39d1983' target='_blank' rel='noreferrer'>
                    &nbsp; (Link to certificate)
                  </a>
                </h4>
              </td>
            </tr>
            <tr>
              <td>2022</td>
              <td>
              <h4 style={{fontSize: '1.2em'}}>CS50x - Essential Computer science
                <a style={{fontSize: '0.7em'}} href='https://certificates.cs50.io/9a3f14ce-c93a-4b04-8155-9dd4227f3b0c.pdf?size=letter' target='_blank' rel='noreferrer'>
                  &nbsp; (Link to certificate)
                </a>
              </h4>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Rework these skillset */}
        <SkillMenu title={'Front-end skillsets'} showInitially={true}>
          <div className={`${styles.skillList}`}>
            <div>HTML, CSS, JavaScript</div>
            <div>ASP.NET (Web & API)</div>
            <div>React.js</div>
            <div>Bootstrap</div>
            <div>Essential web design</div>
            <div>Cross browser compatibility</div>
          </div>
        </SkillMenu>

        <SkillMenu title={'Server-side & others'} showInitially={true}>
          <div className={`${styles.skillList}`}>
            <div>Node.js</div>
            <div>SQL (Oracle, MS SQL Server)</div>
            <div>NoSQL (MongoDB)</div>
            <div>Template engines (EJS)</div>
            <div>Azure</div>
            <div>Git</div>
          </div>
        </SkillMenu>
      </div>
  </section>
}

const Projects: React.FC = () => {
  return <section id='projects' className={`${styles.projects} container`}>
    <h2>My professional projects</h2>
    <p className='mb-0'>Source code are not available due to privacy reason.</p>
    
    <div className={`${styles.items}`}>
      <div>
        <img src={'/assets/sunsmart_showcase-mf.webp'} alt='sun smart showcase'/>
        <h3>日月思教育中心 - Landing page</h3>
        <p>
          <Label useStyle='react'>React.js</Label>
          <Label>TypeScript</Label>
          <Label>CSS Animations</Label>
          <Label>Web Design</Label>
        </p>

        <p>Made a modern landing page for a local learning centre</p>

        <a href='https://github.com/yuyuichiu/sun-smart-learning-centre' target='_blank' rel='noreferrer'>
          <button className='button'>Github</button>
        </a>
        <a href='https://sunsm.art' target='_blank' rel='noreferrer'>
          <button className='button'>Live Website</button>
        </a>
      </div>
      <div>
        <img src={'/assets/csrs-showcase.png'} alt='Community Service Record System showcase'/>
        <h3>Community Service Record System (CSRS)</h3>
        <p>
          <Label>JavaScript</Label>
          <Label>jQuery</Label>
          <Label>PL/SQL</Label>
        </p>

        <p>Gathered user requirements and developed a system to digitizes the management of student development activities held by CityU.</p>
        <p>Capability: process excel files, generate reports, integrate with QuestionPro</p>

        <a href='/assets/CSRS User Guide.pdf' target='_blank' rel='noreferrer'>
          <button className='button'>User guide</button>
        </a>
      </div>

      <div>
        <img src={'/assets/cocurricular-showcase.png'} alt='co-curricular transcript showcase'/>
        <h3>Co-curricular Transcript for CityU students</h3>
        <p>
          <Label>Node.js</Label>
          <Label>PDF Generation</Label>
          <Label>PL/SQL</Label>
        </p>

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
        <p>
          <Label>ASP.NET (Web & API)</Label>
          <Label>Oracle DB</Label>
        </p>

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
        <img src={'/assets/not-pizza-hut-showcase-mf.webp'} alt='not pizza hut'/>
        <h3>Not Pizza Hut</h3>
        <p>
          <Label>React.js</Label>
          <Label>Bootstrap</Label>
          <Label>JavaScript</Label>
        </p>

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
        <p>
          <Label>Google Map API</Label>
          <Label>JavaScript</Label>
        </p>

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

/* const Footer: React.FC = () => {
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
} */

const Footer: React.FC = () => {
  return <div className='footer'>
    <hr></hr>
    <p className='text-center mb-0'>Thank you for reading my website!</p>
    <ContactButtons />
    <small>Copy</small>
    <br></br>
  </div>
}

const Home: NextPage = () => {
  return <Layout noContainer={true}>
    <Intro />  
    <Projects />
    <Qualifications />  
    <Footer />
  </Layout>
}

export default Home;
