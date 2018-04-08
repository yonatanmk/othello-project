import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tile from './tile';
import actions from '../actions';
import { getBoardIndexFromCoords } from '../lib/board-utils';

class Board extends React.Component {
	generateBoard() {
		const { board, playChip, possibleMoves } = this.props;
		const rows = [];
		for (let y = 1; y <= 8; y++) {
			const columns = [];
			for (let x = 1; x <= 8; x++) {
				const key = getBoardIndexFromCoords(x, y);
				columns.push(
					<Tile
						key={key}
						player={board[key]}
						isValid={possibleMoves.includes(key)}
						onClick={() => playChip(key)}
					/>,
				);
			}
			rows.push(<div className="board-row" key={y}>{columns}</div>);
		}
		return rows;
	}

	render() {
		return (
      <div className="board">{this.generateBoard()}</div>
    );
	}
}

const mapStateToProps = ({ board }) => {
  return { board };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
