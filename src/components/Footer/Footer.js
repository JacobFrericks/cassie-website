import React, {Component} from 'react';
import styles from "./Footer.module.css"
import {Link} from "react-router-dom";

export default class Footer extends Component {

  render() {
    return (
      <div className={styles.textAndButton}>
        <div className={styles.text}>
        </div>
        <Link to="/contactMe">
          <a href="#" className={styles.button}>Contact Me</a>
        </Link>
      </div>
    );
  }
}