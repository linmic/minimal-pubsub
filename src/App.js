import React, { Component } from 'react';

const rexPubSubEvents = {
  BUTTON_STATE_CHANGE: 'rex.button.change',
};

class App extends Component {
  state = { count: 0 };

  componentDidMount() {
    window.rexPubsub.subscribe(rexPubSubEvents.BUTTON_STATE_CHANGE, count => {
      this.setState({ count });
    })
  }

  onClick = () => {
    this.setState(state => ({ count: state.count + 1 }), () => {
      window.rexPubsub.publish(rexPubSubEvents.BUTTON_STATE_CHANGE, this.state.count);
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
