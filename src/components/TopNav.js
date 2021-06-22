import React from "react";
import logo from "../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div>
      <div className="topnav">
        <div className="top-nav">
          <div className="container">
            <div className="row d-flex justify-content-center topper">
              <a href="tel:+91-7007912931" className="col-md-3">
                Sales: +91-7007912931
              </a>
              <a href="tel:+91-8299093967" className="col-md-3">
                Sales: +91-8299093967
              </a>
              <a href="mailto:ebs@badabussinesspvtltd.com" className="col-md-3">
                Sales: ebs@badabussinesspvtltd.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className="topnav">
        <div className="container">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto links"></Nav>
            <Nav className="links">
              <Nav.Link className="nav-links" href="#deets">
                <li>
                  <Link style={{ color: "black" }} to="/">
                    Home
                  </Link>
                </li>
              </Nav.Link>
              <Nav.Link className="nav-links" eventKey={2}>
                <li>
                  <Link style={{ color: "black" }} to="/about">
                    About
                  </Link>
                </li>
              </Nav.Link>
              <Nav.Link className="nav-links" eventKey={2} href="#memes">
                <li>
                  <Link style={{ color: "black" }} to="/ibc">
                    IBC
                  </Link>
                </li>
              </Nav.Link>
              <Nav.Link className="nav-links" eventKey={2} href="#memes">
                <li>
                  <Link style={{ color: "black" }} to="/contact">
                    Contact Us
                  </Link>
                </li>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default TopNav;
