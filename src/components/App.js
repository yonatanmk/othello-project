import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../stylesheets/index.css';

import { getPlayerFromTurn, getOpponentFromTurn } from '../lib/player-utils';
import { willFlip, getPossibleFlipDirections } from '../lib/game-utils';
import Board from './board'

class App extends Component {

  get possibleMoves() {
    const { board, turn } = this.props;
    const player = getPlayerFromTurn(turn);
    const opponent = getOpponentFromTurn(turn);
    const possibleMoves = board
      .map((_,i) => i)
      .filter(index => {
        if (board[index]) {
          return false;
        }
        const possibleFlipDirections = getPossibleFlipDirections(index, board, opponent);
        const trueFlipDirections = possibleFlipDirections.filter(direction => {
          return willFlip(index, direction, board, player)
        })
        return trueFlipDirections.length !== 0;
      })

    return possibleMoves;
  }

  render() {
    return (
      <div className="container">
        <Board possibleMoves={this.possibleMoves} />
      </div>
    );
  }
}

const mapStateToProps = ({ board, turn }) => {
  return { board, turn };
};

// export default connect(null, actions)(App);
export default connect(mapStateToProps)(App);
