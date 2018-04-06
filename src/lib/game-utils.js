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
  // console.log('Current Will Flip Index: ', startIndex)
  const nextTileIndex = startIndex + direction;
  const nextTile = board[nextTileIndex];
  if (!nextTile) {
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
  // console.log('Current Index: ', currentIndex)
  const newBoard = [...board];
  const direction = directions[0];
  const nextTileIndex = currentIndex + direction;
  const nextTile = newBoard[nextTileIndex];
  if (directions.length === 0) {
    return board;
  } else if (nextTile === player) {
    newBoard[currentIndex] = player;
    return flipAllTiles(startIndex, startIndex, directions.splice(1, directions.length - 1), newBoard, player);
  } else {
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
// +9 = sw
// +7 = se
