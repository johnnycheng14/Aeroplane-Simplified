import React, {Component} from 'react'
import { connect } from 'react-redux'

class Board extends Component {
  render() {
    return (
      <div className='container'>
        <div className="green"><img src='./img/Circle.png' /></div>
        <div className="red"><img src='./img/Circle.png' /></div>
        <div className="yellow"><img src='./img/Circle.png' /></div>
        <div className="blue"><img src='./img/Circle.png' /></div>
        <div className="green"><img src='./img/Circle.png' /></div>
        <div className="red"><img src='./img/Circle.png' /></div>
        <div className="blue"><img src='./img/Circle.png' /></div>
        <div className="yellow"><img src='./img/Aeroplane-Yellow.png' /></div>
        <div className="yellow"><img src='./img/Aeroplane-Yellow.png' /></div>
        <div className="blue"><img src='./img/Star.png' /></div>
        <div className="blue"><img src='./img/Aeroplane-Blue.png' /></div>
        <div className="yellow"><img src='./img/Circle.png' /></div>
        <div className="yellow"><img src='./img/Circle.png' /></div>
        <div className="yellow"><img src='./img/Star.png' /></div>
        <div className="yellow"><img src='./img/Aeroplane-Yellow.png' /></div>
        <div className="blue"><img src='./img/Aeroplane-Blue.png' /></div>
        <div className="blue"><img src='./img/Aeroplane-Blue.png' /></div>
        <div className="blue"><img src='./img/Circle.png' /></div>
        <div className="red"><img src='./img/Circle.png' /></div>
        <div className="red"><img src='./img/Aeroplane-Red.png' /></div>
        <div className="red"><img src='./img/Aeroplane-Red.png' /></div>
        <div className="green"><img src='./img/Aeroplane-Green.png' /></div>
        <div className="green"><img src='./img/Star.png' /></div>
        <div className="green"><img src='./img/Circle.png' /></div>
        <div className="green"><img src='./img/Circle.png' /></div>
        <div className="red"><img src='./img/Aeroplane-Red.png' /></div>
        <div className="red"><img src='./img/Star.png' /></div>
        <div className="green"><img src='./img/Aeroplane-Green.png' /></div>
        <div className="green"><img src='./img/Aeroplane-Green.png' /></div>
        <div className="red"><img src='./img/Circle.png' /></div>
        <div className="blue"><img src='./img/Circle.png' /></div>
        <div className="yellow"><img src='./img/Circle.png' /></div>
        <div className="red"><img src='./img/Circle.png' /></div>
        <div className="green"><img src='./img/Circle.png' /></div>
        <div className="blue"><img src='./img/Circle.png' /></div>
        <div className="yellow"><img src='./img/Circle.png' /></div>
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