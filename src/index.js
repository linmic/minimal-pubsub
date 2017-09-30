import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PubSub from './pubsub';
import registerServiceWorker from './registerServiceWorker';

if (typeof window !== 'undefined' && !window.rexPubsub) {
  window.rexPubsub = new PubSub();
}

ReactDOM.render(<App />, document.getElementById('foo'));
ReactDOM.render(<App />, document.getElementById('bar'));
registerServiceWorker();
