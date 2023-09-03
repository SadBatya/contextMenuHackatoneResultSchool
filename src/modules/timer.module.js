import { Module } from '../core/module';
import sound from '/assets/audio/song.mp3';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  render() {
    const divButtons = document.createElement('div');

    let button60m = document.createElement('button');
    button60m.innerHTML = '60s';

    let button30m = document.createElement('button');
    button30m.innerHTML = '30s';

    let button15m = document.createElement('button');
    button15m.innerHTML = '15s';

    divButtons.append(button60m);
    divButtons.append(button30m);
    divButtons.append(button15m);

    button60m.addEventListener('click', () => this.trigger(60));
    button30m.addEventListener('click', () => this.trigger(30));
    button15m.addEventListener('click', () => this.trigger(15));

    return divButtons;
  }

  soundOfTimerEnd() {
    const audio = new Audio(sound);
    audio.play();
  }

  timerIncrement(seconds, body) {
    let count = seconds;
    const timer = document.createElement('div');
    timer.className = 'timer';
    timer.style.margin = '0 auto';
    body.append(timer);
    const buttons = document.querySelectorAll('button');
    const interval = setInterval(() => {
      count--;
      timer.innerText = count + 's';
      if (count < 10) {
        timer.style.color = 'Gold';
      }
      if (count <= 0) {
        clearInterval(interval);
        timer.innerText = 'End';
        timer.style.color = 'OrangeRed';
        this.soundOfTimerEnd();
        buttons.forEach((button) => (button.disabled = false));
        setTimeout(() => {
          timer.remove();
        }, 2000);
      }
    }, 1000);
  }

  trigger(timeInSeconds) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => (button.disabled = true));
    const body = document.querySelector('body');
    this.timerIncrement(timeInSeconds, body);
  }
}
