import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../navbar/navbar.module.css'

const Navbarlist = () => {
  return (
    <div className={styles.linkArea}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/service">Service</Link>
    </div>
  );
}

export default Navbarlist;
