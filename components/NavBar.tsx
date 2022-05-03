import Link from "next/link";
import Router from "next/router";
import style from '../styles/navbar.module.scss';

const NavBar: React.FC = (props) => {
  const scrollToTop = () => {
    Router.push('/');
    document.querySelector("body")!.scrollTo(0,0);
  }

  return (
    <>
      <nav className={`${style.nav}`}>
        <a href="#" onClick={scrollToTop}>Home</a>
        <Link href='/#projects'>
          <a>Projects</a>
        </Link>
        <Link href='/#contact'>
          <a>Contact</a>
        </Link>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </nav>

      <div className={`${style.offset}`}></div>
    </>
  );
};

export default NavBar;
