import { Module } from '../core/module';
import { random } from './../utils';
export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  getRandomColor(){
    let red = random(0, 255)
    let green = random(0, 255)
    let blue = random(0, 255)
    return `rgba(${red}, ${green}, ${blue})` 
  }

  toHTML(){
    const body = document.querySelector('body')
    const menuItem = document.createElement('li');
    menuItem.className = 'menu-item';
    menuItem.dataset.type = this.type;
    menuItem.textContent = this.text;
    menuItem.addEventListener('click', () => this.trigger(
      body.style.background = this.getRandomColor()
    ));
    return menuItem;
  }

  changeBackgroundColor(){
    const body = document.querySelector('body')
    body.style.background = 'yellow'
  }
}
