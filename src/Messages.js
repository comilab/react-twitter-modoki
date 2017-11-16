import React, { Component } from 'react';

export default class Messages extends Component {
  render() {
    return pug`
      ul
        each message, i in this.props.messages
          li(key=i)=message
    `;
  }
}
