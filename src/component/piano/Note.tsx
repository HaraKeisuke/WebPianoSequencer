import * as React from "react";
import Scale, { ScaleName } from "../../models/Scale";
import styled from "styled-components";
import AudioManager from "../../manager/AudioManager";
import SequenceManager from "../../manager/SequenceManager";

export default class Note extends React.Component<IProp>{
  state = { isStarted: false, height: 100 };

  componentDidMount() {
    this.setState({ isStarted: true, height: document.body.scrollHeight - 300 });
  }

  render() {
    return (
      <Container className={this.state.isStarted ? "isStarted" : ""} height={this.state.height} />
    )
  }

}

interface IProp {
  scale: Scale;
  children?: any;
  width?: number;
}

const Container = styled.div`
  position:absolute;
  background-color: white;
  width: 30px;
  height: 10px;
  border-radius: 15px;
  transition-duration:5s;
  transition-timing-function: linear;
  top: calc(-100vh + 400px);
  &.isStarted {
    transform: ${(props: { height: number }) => `translateY(${props.height}px)`};
  }
`
