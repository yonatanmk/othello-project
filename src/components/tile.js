import React from 'react';
import { PLAYER_X, PLAYER_O } from '../lib/player-utils';

export default ({ player, onClick, isValid }) => {
  const tileClass = `tile ${isValid ? "is-valid" : ''}`
  const chipClass = player === PLAYER_X ? 'chip black' : player === PLAYER_O ? 'chip white' : '';

	return (
		<div className={tileClass} onClick={onClick}>
      {player ? <div className={chipClass}></div> : null}
		</div>
	);
}
