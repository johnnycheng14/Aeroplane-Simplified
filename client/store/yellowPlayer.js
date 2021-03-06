import { yellowHangar } from '../board'

import {DEPLOY_PIECE, MOVE_PIECE, JUMP_PIECE, RETURN_PIECE} from './player'

const initialState = {
  piece1: {
    position: yellowHangar
  },
  piece2: {
    position: yellowHangar
  },
  piece3: {
    position: yellowHangar
  },
  undeployed: ['piece1', 'piece2', 'piece3']
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DEPLOY_PIECE + 'yellow':
      {
        let piece = state.undeployed[0]
        let newState = {
          ...state,
          undeployed: state.undeployed.slice(1),
        }
        newState[piece] = { position: yellowHangar.next }
        return newState
      }
    case MOVE_PIECE + 'yellow':
      {
        let newState = {
          ...state,
        }
        let position = state['piece' + action.piece].position
        newState['piece' + action.piece] = { position: position.next }
        return newState
      }
    case JUMP_PIECE + 'yellow':
      {
        let newState = {
          ...state,
        }
        let position = state['piece' + action.piece].position
        newState['piece' + action.piece] = { position: position.jump }
        return newState
      }
    case RETURN_PIECE + 'yellow':
      {
        let newState = {
          ...state,
          undeployed: [...state.undeployed, action.piece]
        }
        let position = yellowHangar
        newState[action.piece] = { position }
        return newState
      }
    default:
      return state
  }
}