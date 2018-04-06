import React from 'react';

import { PLAYER_X, PLAYER_O } from '../lib/player-utils';
import PlayerBox from './player-box';

export default ({turn}) => {
	return (
		<div className="message-box">
      <h1 className="title">Othello</h1>
      <div className="flex-box">
        <PlayerBox
          player={PLAYER_X}
        />
        <PlayerBox
          player={PLAYER_O}
        />
      </div>
		</div>
	);
}
