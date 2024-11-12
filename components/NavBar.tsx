import { useRouter } from 'next/router'
import style from '../styles/navbar.module.scss'

const NavBar: React.FC = (props) => {
  const router = useRouter()

  const goToTop = () => router.push('/')
  const goToBlog = () => router.push('/blog')

  const goToProjects = () => {
    let loc = document.getElementById('projects')?.getBoundingClientRect().top! + window.scrollY - 100
    loc ? window.scrollTo(0, loc) : router.push('/#projects')
  }

  const goToQualifications = () => {
    let loc = document.getElementById('showcase')?.getBoundingClientRect().top! + window.scrollY - 100
    loc ? window.scrollTo(0, loc) : router.push('/#showcase')
  }

  const goToFooter = () => {
    let loc = document.getElementById('contact')?.getBoundingClientRect().top! + window.scrollY - 100
    loc ? window.scrollTo(0, loc) : router.push('/#footer')
  }

  return (
    <>
      <nav className={`${style.nav}`}>
        <button type='button' onClick={goToTop}>Top</button>
        <button type='button' onClick={goToProjects}>Projects</button>
        {/* <button type='button' onClick={goToFooter}>Contact</button> */}
        <button type='button' onClick={goToQualifications}>Qualifications</button>
        {/* <button type='button' onClick={goToBlog}>Blog</button> */}
      </nav>

      <div className={`${style.offset}`}></div>
    </>
  );
};

export default NavBar;
