import React from 'react'
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={`${styles["nav"]}`} >
      <div className="logo">ENCODED EPISODES</div>
      <div className={`${styles["links"]}`} >
        <a href="#home">Why EnCodEd Ep.</a>
        <a href="#about">About the Creator</a>
        <a href="#services">Upcoming Guest</a>
        <a href="#contact">Previous Ep.</a>
        <a href="#contact">Contact Us</a>
        
      </div>
      <div className={`${styles["subscribe"]}`}>
          <p>Subscribe</p>
      </div>
    </div>
  )
}

export default Navbar
