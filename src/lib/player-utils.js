export const PLAYER_X = '1';
export const PLAYER_O = '2';

export const getPlayerFromTurn = turn => {
  return turn % 2 === 1 ? PLAYER_X : PLAYER_O;
}

export const getOpponentFromTurn = turn => {
  return turn % 2 === 1 ? PLAYER_O : PLAYER_X;
}
