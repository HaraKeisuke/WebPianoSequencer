import * as React from "react";
import Scale, { ScaleName } from "../../models/Scale";
import styled from "styled-components";
import AudioManager from "../../manager/AudioManager";


const Sequencer = (props: IProp) => {
  return <Container></Container>
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
  padding: 20px;
  color: white;
`