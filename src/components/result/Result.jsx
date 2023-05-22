import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import './result.css'


export default function Result(props) {
  const { choice, score, setScore } = props;
  const history = useHistory();
  const [house, setHouse] = useState('');
  const [divP1, setDivP1] = useState('');
  const [svgP1, setSvgP1] = useState(null);
  const [divH, setDivH] = useState('');
  const [svgH, setSvgH] = useState(null);

  useEffect(() => {
    const randomHouse = randomChoice();
    setHouse(randomHouse);

    const result = results[choice][randomHouse];
    if (result === 'YOU WIN!') {
      setScore(score + 1);
    }

    setDivP1(choice);
    setDivH(randomHouse);

    if (choice === 'rock') {
      setSvgP1(rock);
    }
    else if (choice === 'paper') {
      setSvgP1(paper);
    }
    else { setSvgP1(scissors); }
    
    if (randomHouse === 'rock') {
      setSvgH(rock);
    }
    else if (randomHouse === 'paper') {
      setSvgH(paper);
    }
    else { setSvgH(scissors); }

  }, []);

  function randomChoice() {
    const items = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * items.length);
    return items[choice];
  }

  const results = {
    'rock': {
      'rock': 'DRAW!',
      'paper': 'YOU LOSE!',
      'scissors': 'YOU WIN!'
    },
    'paper': {
      'rock': 'YOU WIN!',
      'paper': 'DRAW!',
      'scissors': 'YOU LOSE!'
    },
    'scissors': {
      'rock': 'YOU LOSE!',
      'paper': 'YOU WIN!',
      'scissors': 'DRAW!'
    }
  };

  function handlePlayAgain() {
    history.push('/');
  }




  return (
    <div className="result">
      <div className="result-picked">
        <h3>YOU PICKED</h3>
        <div className={"result-picked-"+divP1}>
          <img src={svgP1} />
        </div>
      </div>

      <div className="result-text">
        <h2>{results[choice][house]}</h2>
        <button onClick={handlePlayAgain}>PLAY AGAIN</button>
      </div>

      <div className="result-picked">
        <h3>THE HOUSE PICKED</h3>
        <div className={"result-picked-"+divH}>
          <img src={svgH} />
        </div>
      </div>

    </div>
  );
}
