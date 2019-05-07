import React, {Component} from 'react';
import styles from './Banner.module.css'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

export default class Banner extends Component {

  render() {
    const {picLocation, picText, showButton} = this.props;

    let backgroundImage = require('../../images/' + picLocation);

    let heroStyle = {
      background: "linear-gradient( rgba(0,0,0,0.25), rgba(0, 0, 0, 0.25) ), " +
                  "url(" + backgroundImage + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100wh",
      height: "50vh",
      display: "flex"
    };

    return (
      <div>
        <NavBar
          light='true'
          fixed='top'
        />
        <header style={heroStyle}>
          <div className={styles.centerContent}>
            <h1>{picText}</h1>
            {showButton ?
              <Link to="/contactMe">
                <a href="#" className={styles.button}>Learn More</a>
              </Link>
              : null }
          </div>
        </header>
      </div>
    );
  }
}