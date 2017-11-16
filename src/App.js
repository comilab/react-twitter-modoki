import React, { Component } from 'react';
import Form from './Form';
import Messages from './Messages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'twitterもどき'
    };
  }

  handleSubmit(event, message) {
    event.preventDefault();

    this.props.handleMessageAdd(message);
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Form onSubmit={this.handleSubmit.bind(this)} />
        <Messages messages={this.props.messages} />
      </div>
    );
  }
}

export default App;
