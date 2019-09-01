export default class Scale {
  constructor(public scale: ScaleName, public tone: number, public isBlack = false) { }
}

export enum ScaleName {
  C = "C", Csharp = "C#", D = "D", Dsharp = "D#", E = "E", F = "F", Fsharp = "F#", G = "G", Gsharp = "G#", A = "A", Asharp = "A#", B = "B"
}
