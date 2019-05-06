import React, { Component } from 'react';
import styles from './Services.module.css';
import PicText from "../PicText/PicText";
import Banner from "../Banner/Banner";
import strings from "../../strings";
import Footer from "../Footer/Footer";

export default class Services extends Component {
  render() {
    return (
      <div>
        <div>
          <Banner
            picLocation={'banner_3.jpeg'}
            picText={strings.services_banner}
          />
        </div>
        <div className={styles.body}>
          <PicText
            picSide="left"
            picLocation="preview6.jpg"
            title={strings.services1_title}
            body={strings.services1_body}
          />
          <PicText
            picSide="right"
            picLocation="payrange.jpg"
            title={strings.services2_title}
            body={strings.services2_body}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}