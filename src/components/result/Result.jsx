import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Result(props) {
  const { choice, score, setScore } = props;
  const history = useHistory();
  const [house, setHouse] = useState('');

  useEffect(() => {
    const randomHouse = randomChoice();
    setHouse(randomHouse);

    const result = results[choice][randomHouse];
    if (result === 'YOU WIN!') {
      setScore(score + 1);
    }
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
    <div>
      <p>You picked: {choice}</p>
      <p>The house picked: {house}</p>
      <p>The result is: {results[choice][house]}</p>

      <button onClick={handlePlayAgain}>PLAY AGAIN</button>
    </div>
  );
}
