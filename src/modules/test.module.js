import {Module} from '../core/module';

export class TestModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    toHTML() {
        const menuItem = document.createElement('li');
        menuItem.className = 'menu-item';
        menuItem.dataset.type = this.type;
        menuItem.textContent = this.text;

        menuItem.addEventListener('click', () => this.trigger());

        return menuItem;
    }
}