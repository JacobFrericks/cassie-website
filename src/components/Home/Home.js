import React, { Component } from 'react';
import styles from './Home.module.css';
import PicText from "../PicText/PicText";
import Banner from "../Banner/Banner";
import strings from "../../strings";
import Footer from "../Footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Banner
            picLocation={"banner_1.jpeg"}
            picText={strings.home_banner}
            showButton={true}
          />
        </div>
        <div className={styles.body}>
          <PicText
            picSide="left"
            picLocation="preview1.jpg"
            title={strings.home1_title}
            body={strings.home1_body}
          />
          <PicText
            picSide="right"
            picLocation="preview2.jpg"
            title={strings.home1_title}
            body={strings.home1_body}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}