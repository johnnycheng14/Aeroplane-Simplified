import { blueHangar } from '../board'

import {DEPLOY_PIECE, MOVE_PIECE, JUMP_PIECE, FLY_PIECE, RETURN_PIECE} from './player'

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
  piece4: {
    position: blueHangar
  },
  undeployed: ['piece1', 'piece2', 'piece3', 'piece4']
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
        let position = newState[action.type].next
        newState[action.type] = { position }
        return newState
      }
    case JUMP_PIECE + 'blue':
      {
        let newState = {
          ...state,
        }
        let position = newState[action.type].jump
        newState[action.type] = { position }
        return newState
      }
    case FLY_PIECE + 'blue':
      {
        let newState = {
          ...state,
        }
        let position = newState[action.type].flight
        newState[action.type] = { position }
        return newState
      }
    case RETURN_PIECE + 'blue':
      {
        let newState = {
          ...state,
        }
        let position = blueHangar
        newState[action.type] = { position }
        return newState
      }
    default:
      return state
  }
}