export const getPossibleFlipDirections = (startIndex, board, opponent) => {
  const possibleFlipDirections = [];
  const directions = [1, -1, 7, -7, 8, -8, 9, -9];
  directions.forEach(direction => {
    if (board[startIndex + direction] === opponent) {
      possibleFlipDirections.push(direction);
    }
  })
  return possibleFlipDirections;
}

export const willFlip = (startIndex, direction, board, player) => {
  const rightDirections = [1, -7, 9];
  const leftDirections = [-1, -9, 7];
  const nextTileIndex = startIndex + direction;
  const nextTile = board[nextTileIndex];

  if (!nextTile) {
    return false;
  }

  if (rightDirections.includes(direction) && nextTileIndex % 8 === 0) {
    return false;
  }

  if (leftDirections.includes(direction) && nextTileIndex % 8 === 7) {
    return false;
  }

  else if (nextTile === player) {
    return true;
  }
  else {
    return willFlip(nextTileIndex, direction, board, player)
  }
}

export const flipAllTiles = (startIndex, currentIndex, directions, board, player) => {
  const newBoard = [...board];
  const direction = directions[0];
  const nextTileIndex = currentIndex + direction;
  const nextTile = newBoard[nextTileIndex];
  if (directions.length === 0) {
    // no more directions, end flipping
    return board;
  } else if (nextTile === player) {
    // the next tile is yours, flip currentTile then start over with new direction
    newBoard[currentIndex] = player;
    return flipAllTiles(startIndex, startIndex, directions.splice(1, directions.length - 1), newBoard, player);
  } else {
    // the next tile is the opponents, keep flipping
    newBoard[currentIndex] = player;
    return flipAllTiles(startIndex, nextTileIndex, directions, newBoard, player);
  }
}

// Directions
// +1 = ->
// -1 = <-
// +8 = down
// -8 = up
// -9 = nw
// -7 = ne
// +9 = se
// +7 = sw
