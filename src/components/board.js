import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tile from './tile';
import actions from '../actions';

class Board extends React.Component {
	generateTile(key) {
    const { board, playChip } = this.props;
		return (
			<Tile key={key} player={board[key]} onClick={() => playChip(key, 'x')} />
		);
	}

	render() {
		const rows = [];
		for (let y = 0; y < 8; y++) {
			const columns = [];
			for (let x = 0; x < 8; x++) {
				columns.push(this.generateTile(x + 8 * y))
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
