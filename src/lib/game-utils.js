export const willFlip = (startIndex, direction, board, player) => {
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
  console.log('Current Index: ', currentIndex)
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
