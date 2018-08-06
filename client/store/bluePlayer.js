import { blueHangar } from '../board'

import {DEPLOY_PIECE, MOVE_PIECE, JUMP_PIECE, RETURN_PIECE} from './player'

const initialState = {
  piece1: {
    position: blueHangar
  },
  piece2: {
    position: blueHangar
  },
  piece3: {
    position: blueHangar
  },
  undeployed: ['piece1', 'piece2', 'piece3']
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DEPLOY_PIECE + 'blue':
      {
        let piece = state.undeployed[0]
        let newState = {
          ...state,
          undeployed: state.undeployed.slice(1),
        }
        newState[piece] = { position: blueHangar.next }
        return newState
      }
    case MOVE_PIECE + 'blue':
      {
        let newState = {
          ...state,
        }
        let position = state['piece' + action.piece].position
        newState['piece' + action.piece] = { position: position.next }
        return newState
      }
    case JUMP_PIECE + 'blue':
      {
        let newState = {
          ...state,
        }
        let position = state['piece' + action.piece].position
        newState['piece' + action.piece] = { position: position.jump }
        return newState
      }
    case RETURN_PIECE + 'blue':
      {
        let newState = {
          ...state,
          undeployed: [...state.undeployed, action.piece]
        }
        let position = blueHangar
        newState[action.piece] = { position }
        return newState
      }
    default:
      return state
  }
}