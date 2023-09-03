import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.menuItems = [];
    this.menu = null;
    this.createMenu();
  }

  createMenu() {
    this.menu = document.querySelector('#menu');
  }

  open() {
    this.menu.classList.add('open');
  }

  close() {
    this.menu.classList.remove('open');
  }

  add(module) {
    this.menuItems.push(module);
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');
    menuItem.dataset.type = module.type;
    if (module.render) {
      menuItem.append(module.render());
    } else {
      menuItem.textContent = module.text;
    }
    menuItem.addEventListener('click', (event) => {
      const target = event.target;
      if (
        !(
          target.innerHTML === '60s' ||
          target.innerHTML === '30s' ||
          target.innerHTML === '15s'
        )
      ) {
        module.trigger();
      }
      this.close();
    });
    this.menu.append(menuItem);
  }

  showContextMenu(event) {
    event.preventDefault();
    const userScreenX = event.view.innerWidth;
    const userScreenY = event.view.innerHeight;
    const pointOfClickX = event.clientX;
    const pointOfClickY = event.clientY;
    const menuWidth = this.menu.offsetWidth;
    const menuHeight = this.menu.offsetHeight;

    console.log('menu height', menuHeight);
    console.log('menu width', menuWidth);

    if (pointOfClickX + menuWidth > userScreenX) {
      this.menu.style.left = `${pointOfClickX - menuWidth}px`;
    } else {
      this.menu.style.left = `${pointOfClickX}px`;
    }

    if (pointOfClickY + menuHeight > userScreenY) {
      this.menu.style.top = `${pointOfClickY - menuHeight}px`;
    } else {
      this.menu.style.top = `${pointOfClickY}px`;
    }
    this.open();
  }
}
