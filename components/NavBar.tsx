import { Button, Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'

const NavBar : React.FC = () => {
  return <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Maxwell Yu</Navbar.Brand>
        </Link>
        <Nav>
          <Link href="/blog" passHref>
            <Nav.Link className="px-3">Blog</Nav.Link>
          </Link>
          <Link href="/resume" passHref>
            <Nav.Link className="px-3">Resume</Nav.Link>
          </Link>
          <Link href="/projects" passHref>
            <Nav.Link className="px-3">My Projects</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  </>
}

export default NavBar