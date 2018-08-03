import { greenHangar } from '../board'

import { DEPLOY_PIECE, MOVE_PIECE, JUMP_PIECE, FLY_PIECE, RETURN_PIECE } from './player'

const initialState = {
  piece1: {
    position: greenHangar
  },
  piece2: {
    position: greenHangar
  },
  piece3: {
    position: greenHangar
  },
  piece4: {
    position: greenHangar
  },
  undeployed: ['piece1', 'piece2', 'piece3', 'piece4']
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DEPLOY_PIECE + 'green':
      {
        let piece = state.undeployed[0]
        let newState = {
          ...state,
          undeployed: state.undeployed.slice(1),
        }
        newState[piece] = { position: greenHangar.next }
        return newState
      }
    case MOVE_PIECE + 'green':
      {
        let newState = {
          ...state,
        }
        let position = newState[action.type].next
        newState[action.type] = { position }
        return newState
      }
    case JUMP_PIECE + 'green':
      {
        let newState = {
          ...state,
        }
        let position = newState[action.type].jump
        newState[action.type] = { position }
        return newState
      }
    case FLY_PIECE + 'green':
      {
        let newState = {
          ...state,
        }
        let position = newState[action.type].flight
        newState[action.type] = { position }
        return newState
      }
    case RETURN_PIECE + 'green':
      {
        let newState = {
          ...state,
        }
        let position = greenHangar
        newState[action.type] = { position }
        return newState
      }
    default:
      return state
  }
}