import React, {Component} from 'react';
import Banner from "../Banner/Banner";
import strings from "../../strings";
import styles from './ContactUs.module.css';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };

    this.getNameInput = this.getNameInput.bind(this);
    this.getEmailInput = this.getEmailInput.bind(this);
    this.getSubjectInput = this.getSubjectInput.bind(this);
    this.getMessageInput = this.getMessageInput.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubjectChange(event) {
    this.setState({subject: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  getNameInput() {
    return (
      <div>
        <label className={styles.inputLabel}>Name *</label>
        <br/>
        <div className={styles.nameContainer}>
          <div className={styles.nameDivs}>
            <input className={styles.nameInput} type="text" name="firstName" onChange={this.handleFirstNameChange}/><br/>
            <text className={styles.subText}>First Name</text>
          </div>
          <div className={styles.nameDivs}>
            <input className={styles.nameInput} type="text" name="lastName" onChange={this.handleLastNameChange}/><br/>
            <text className={styles.subText}>Last Name</text>
          </div>
        </div>
      </div>
    );
  }

  getEmailInput() {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Email *</label>
        <input className={styles.input} type="text" name="email" onChange={this.handleEmailChange}/><br/>
      </div>
    );
  }

  getSubjectInput() {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Subject *</label>
        <input className={styles.input} type="text" name="subject" onChange={this.handleSubjectChange}/><br/>
      </div>
    );
  }

  getMessageInput() {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>Message *</label>
        <textarea className={styles.input} type="text" name="message" onChange={this.handleMessageChange}/><br/>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('https://bejomkze58.execute-api.us-east-1.amazonaws.com/default/email-bobs-vending', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
    });
  }

  render() {
    return (
      <div>
        <div>
          <Banner
            picLocation={'banner_4.jpeg'}
            picText={strings.contact_banner}
          />
        </div>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          {this.getNameInput()}
          {this.getEmailInput()}
          {this.getSubjectInput()}
          {this.getMessageInput()}

          <button className={styles.submitButton}>Submit</button>
        </form>
      </div>
    );
  }
}