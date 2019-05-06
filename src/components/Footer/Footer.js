import React, {Component} from 'react';
import styles from "./Footer.module.css"
import {Link} from "react-router-dom";

export default class Footer extends Component {

  render() {
    return (
      <div className={styles.textAndButton}>
        <div className={styles.text}>
          Contact us today to learn more about our reliable vending services, and 100% satisfaction guarantee
        </div>
        <Link to="/contactUs">
          <a href="#" className={styles.button}>Contact Us</a>
        </Link>
      </div>
    );
  }
}