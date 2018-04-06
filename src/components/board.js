import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tile from './tile';
import actions from '../actions';
import { getBoardIndexFromCoords } from '../lib/board-utils';

class Board extends React.Component {
	generateTile(key) {
    const { board, playChip, possibleMoves } = this.props;
		return (
			<Tile key={key} player={board[key]} onClick={() => playChip(key)} isValid={possibleMoves.includes(key)}/>
		);
	}

	render() {
		const rows = [];
		for (let y = 1; y <= 8; y++) {
			const columns = [];
			for (let x = 1; x <= 8; x++) {
				const key = getBoardIndexFromCoords(x, y);
				columns.push(this.generateTile(key))
			}
			rows.push(<div className="board-row" key={y}>{columns}</div>);
		}
		return (
      <div className="board">{rows}</div>
    );
	}
}

const mapStateToProps = ({ board }) => {
  return { board };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
