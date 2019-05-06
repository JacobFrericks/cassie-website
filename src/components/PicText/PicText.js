import React, {Component} from 'react';
import styles from './PicText.module.css'

export default class PicText extends Component {

  getText(title, body) {
    return (
      <div className={styles.textContainer}>
        <h4>
          {title}
        </h4>
        {body}
      </div>);
  }

  getImage(picLocation) {
    return (picLocation ?
      <img className={styles.images} src={require('../../images/' + picLocation)} alt='vending machine'/> :
      null);
  }

  render() {
    const {picSide, picLocation, title, body} = this.props;
    let text = this.getText(title, body);
    let image = this.getImage(picLocation);

    return (
      <div className={styles.imageTextContainer}>
        {picSide === 'left' ?
          <div className={styles.sideBySide}>
            {image}
            {text}
          </div>
          :
          <div className={styles.sideBySide}>
            {text}
            {image}
          </div>
        }
      </div>
    );
  }
}