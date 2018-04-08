import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../stylesheets/index.css';

import actions from '../actions';
import { PLAYER_1, PLAYER_2, getPlayerFromTurn, getOpponentFromTurn } from '../lib/player-utils';
import { willFlip, getPossibleFlipDirections } from '../lib/game-utils';
import Header from './header'
import Board from './board'
import MessageBox from './common/message-box'

class App extends Component {
  possibleMoves(turn) {
    const { board } = this.props;
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
    const { turn } = this.props;
    return this.possibleMoves(turn).length === 0;
  }

  get noOpponentMoves() {
    const { turn } = this.props;
    return this.possibleMoves(turn + 1).length === 0;
  }

  passTurn() {
    this.props.incrementTurn();
  }

  get gameOver() {
    const fullBoard = this.props.board
      .filter(cell => !cell)
      .length === 0

    const noPossibleMoves = this.noMoves && this.noOpponentMoves

    return fullBoard || noPossibleMoves;
  }

  get gameOverMessage() {
    let player1 = 0;
    let player2 = 0;
    this.props.board.forEach(cell => {
      if (cell === PLAYER_1) {player1++}
      if (cell === PLAYER_2) {player2++}
    })

    return player1 > player2 ? "Player 1 Wins!" :
      player1 < player2 ? "Player 2 Wins!" : "It's a Tie!";
  }

  render() {
    const { turn } = this.props;
    return (
      <div className="container">
        <Header turn={this.props.turn}/>
        <Board possibleMoves={this.possibleMoves(turn)} />
        {this.noMoves && !this.gameOver &&
          <MessageBox
            message="Looks Like You Have No Moves"
            buttonText="Pass Turn"
            onClick={() => this.props.incrementTurn()}
          />}
        {this.gameOver &&
          <MessageBox
            message={this.gameOverMessage}
            buttonText="New Game"
            onClick={() => this.props.newGame()}
          />}
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
