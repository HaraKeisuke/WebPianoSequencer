import * as React from 'react';
import Octave from './component/piano/Octave';
import AudioManager from './manager/AudioManager';
import Styled from "styled-components";
import Sequencer from './component/sequencer/Sequencer';
import MidiManager from './manager/SequenceManager';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    AudioManager.getInstance().load();
    MidiManager.getInstance().load("/WebPianoSequencer/menuett.mid", 2).then(() => {
      MidiManager.getInstance().play();
    });
  }

  public render() {
    return (
      <div className="App">
        {/* <Sequencer /> */}
        <Keyboard>
          <Octave octave={3} />
          <Octave octave={4} />
          <Octave octave={5} />
          <Octave octave={6} />
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
  background-color: #222;
  padding-top: calc(100vh - 400px);
  width: 100%;
  overflow-x: auto;
`