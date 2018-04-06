import React from 'react';

import { PLAYER_1, PLAYER_2 } from '../lib/player-utils';
import PlayerBox from './player-box';

export default ({turn}) => {
	return (
		<div className="message-box">
      <h1 className="title">Othello</h1>
      <div className="flex-box">
        <PlayerBox
          player={PLAYER_1}
        />
        <PlayerBox
          player={PLAYER_2}
        />
      </div>
		</div>
	);
}
