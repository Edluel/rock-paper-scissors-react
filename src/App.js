import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Game from './components/game/Game';
import Result from './components/result/Result';
import Guide from './components/guide/Guide';

function App() {
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState('string');


  return (
    <Router>
      <div className="App">
        <Header score={score} />
        <div>
          <Switch>
            <Route exact path="/">
              <Game setChoice={setChoice} />
            </Route>
            <Route exact path="/res">
              <Result choice={choice} score={score} setScore={setScore} />
            </Route>
          </Switch>
        </div>
      </div>
      <Guide />
    </Router>
  );
}

export default App;
