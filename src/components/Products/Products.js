import React, { Component } from 'react';
import styles from './Products.module.css';
import PicText from "../PicText/PicText";
import Banner from "../Banner/Banner";
import strings from "../../strings";
import Footer from "../Footer/Footer";

export default class Products extends Component {
  render() {
    return (
      <div>
        <div>
          <Banner
            picLocation={'banner_2.jpeg'}
            picText={strings.products_banner}
          />
        </div>
        <div className={styles.body}>
          <PicText
            picSide="left"
            picLocation="preview4.jpg"
            title={strings.products1_title}
            body={strings.products1_body}
          />
          <PicText
            picSide="right"
            picLocation="preview3.jpg"
            title={strings.products2_title}
            body={strings.products2_body}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}