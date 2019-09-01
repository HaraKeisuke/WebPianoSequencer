import * as React from "react";
import Scale, { ScaleName } from "../../models/Scale";
import styled from "styled-components";
import AudioManager from "../../manager/AudioManager";
import Note from "./Note";
import SequenceManager from "../../manager/SequenceManager";


export default class Key extends React.Component<IProp> {
  state: IState = { notes: [], isActive: false };

  componentDidMount() {
    SequenceManager.getInstance().OnSequence.where(e => e.scale === this.props.scale.scale && e.octave === this.props.scale.octave).subscribe(this.OnNoteCreate.bind(this));
  }

  render() {
    const KeyComponent = this.props.scale.IsBlack() ? BlackKey : WhiteKey;

    return (
      <KeyComponent isActive={this.state.isActive} onClick={(e: any) => this.onClickKey(e)}>
        {this.state.notes.map((note) => {
          return <Note scale={this.props.scale} />
        })}
        {this.props.children}
      </KeyComponent>
    )
  }

  onClickKey(e: Event) {
    e.stopPropagation();
    AudioManager.getInstance().play(this.props.scale.scale.toString() + this.props.scale.octave.toString());
  }

  OnNoteCreate(scale: Scale) {
    const _notes = Object.assign([], this.state.notes);
    _notes.push(1);
    this.setState({ notes: _notes });
    setTimeout(() => {
      this.setState({ isActive: true });
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 500);
    }, 5000);
  }
}

interface IProp {
  scale: Scale;
  children?: any;
  width?: number;
}

interface IState {
  notes: number[];
  isActive: boolean;
}

const BaseKey = styled.div`
`

const WhiteKey = styled(BaseKey)`
  width: calc(100% / 7);
  height: 300px;
  box-sizing: border-box;
  background-color: ${(props: { isActive: boolean }) => props.isActive ? `#91fff6` : `white`};
  border: 1px solid black;
  position: relative;
`

const BlackKey = styled(BaseKey)`
  width: calc(150% / 2);
  height: 200px;
  position: absolute;
  background-color: ${(props: { isActive: boolean }) => props.isActive ? `#68777a` : `black`};
  background-color: black;
  left: calc(125%/2);
  z-index: 20;
`