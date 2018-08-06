export const DEPLOY_PIECE = 'DEPLOY_PIECE'
export const MOVE_PIECE = 'MOVE_PIECE'
export const JUMP_PIECE = 'JUMP_PIECE'
export const RETURN_PIECE = 'RETURN_PIECE'

export const deployPiece = player => ({
  type: DEPLOY_PIECE + player
})

export const movePiece = (player, piece) => ({
  type: MOVE_PIECE + player,
  piece
})

export const jumpPiece = (player, piece) => ({
  type: JUMP_PIECE + player,
  piece
})

export const returnPiece = (player, piece) => ({
  type: RETURN_PIECE + player,
  piece
})
