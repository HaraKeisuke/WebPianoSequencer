import * as React from "react";
import Key from './Key';
import Scale, { ScaleName } from "../../models/Scale";

const Octave = (props: IProp) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: 500 }}>
      <Key scale={new Scale(ScaleName.C, props.tone)}>
        <Key scale={new Scale(ScaleName.Csharp, props.tone, true)} />
      </Key>
      <Key scale={new Scale(ScaleName.D, props.tone)} >
        <Key scale={new Scale(ScaleName.Dsharp, props.tone, true)} />
      </Key>
      <Key scale={new Scale(ScaleName.E, props.tone)} />
      <Key scale={new Scale(ScaleName.F, props.tone)} >
        <Key scale={new Scale(ScaleName.Fsharp, props.tone, true)} />
      </Key>
      <Key scale={new Scale(ScaleName.G, props.tone)}>
        <Key scale={new Scale(ScaleName.Gsharp, props.tone, true)} />
      </Key>
      <Key scale={new Scale(ScaleName.A, props.tone)} >
        <Key scale={new Scale(ScaleName.Asharp, props.tone, true)} />
      </Key>
      <Key scale={new Scale(ScaleName.B, props.tone)} />
    </div>
  )
}
export default Octave;

interface IProp {
  tone: number
}