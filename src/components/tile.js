import React from 'react';

export default ({ player, onClick }) => {
  const chipClass = player === 'x' ? 'chip white' : player === 'o' ? 'chip black' : '';

	return (
		<div className="tile" onClick={onClick}>
      {player ? <div className={chipClass}></div> : null}
		</div>
	);
}
