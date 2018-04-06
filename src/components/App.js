import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../stylesheets/index.css';

import actions from '../actions';
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

  get noMoves() {
    return this.possibleMoves.length === 0;
  }

  passTurn() {
    this.props.incrementTurn();
  }

  render() {
    return (
      <div className="container">
        <Board possibleMoves={this.possibleMoves} />
        {this.noMoves && <div className="no-move-message">
          <div className="pass-turn-message">
            <h1>Looks Like You Have No Moves</h1>
          </div>
          <a className="pass-turn-button" onClick={() => this.passTurn()}>Pass Turn</a>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = ({ board, turn }) => {
  return { board, turn };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
