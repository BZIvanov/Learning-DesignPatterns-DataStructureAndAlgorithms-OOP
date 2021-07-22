class Oven {
  on() {
    console.log('Turned oven on');
  }
  temperature(celsius) {
    console.log(`Oven temperature is ${celsius} celsius`);
  }
  off() {
    console.log('Turned oven off');
  }
}

class MusicPlayer {
  on() {
    console.log('Turned music player on');
  }
  playSong(song) {
    console.log(`Playing song: ${song}`);
  }
  off() {
    console.log('Turned music player off');
  }
}

class Lights {
  on() {
    console.log('Turned lights on');
  }
  off() {
    console.log('Turned lights off');
  }
}

class CookingFacade {
  constructor(oven, musicPlayer, lights) {
    this.oven = oven;
    this.musicPlayer = musicPlayer;
    this.lights = lights;
  }

  startCooking() {
    console.log('--- Starting to cook a cake ---');
    this.oven.on();
    this.oven.temperature(180);
    this.musicPlayer.on();
    this.musicPlayer.playSong('Some song');
    this.lights.on();
  }

  finishCooking() {
    console.log('--- Finish cooking ---');
    this.oven.temperature(0);
    this.oven.off();
    this.musicPlayer.off();
    this.lights.off();
    console.log('--- Cake is ready ---');
  }
}

const oven = new Oven();
const musicPlayer = new MusicPlayer();
const lights = new Lights();

const cooking = new CookingFacade(oven, musicPlayer, lights);
cooking.startCooking();
cooking.finishCooking();
