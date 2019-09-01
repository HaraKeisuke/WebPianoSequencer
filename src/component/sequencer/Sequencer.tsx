import * as React from "react";
import Scale, { ScaleName } from "../../models/Scale";
import styled from "styled-components";
import AudioManager from "../../manager/AudioManager";
import Octave from "./Octave";


const Sequencer = (props: IProp) => {
  return (
    <Container>
      {/* <Octave octave={3} />
      <Octave octave={4} />
      <Octave octave={5} />
      <Octave octave={6} /> */}
    </Container>
  )
}


export default Sequencer;

interface IProp {
  children?: any;
}

const BaseKey = styled.div`
`

const Container = styled(BaseKey)`
  background-color: #222;
  height: calc(100vh - 400px);
  display: flex;
  flex-wrap: wrap; 
  width: 100%;
  overflow-x: auto;
`