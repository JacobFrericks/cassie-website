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
            picLocation={"home_banner.jpeg"}
            picText={strings.home_banner}
            showButton={false}
          />
        </div>
        <div className={styles.body}>
          <PicText
            picSide="left"
            picLocation="self_picture.jpg"
            title={strings.home1_title}
            body={strings.home1_body}
          />
          <PicText
            picSide="right"
            picLocation="math_activity.jpg"
            title={strings.home2_title}
            body={strings.home2_body}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}