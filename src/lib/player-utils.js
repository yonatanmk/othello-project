export const PLAYER_1 = '1';
export const PLAYER_2 = '2';

export const getPlayerFromTurn = turn => {
  return turn % 2 === 1 ? PLAYER_1 : PLAYER_2;
};

export const getOpponentFromTurn = turn => {
  return turn % 2 === 1 ? PLAYER_2 : PLAYER_1;
};
