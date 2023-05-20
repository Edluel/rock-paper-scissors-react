import React from 'react';
import './game.css';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import { useHistory } from "react-router-dom";

export default function Game(props) {
  const { setChoice } = props;
  const history = useHistory();

  const handleChoice = (choice) => {
    setChoice(choice);
    history.push('/res');
  };

  return (
    <div className="game">
      <div className="game-options">
        <div className='game-options-top'>
          <div className="game-options-paper" onClick={() => handleChoice('paper')}>
            <img src={paper} className="game-options-svg" alt="paper" />
          </div>
          <div className="game-options-scissors" onClick={() => handleChoice('scissors')}>
            <img src={scissors} className="game-options-svg" alt="scissors" />
          </div>
        </div>
        <div className='game-options-bot'>
          <div className="game-options-rock" onClick={() => handleChoice('rock')}>
            <img src={rock} className="game-options-svg" alt="rock" />
          </div>
        </div>
      </div>
    </div> 
  );
}
