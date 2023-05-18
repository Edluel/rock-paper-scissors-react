import React, { useState } from 'react';
import Header from './components/header/Header';
import Game from './components/game/Game';

function App() {
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState('');

  return (
    <div className="App">
      <Header score={score} />
      <Game setChoice={setChoice} />
    </div>
  );
}

export default App;
