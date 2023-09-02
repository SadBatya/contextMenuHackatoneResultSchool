import { Module } from '../core/module';

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  toHTML(){
    const menuItem = document.createElement('li');
    const divButtons = document.createElement('div')
    
    let button60m = document.createElement('button')
    button60m.innerHTML = '60m'

    let button30m = document.createElement('button')
    button30m.innerHTML = '30m'

    let button15m = document.createElement('button')
    button15m.innerHTML = '15m'


    menuItem.className = 'menu-item';
    menuItem.dataset.type = this.type;
    menuItem.textContent = this.text;
   
    divButtons.append(button60m)
    divButtons.append(button30m)
    divButtons.append(button15m)


    menuItem.append(divButtons)
    menuItem.addEventListener('click', () => this.trigger());
    return menuItem;
  }
}
