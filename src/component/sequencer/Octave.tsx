import * as React from "react";
import Scale, { ScaleName } from "../../models/Scale";
import styled from "styled-components";
import AudioManager from "../../manager/AudioManager";
import Score from "./Score";


const Sequencer = (props: IProp) => {
  return (
    <Container>
      <Score scale={new Scale(ScaleName.C, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.Csharp, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.D, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.Dsharp, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.E, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.F, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.Fsharp, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.G, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.Gsharp, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.A, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.Asharp, props.octave)}></Score>
      <Score scale={new Scale(ScaleName.B, props.octave)}></Score>
    </Container>
  )
}


export default Sequencer;

interface IProp {
  children?: any;
  octave: number;
}

const BaseKey = styled.div`
`

const Container = styled(BaseKey)`
  display: flex;
  flex-wrap: wrap; 
  flex:1;
  width: 600px; 
  min-width: 400px;
  height: 100%;
  background-color:red;
`