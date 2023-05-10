import React, { useState } from 'react';
import Header from './components/header/Header';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} setScore={setScore} />
    </div>
  );
}

export default App;
