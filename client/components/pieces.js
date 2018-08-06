import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newTurn } from '../store/gameState'
import { deployPiece, movePiece, jumpPiece, returnPiece } from '../store/player'

class Piece extends Component {
  handleMove = () => {
    for (let i = 0; i < this.props.dieResult; i++) {
      this.props.move(this.props.currentPlayer, this.props.id)
    }
    let position = this.props[this.props.currentPlayer + 'Player']['piece' + this.props.id].position
    console.log('newposition', position)
    let positionId = position.id + this.props.dieResult
    if(positionId > 20){
      positionId -= 20
    }
    this.checkReturn(positionId)
    if (position.color === this.props.currentPlayer) {
      this.props.jump(this.props.currentPlayer, this.props.id)
      let newPosition = this.props[this.props.currentPlayer + 'Player']['piece' + this.props.id].position
      this.checkReturn(newPosition)
    }
    this.props.nextTurn()
  }

  checkReturn = position => {
    let otherPlayers = ['red', 'yellow', 'blue', 'green'].filter(player => player !== this.props.currentPlayer)
    console.log(otherPlayers)
    otherPlayers.forEach(player => {
      console.log(this.props[player + 'Player'].piece1.position.id)
      console.log(position)
      if(this.props[player + 'Player'].piece1.position.id === position){
        this.props.return(player, 'piece1')      
      }
      if(this.props[player + 'Player'].piece2.position.id === position){
        this.props.return(player, 'piece2')      
      }
      if(this.props[player + 'Player'].piece3.position.id === position){
        this.props.return(player, 'piece3')      
      }
    })
  }

  handleDeploy = () => {
    if (this.props.dieResult > 4) {
      this.props.deploy(this.props.currentPlayer)
      let position = this.props[this.props.currentPlayer + 'Player']['piece' + this.props.id].position.next.id
      this.checkReturn(position)
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
  return: (player, piece) => dispatch(returnPiece(player, piece)),
  jump: (player, piece) => dispatch(jumpPiece(player, piece)),
  nextTurn: () => dispatch(newTurn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Piece)