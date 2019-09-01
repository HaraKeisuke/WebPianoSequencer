import * as React from 'react';

import Octave from './component/piano/Octave';
import AudioManager from './manager/AudioManager';
import Styled from "styled-components";
import Sequencer from './component/sequencer/Sequencer';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    AudioManager.getInstance().load();
  }

  public render() {
    return (
      <div className="App">
        <Sequencer />
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