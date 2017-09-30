import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PubSub from './pubsub';

if (typeof window !== 'undefined' && !window.pubsub) {
  window.pubsub = new PubSub();
}

ReactDOM.render(<App />, document.getElementById('foo'));
ReactDOM.render(<App />, document.getElementById('bar'));
