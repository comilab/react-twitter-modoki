import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Messages from './Messages';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'twitterもどき',
      messages: []
    };
  }

  handleSubmit(event, message) {
    event.preventDefault();

    const messages = this.state.messages.slice();
    messages.push(message);

    this.setState({messages: messages});
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
