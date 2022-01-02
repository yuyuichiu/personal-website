import { useState, useEffect, useContext } from "react";
import { Button, Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import brandIcon from "../public/assets/treeicon.webp";
import LoginStatusBar from "./LoginStatusBar";
import { BsMicrosoft } from 'react-icons/bs'
import AuthContext from "../context/authContext";

const NavBar: React.FC = (props) => {
  const authCtx = useContext(AuthContext);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <>
      <Navbar className="navbar_main">
        <Container>
          <Navbar.Brand className="left">
            <Link href="/" passHref>
              <div className="d-flex align-items-end" role='button'>
                <img src={brandIcon.src} alt="Brand Icon" height={30} />
                <h1 className="me-4">&nbsp;MaxWebDev</h1>
              </div>
            </Link>
            <LoginStatusBar />
          </Navbar.Brand>

          <Nav className="right d-none d-md-flex">
            <Link href="/blog" passHref>
              <Nav.Link className="px-3">Blog</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link className="px-3">Projects</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className="px-3">Contact</Nav.Link>
            </Link>
          </Nav>

          <Nav className='d-flex d-md-none' style={{ position: 'fixed', right: 0, zIndex: 50 }}>
            <Nav.Link className="px-3" onClick={() => setMobileShow(!mobileShow)}>
              <BsMicrosoft size={24}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Mobile Nav off canvas */}
      <Offcanvas show={mobileShow} onHide={() => setMobileShow(false)} placement='top' style={{ backgroundColor: '#f7ffce', height: '40%' }}>
        <Offcanvas.Body>
          <Nav onClick={() => setMobileShow(false)}>
            <Link href="/blog" passHref>
              <Nav.Link className="w-100 text-center text-dark" style={{fontSize: '24px'}}>Blog</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link className="w-100 text-center text-dark" style={{fontSize: '24px'}}>Projects</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className="w-100 text-center text-dark" style={{fontSize: '24px'}}>Contact</Nav.Link>
            </Link>
            {authCtx.isAuthenticated &&
              <Nav.Link className="w-100 text-center text-danger" style={{fontSize: '24px'}} onClick={authCtx.onLogout}>Logout</Nav.Link>
            }
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
