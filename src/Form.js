import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      error: '',
      isValid: false
    };
  }

  handleChange(event) {
    const state = {message: event.target.value};

    if (!state.message) {
      state.isValid = false;
      state.error = '入力してください';
    } else if (state.message.length > 140) {
      state.isValid = false;
      state.error = '140文字を超えています';
    } else {
      state.isValid = true;
      state.error = '';
    }

    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(event, this.state.message);

    this.setState({
      message: '',
      error: '',
      isValid: false
    });
  }

  render() {
    return pug`
      form(onSubmit=this.handleSubmit.bind(this))
        div
          textarea(value=this.state.message, onChange=this.handleChange.bind(this))
          div=this.state.error
        div
          button(type="submit", disabled=!this.state.isValid) 送信
    `
  }
}
