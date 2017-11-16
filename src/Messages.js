import React, { Component } from 'react';

export default class Messages extends Component {
  render() {
    const messages = this.props.messages.map((message, i) => {
      return (
        <li key={i}>{message}</li>
      );
    });
    return (
      <ul>{messages}</ul>
    );
  }
}
