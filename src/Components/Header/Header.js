import React from "react";
import styles from "./Header.module.scss";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={`container-fluid  shadow-sm fixed ${styles.navbar_header}`}>
      <Navbar expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              className={styles.nav_brand}
              src="../assets/prime_light.png"
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className={`ms-auto ${styles.nav_items}`}>
            <Link to="/" className={styles.nav_link_item}>
              Home
            </Link>
            <Link to="/bookmarks" className={styles.nav_link_item}>
              Bookmarks
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
