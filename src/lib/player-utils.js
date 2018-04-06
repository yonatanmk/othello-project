export const PLAYER_X = 'x';
export const PLAYER_O = 'o';

export const getPlayerFromTurn = turn => {
  return turn % 2 === 1 ? PLAYER_X : PLAYER_O;
}

export const getOpponentFromTurn = turn => {
  return turn % 2 === 1 ? PLAYER_O : PLAYER_X;
}
