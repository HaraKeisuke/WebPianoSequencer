import * as React from "react";
import Key from './Key';
import Scale, { ScaleName } from "../../models/Scale";

const Octave = (props: IProp) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: 600, minWidth: 400, backgroundColor: "white" }}>
      <Key scale={new Scale(ScaleName.C, props.octave)}>
        <Key scale={new Scale(ScaleName.Csharp, props.octave)} />
      </Key>
      <Key scale={new Scale(ScaleName.D, props.octave)} >
        <Key scale={new Scale(ScaleName.Dsharp, props.octave)} />
      </Key>
      <Key scale={new Scale(ScaleName.E, props.octave)} />
      <Key scale={new Scale(ScaleName.F, props.octave)} >
        <Key scale={new Scale(ScaleName.Fsharp, props.octave)} />
      </Key>
      <Key scale={new Scale(ScaleName.G, props.octave)}>
        <Key scale={new Scale(ScaleName.Gsharp, props.octave)} />
      </Key>
      <Key scale={new Scale(ScaleName.A, props.octave)} >
        <Key scale={new Scale(ScaleName.Asharp, props.octave)} />
      </Key>
      <Key scale={new Scale(ScaleName.B, props.octave)} />
    </div>
  )
}
export default Octave;

interface IProp {
  octave: number
}