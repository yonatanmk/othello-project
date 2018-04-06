import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/index.css';

import { getPlayerFromTurn } from '../lib/player-utils';
import Board from './board'

class App extends Component {

  get checkForfeit() {
    const { board, turn } = this.props;
    const player = getPlayerFromTurn(turn);
  }

  render() {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}

const mapStateToProps = ({ board, turn }) => {
  return { board, turn };
};

// export default connect(null, actions)(App);
export default connect(mapStateToProps)(App);
