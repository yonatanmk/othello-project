import React, { Component } from 'react';
// import { connect } from 'react-redux';

import '../stylesheets/index.css';

// import * as actions from '../actions';
import Board from './board'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}

//
//
// export default connect(null, actions)(App);
