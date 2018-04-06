import React from 'react';
import { connect } from 'react-redux';

import { PLAYER_1, PLAYER_2, getPlayerFromTurn } from '../lib/player-utils'

class PlayerBox extends React.Component {
  get score() {
    const { player, board } = this.props;
    return board.filter(cell => cell === player).length
  }

  render() {
    const { player, turn } = this.props;
    const boxClass = `player-box ${getPlayerFromTurn(turn) === player ? "green" : ""}`
    const chipClass = player === PLAYER_1 ? 'example-chip black' : player === PLAYER_2 ? 'example-chip white' : '';

    return (
      <div className={boxClass}>
        <h3 className="player-name">Player {player}</h3>
        <div className={chipClass}></div>
        <p className="score">Score: {this.score}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ board, turn }) => {
  return { board, turn };
};

export default connect(mapStateToProps)(PlayerBox);
