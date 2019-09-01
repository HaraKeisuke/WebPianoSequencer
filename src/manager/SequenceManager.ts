import { ScaleName, ConvertScaleNameFromString } from './../models/Scale';
import { Subject } from 'rx';
import { Midi } from '@tonejs/midi'
import { Note } from '@tonejs/midi/dist/Note'
import { TempoEvent } from '@tonejs/midi/dist/Header';
import AudioManager from './AudioManager';
import Scale from '../models/Scale';

export default class SequenceManager {
  public OnSequence: Subject<Scale> = new Subject<Scale>();

  private tempos: TempoEvent[] = [];
  private bpm: number = 120;
  private timer: any;
  private midi: Midi = new Midi();
  private sequenceNotes: Note[] = [];
  private playNotes: Note[] = [];
  private trackNum: number = 0;

  async load(path: string, trackNum: number = 0) {
    this.midi = await Midi.fromUrl(path);
    this.tempos = this.midi.header.tempos;
    this.playNotes = this.midi.tracks[trackNum].notes.sort((a, b) => { return a.ticks - b.ticks });
    this.sequenceNotes = Object.assign([], this.playNotes);
    this.trackNum = trackNum;
  }

  play() {
    let ctx = AudioManager.getInstance().ctx;
    let startTime = ctx.currentTime + 5; // 5秒バッファとして持っておく
    this.timer = setInterval(() => {
      let playTime = ctx.currentTime - startTime;
      if (this.tempos.length > 0 && this.tempos[0].ticks / 1000 < playTime) {
        this.bpm = this.tempos[0].bpm;
        this.tempos.shift();
      }
      if (this.sequenceNotes.length > 0 && ((this.sequenceNotes[0].ticks * (120 / this.bpm)) / 1000) - 5 < playTime) {
        this.OnSequence.onNext(new Scale(ConvertScaleNameFromString(this.sequenceNotes[0].pitch), this.sequenceNotes[0].octave));
        this.sequenceNotes.shift();
      }
      if (this.playNotes.length > 0 && (this.playNotes[0].ticks * (120 / this.bpm)) / 1000 < playTime) {
        AudioManager.getInstance().play(this.playNotes[0].pitch + this.playNotes[0].octave);
        this.playNotes.shift();
      }
    }, 30);
  }

  stop() {
    this.playNotes = this.midi.tracks[this.trackNum].notes.sort((a, b) => { return a.ticks - b.ticks });
    this.sequenceNotes = Object.assign([], this.playNotes);
    this.tempos = this.midi.header.tempos;
    clearInterval(this.timer);
    this.timer = null;
  }


  static Instance: SequenceManager;
  static getInstance(): SequenceManager {
    if (!this.Instance) {
      this.Instance = new SequenceManager();
    }
    return this.Instance;
  }
}
