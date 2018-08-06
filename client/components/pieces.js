import React, { Component } from 'react'
import { connect } from 'react-redux'
import { diceRoll, repeatTurn } from '../store/gameState'

class Piece extends Component {
  handleMove = () => {
    
  }

  handleDeploy = () => {

  }

  render() {
    let currentPlayer = this.props.currentPlayer + 'Player'
    let currentPiece = 'piece' + this.props.id

    return (
      <div className='piece-action'>
        <b>Piece {this.props.id}</b>
        {this.props[currentPlayer].undeployed.includes(currentPiece) ?
          <button onClick={this.handleDeploy} id='piece'>Deploy!</button> :
          <button onClick={this.handleMove} id='piece'>Move!</button>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  redPlayer: state.redPlayer,
  yellowPlayer: state.yellowPlayer,
  bluePlayer: state.bluePlayer,
  greenPlayer: state.greenPlayer,
  currentPlayer: state.gameState.currentPlayer,
  dieResult: state.gameState.dieResult
})

const mapDispatchToProps = dispatch => ({
  roll: () => dispatch(diceRoll()),
  repeat: () => dispatch(repeatTurn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Piece)