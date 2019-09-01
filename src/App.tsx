import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Octave from './component/piano/Octave';
import AudioManager from './manager/AudioManager';
import Styled from "styled-components";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    AudioManager.getInstance().load();
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Keyboard>
          <Octave tone={3} />
          <Octave tone={4} />
          <Octave tone={5} />
          <Octave tone={6} />
        </Keyboard>
      </div>
    );
  }
}

export default App;


const Keyboard = Styled.div`
  display: flex;
  flexWrap: wrap; 
  height: 300px;
  width: 100%;
  overflow-x: auto;
`