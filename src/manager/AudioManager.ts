import SoundFont from "soundfont-player";

export default class AudioManager {
  ctx: {
    new(contextOptions?: AudioContextOptions | undefined): AudioContext;
    prototype: AudioContext;
  } = new _window.AudioContext();

  private piano: any;

  load() {
    SoundFont.instrument(this.ctx, 'acoustic_grand_piano').then((piano) => {
      this.piano = piano as SoundFont.Player;
    });
  }

  play(note: string) {
    this.piano.play(note);
  }

  static Instance: AudioManager;
  static getInstance(): AudioManager {
    if (!this.Instance) {
      this.Instance = new AudioManager();
    }
    return this.Instance;
  }
}

let _window = window as any;
_window.AudioContext = _window.AudioContext || _window.webkitAudioContext;