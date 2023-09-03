import { Module } from '../core/module';
import { random } from './../utils';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  getRandomColor() {
    let red = random(0, 255);
    let green = random(0, 255);
    let blue = random(0, 255);
    return `rgba(${red}, ${green}, ${blue})`;
  }

  trigger() {
    const body = document.querySelector('body');
    body.style.background = this.getRandomColor();
  }
}
