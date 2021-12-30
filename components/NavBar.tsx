import { useState, useEffect } from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import brandIcon from "../public/assets/treeicon.webp";
import LoginStatusBar from "./LoginStatusBar";

const NavBar: React.FC = () => {
  return (
    <>
      <Navbar className="navbar_main">
        <Container>
          <Navbar.Brand className="left">
            <Link href="/" passHref>
              <div className="d-flex align-items-end">
                <img src={brandIcon.src} alt="Brand Icon" height={30} />
                <h1 className="me-4">&nbsp;MaxWebDev</h1>
              </div>
            </Link>
            <LoginStatusBar />
          </Navbar.Brand>

          <Nav className="right">
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
  );
};

export default NavBar;
