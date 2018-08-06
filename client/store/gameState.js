const initialState = {
  currentPlayer: 'red',
  playerQueue: ['yellow', 'blue', 'green'],
  dieResult: null
}

const NEW_TURN = 'NEW_TURN'
const REPEAT_TURN = 'REPEAT_TURN'
const DICE_ROLL = 'DICE_ROLL'

export const newTurn = () => ({
  type: NEW_TURN
})

export const repeatTurn = () => ({
  type: REPEAT_TURN
})

export const diceRoll = () => ({
  type: DICE_ROLL
})

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_TURN:
      return {
        ...state,
        currentPlayer: state.playerQueue[0],
        playerQueue: state.playerQueue.slice(1),
        dieResult: null
      }
    case REPEAT_TURN:
      return {
        ...state,
        playerQueue: [state.currentPlayer, ...state.playerQueue]
      }
    case DICE_ROLL:
      return {
        ...state,
        dieResult: Math.floor(Math.random() * 6) + 1
      }
    default:
      return state
  }
}