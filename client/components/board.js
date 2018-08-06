import React, { Component } from 'react'
import { connect } from 'react-redux'

class Board extends Component {
  boardDiv = (color, id) => {
    if (id === 'star') {
      return (
        <div className={color}><img src='./img/Star.png' /></div>
      )
    }
    else if (id === 'home3') {
      if (this.props[color + "Pieces"].undeployed.length > 2) {
        let capsColor = color[0].toUpperCase() + color.slice(1)
        return (
          <div className={color}><img src={`./img/Aeroplane-${capsColor}.png`} /></div>
        )
      }
      else {
        return <div className={color}><img src='./img/Circle.png' /></div>
      }
    }
    else if (id === 'home2') {
      if (this.props[color + "Pieces"].undeployed.length > 1) {
        let capsColor = color[0].toUpperCase() + color.slice(1)
        return (
          <div className={color}><img src={`./img/Aeroplane-${capsColor}.png`} /></div>
        )
      }
      else {
        return <div className={color}><img src='./img/Circle.png' /></div>
      }
    }
    else if (id === 'home1') {
      if (this.props[color + "Pieces"].undeployed.length > 0) {
        let capsColor = color[0].toUpperCase() + color.slice(1)
        return (
          <div className={color}><img src={`./img/Aeroplane-${capsColor}.png`} /></div>
        )
      }
      else {
        return (<div className={color}><img src='./img/Circle.png' /></div>)
      }
    }
    else {
      let pieceColor
      if (this.props.redPieces.piece1.position.id === id) {
        pieceColor = 'Red'
      }
      if (this.props.redPieces.piece2.position.id === id) {
        pieceColor = 'Red'
      }
      if (this.props.redPieces.piece3.position.id === id) {
        pieceColor = 'Red'
      }
      if (this.props.yellowPieces.piece1.position.id === id) {
        pieceColor = 'Yellow'
      }
      if (this.props.yellowPieces.piece2.position.id === id) {
        pieceColor = 'Yellow'
      }
      if (this.props.yellowPieces.piece3.position.id === id) {
        pieceColor = 'Yellow'
      }
      if (this.props.bluePieces.piece1.position.id === id) {
        pieceColor = 'Blue'
      }
      if (this.props.bluePieces.piece2.position.id === id) {
        pieceColor = 'Blue'
      }
      if (this.props.bluePieces.piece3.position.id === id) {
        pieceColor = 'Blue'
      }
      if (this.props.greenPieces.piece1.position.id === id) {
        pieceColor = 'Green'
      }
      if (this.props.greenPieces.piece2.position.id === id) {
        pieceColor = 'Green'
      }
      if (this.props.greenPieces.piece3.position.id === id) {
        pieceColor = 'Green'
      }
      return (
        <div className={color}>
          {pieceColor ?
            <img src={`./img/Aeroplane-${pieceColor}.png`} /> :
            <img src='./img/Circle.png' />
          }
        </div>)
    }
  }

  render() {
    return (
      <div className='container'>
        {this.boardDiv('green', 4)}
        {this.boardDiv('red', 5)}
        {this.boardDiv('yellow', 6)}
        {this.boardDiv('blue', 7)}
        {this.boardDiv('green', 8)}
        {this.boardDiv('red', 9)}
        {this.boardDiv('blue', 3)}
        {this.boardDiv('yellow', 'home1')}
        {this.boardDiv('yellow', 'home2')}
        {this.boardDiv('blue', 'star')}
        {this.boardDiv('blue', 'home1')}
        {this.boardDiv('yellow', 10)}
        {this.boardDiv('yellow', 2)}
        {this.boardDiv('yellow', 'star')}
        {this.boardDiv('yellow', 'home3')}
        {this.boardDiv('blue', 'home3')}
        {this.boardDiv('blue', 'home2')}
        {this.boardDiv('blue', 11)}
        {this.boardDiv('red', 1)}
        {this.boardDiv('red', 'home2')}
        {this.boardDiv('red', 'home3')}
        {this.boardDiv('green', 'home3')}
        {this.boardDiv('green', 'star')}
        {this.boardDiv('green', 12)}
        {this.boardDiv('green', 20)}
        {this.boardDiv('red', 'home1')}
        {this.boardDiv('red', 'star')}
        {this.boardDiv('green', 'home2')}
        {this.boardDiv('green', 'home1')}
        {this.boardDiv('red', 13)}
        {this.boardDiv('blue', 19)}
        {this.boardDiv('yellow', 18)}
        {this.boardDiv('red', 17)}
        {this.boardDiv('green', 16)}
        {this.boardDiv('blue', 15)}
        {this.boardDiv('yellow', 14)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  redPieces: state.redPlayer,
  yellowPieces: state.yellowPlayer,
  bluePieces: state.bluePlayer,
  greenPieces: state.greenPlayer
})

export default connect(mapStateToProps)(Board)