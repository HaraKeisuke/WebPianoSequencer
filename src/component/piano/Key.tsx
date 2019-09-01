import * as React from "react";
import Scale, { ScaleName } from "../../models/Scale";
import styled from "styled-components";
import AudioManager from "../../manager/AudioManager";


const Key = (props: IProp) => {
  const action = (e: any) => onClickKey(e, props.scale);

  return props.scale.isBlack ? <BlackKey onClick={action} /> : (<WhiteKey onClick={action}>{props.children}</WhiteKey>)
}

const onClickKey = (e: Event, scale: Scale) => {
  e.stopPropagation();
  AudioManager.getInstance().play(scale.scale.toString() + scale.tone.toString());
}

export default Key;

interface IProp {
  scale: Scale;
  children?: any;
  width?: number;
}

const BaseKey = styled.div`
`

const WhiteKey = styled(BaseKey)`
  width: calc(100% / 7);
  height: 300px;
  box-sizing: border-box;
  border: 1px solid black;
  position: relative;
`

const BlackKey = styled(BaseKey)`
  width: calc(150% / 2);
  height: 200px;
  position: absolute;
  background-color: black;
  left: calc(125%/2);
  z-index: 1;
`