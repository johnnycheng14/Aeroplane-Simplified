const initialState = {
  currentPlayer: 'red',
  playerQueue: ['yellow', 'blue', 'green'],
  dieResult: null
}

const NEW_TURN = 'NEW_TURN'
const DICE_ROLL = 'DICE_ROLL'

export const newTurn = () => ({
  type: NEW_TURN
})

export const diceRoll = () => ({
  type: DICE_ROLL
})

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_TURN:
      if(state.dieResult === 6){
        return {
          ...state,
          dieResult: null
        }
      }
      else {
        return {
        ...state,
        currentPlayer: state.playerQueue[0],
        playerQueue: [...state.playerQueue.slice(1), state.currentPlayer],
        dieResult: null
        }
      }
    case DICE_ROLL:
      {let newState = {
        ...state,
        dieResult: Math.floor(Math.random() * 6) + 1
      }
      return newState}
    default:
      return state
  }
}