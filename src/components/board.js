import React from 'react';
import { connect } from 'react-redux';

import Tile from './tile.js';

class Board extends React.Component {
	generateTile(key) {
    const { board } = this.props;
		return (
			<Tile key={key} player={board[key]} onClick={() => console.log('click')} />
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

export default connect(mapStateToProps)(Board);
