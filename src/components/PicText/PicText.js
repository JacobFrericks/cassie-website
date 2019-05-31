import React, {Component} from 'react';
import { Container, Row, Col} from 'reactstrap';
import styles from './PicText.module.css'

export default class PicText extends Component {

  getText(title, body) {
    return (
      <div>
        <h4>
          {title}
        </h4>
        {body}
      </div>);
  }

  getImage(picLocation) {
    return (picLocation ?
      <img src={require('../../images/' + picLocation)} alt='vending machine'/> :
      null);
  }

  render() {
    const {picSide, picLocation, title, body} = this.props;
    let text = this.getText(title, body);
    let image = this.getImage(picLocation);

    return (
      <Container>
          <Row className={styles.imageTextContainer}>
            <Col>{picSide === 'left' ? image : text}</Col>
            <Col>{picSide === 'left' ? text : image}</Col>
          </Row>
      </Container>
    );
  }
}

const Box = props => <div className="box">{props.children} </div>;
