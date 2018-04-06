import React from 'react';
import { PLAYER_1, PLAYER_2 } from '../lib/player-utils';

export default ({ player, onClick, isValid }) => {
  const tileClass = `tile ${isValid ? "is-valid" : ''}`
  const chipClass = player === PLAYER_1 ? 'chip black' : player === PLAYER_2 ? 'chip white' : '';

	return (
		<div className={tileClass} onClick={onClick}>
      {player ? <div className={chipClass}></div> : null}
		</div>
	);
}
