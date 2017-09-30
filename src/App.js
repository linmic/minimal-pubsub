import React, { Component } from 'react';

const pubSubEvents = {
  BUTTON_STATE_CHANGE: 'button.change',
};

class App extends Component {
  state = { count: 0 };

  componentDidMount() {
    window.pubsub.subscribe(pubSubEvents.BUTTON_STATE_CHANGE, count => {
      this.setState({ count });
    })
  }

  onClick = () => {
    this.setState(state => ({ count: state.count + 1 }), () => {
      window.pubsub.publish(pubSubEvents.BUTTON_STATE_CHANGE, this.state.count);
    });
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.count} />
        <button onClick={this.onClick}>{ this.state.count }</button>
      </div>
    );
  }
}

export default App;
