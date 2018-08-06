import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newTurn } from '../store/gameState'
import { deployPiece, movePiece, jumpPiece, returnPiece } from '../store/player'

class Piece extends Component {
  handleMove = () => {
    for(let i = 0; i < this.props.dieResult; i++){
      this.props.move(this.props.currentPlayer, this.props.id)
    }
    let position = this.props[currentPlayer + 'Player']['piece' + this.props.id].position
    if(position.color === this.props.currentPlayer){
      this.props.jump(this.props.currentPlayer, this.props.id)
    }
    this.props.nextTurn()
  }

  handleDeploy = () => {
    if(this.props.dieResult > 4){
      this.props.deploy(this.props.currentPlayer)
      this.props.nextTurn()
    }
  }

  deployButton = () => (
    <button onClick={this.handleDeploy} id='piece'>
      {this.props.dieResult > 4 ?
        "Deploy!" :
        "Fueling"
      }
    </button>
  )

  render() {
    let currentPlayer = this.props.currentPlayer + 'Player'
    let currentPiece = 'piece' + this.props.id

    return (
      <div className='piece-action'>
        <b>Piece {this.props.id}</b>
        {this.props[currentPlayer].undeployed.includes(currentPiece) ?
          this.deployButton() :
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
  deploy: player => dispatch(deployPiece(player)),
  move: (player, piece) => dispatch(movePiece(player, piece)),
  jump: (player, piece) => dispatch(jumpPiece(player, piece)),
  nextTurn: () => dispatch(newTurn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Piece)