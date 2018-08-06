import React, { Component } from 'react'
import { connect } from 'react-redux'
import { diceRoll, newTurn } from '../store/gameState'
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
        {this.props.dieResult ? 
          <div id='piece-action-container'>
            <Pieces id='1'/>
            <Pieces id='2'/>
            <Pieces id='3'/>
          </div> :
          <div style={{margin: 'auto'}}><b>Awaiting Refuel...</b></div>
        }
        {this.props.dieResult ? 
          <button onClick={this.props.pass} id='pass'><b>Pass</b></button> :
          <div />}
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
  pass: () => dispatch(newTurn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Action)