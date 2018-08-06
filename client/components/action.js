import React, { Component } from 'react'
import { connect } from 'react-redux'
import { diceRoll, repeatTurn } from '../store/gameState'
import Pieces from './pieces'

class Action extends Component {
  handleSubmit = () => {
    if (!this.props.dieResult) {
      this.props.roll()
    }
  }

  render() {
    return (
      <div id='player-action'>
        <h3>{this.props.player} player: {this.props.dieResult ? "make a move!" : "roll the die!"}</h3>
        <button onClick={this.handleSubmit} id='roll'>{this.props.dieResult ? this.props.dieResult : "0"}</button>
        <div id='piece-action-container'>
          <Pieces id='1'/>
          <Pieces id='2'/>
          <Pieces id='3'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  player: state.gameState.currentPlayer,
  dieResult: state.gameState.dieResult
})

const mapDispatchToProps = dispatch => ({
  roll: () => dispatch(diceRoll()),
  repeat: () => dispatch(repeatTurn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Action)