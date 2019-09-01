export default class Scale {
  constructor(public scale: ScaleName, public octave: number) { }

  IsBlack(): boolean {
    if (this.scale == ScaleName.Csharp || this.scale == ScaleName.Dsharp || this.scale == ScaleName.Fsharp || this.scale == ScaleName.Gsharp || this.scale == ScaleName.Asharp) {
      return true
    }
    return false;
  }
}

export enum ScaleName {
  C = "C", Csharp = "C#", D = "D", Dsharp = "D#", E = "E", F = "F", Fsharp = "F#", G = "G", Gsharp = "G#", A = "A", Asharp = "A#", B = "B", None = "Nonel"
}


export const ConvertScaleNameFromString = (name: string): ScaleName => {
  switch (name) {
    case "C":
      return ScaleName.C;
    case "C#":
      return ScaleName.Csharp
    case "D":
      return ScaleName.D;
    case "D#":
      return ScaleName.Dsharp
    case "E":
      return ScaleName.E;
    case "F":
      return ScaleName.F
    case "F#":
      return ScaleName.Fsharp;
    case "G":
      return ScaleName.G
    case "G#":
      return ScaleName.Gsharp;
    case "A":
      return ScaleName.A;
    case "A#":
      return ScaleName.Asharp;
    case "B":
      return ScaleName.B;
    default:
      return ScaleName.None
  }
}
