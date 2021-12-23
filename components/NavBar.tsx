import { Button, Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'
import brandIcon from '../public/assets/treeicon.webp'

const NavBar : React.FC = () => {
  return <>
    <Navbar className='navbar_main'>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="left">
            <img src={brandIcon.src} alt='Brand Icon' height={30}/>
            <h1 className=''>&nbsp;MaxWebDev</h1>
          </Navbar.Brand>
        </Link>
        <Nav className='right'>
          {/* <Link href="/about" passHref>
            <Nav.Link className="px-3">About</Nav.Link>
          </Link> */}
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
      </Container>
    </Navbar>
  </>
}

export default NavBar