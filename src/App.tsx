import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Octave from './component/piano/Octave';
import AudioManager from './manager/AudioManager';

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
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Octave tone={4}/>
          <Octave tone={5}/>
        </div>
      </div>
    );
  }
}

export default App;
