import { redHangar } from '../board'

import { DEPLOY_PIECE, MOVE_PIECE, JUMP_PIECE, RETURN_PIECE } from './player'

const initialState = {
  piece1: {
    position: redHangar
  },
  piece2: {
    position: redHangar
  },
  piece3: {
    position: redHangar
  },
  undeployed: ['piece1', 'piece2', 'piece3']
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DEPLOY_PIECE + 'red':
      {
        let piece = state.undeployed[0]
        let newState = {
          ...state,
          undeployed: state.undeployed.slice(1),
        }
        newState[piece] = { position: redHangar.next }
        return newState
      }
    case MOVE_PIECE + 'red':
      {
        let newState = {
          ...state,
        }
        let position = state['piece' + action.piece].position
        newState['piece' + action.piece] = { position: position.next }
        return newState
      }
    case JUMP_PIECE + 'red':
      {
        let newState = {
          ...state,
        }
        let position = state['piece' + action.piece].position
        newState['piece' + action.piece] = { position: position.jump }
        return newState
      }
    case RETURN_PIECE + 'red':
      {
        let newState = {
          ...state,
          undeployed: [...state.undeployed, action.piece]
        }
        let position = redHangar
        newState[action.piece] = { position }
        return newState
      }
    default:
      return state
  }
}