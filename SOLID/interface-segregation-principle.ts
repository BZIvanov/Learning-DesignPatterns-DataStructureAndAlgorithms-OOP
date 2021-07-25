// --- THE WRONG WAY ---
// here we have fat interface containing many things and whoever implements it will most likely implement many unnecessary things
interface IVehicle {
  getSpeed(): number;
  getModel(): string;
  startEngine(): void;
  acelerate(): number;
  stopEngine(): void;
  isLightsOn(): boolean;
  isLightsOff(): boolean;
  startMusicPlayer(): void;
  playSong(song: string): void;
  stopMusicPlayer(): void;
}

// --- THE RIGHT WAY ---
// now whoeve is implementing small interface will need everything coming with the interface
interface IVehicle {
  getSpeed(): number;
  getModel(): string;
  isLightsOn(): boolean;
}

interface IEngine {
  start(): void;
  acelerate(): number;
  stop(): void;
}

interface ILights {
  isLightsOn(): boolean;
  isLightsOff(): boolean;
}

interface IMusicPlayer {
  startMusicPlayer(): void;
  playSong(song: string): void;
  stopMusicPlayer(): void;
}
