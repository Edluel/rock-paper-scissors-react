import React from 'react'
import './game.css'
import paper from '../../assets/images/icon-paper.svg'
import rock from '../../assets/images/icon-rock.svg'
import scissors from '../../assets/images/icon-scissors.svg'


export default function Game(props) {
  const {setChoice} = props;

  return (
    <div className="game">
      <div className="game-options">
        <div className='game-options-top'>
          <div className="game-options-paper">
            <img src={paper} className="game-options-svg" />
          </div>
          <div className="game-options-scissors">
            <img src={scissors} className="game-options-svg" />
          </div>
        </div>
        <div className='game-options-bot'>
          <div className="game-options-rock">
            <img src={rock} className="game-options-svg" />
          </div>
        </div>
      </div>
    </div> 
  )
}
