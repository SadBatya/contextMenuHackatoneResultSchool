import { Module } from '../core/module';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const body = document.querySelector(`body`);
    const isOpen = document.querySelector(`#clearButton`);
    if (!isOpen) {
      const clearButtonContainer = document.createElement(`div`);
      clearButtonContainer.style.display = `inline`;
      clearButtonContainer.style.paddingRight = `8px`;
      const clearButton = document.createElement(`button`);
      clearButton.id = `clearButton`;
      clearButton.textContent = `clear screen`;
      clearButton.style.fontFamily = `verdana`;
      clearButton.style.fontSize = `20px`;
      clearButton.style.color = `rgb(170,170,170)`;
      clearButton.style.backgroundColor = `rgb(68,68,70)`;
      clearButton.style.border = `1px solid rgb(170,170,170)`;
      clearButton.style.borderRadius = `8px`;
      clearButton.style.width = `150px`;
      clearButton.style.height = `40px`;
      clearButtonContainer.append(clearButton);
      body.append(clearButtonContainer);
    }

    function triangleUp() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `0px`;
      shape.style.height = `0px`;
      shape.style.borderLeft = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderRight = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderBottom = `${
        Math.floor(Math.random() * (125 - 50 + 1)) + 50
      }px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    function triangleDown() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `0px`;
      shape.style.height = `0px`;
      shape.style.borderLeft = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderRight = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderTop = `${
        Math.floor(Math.random() * (125 - 50 + 1)) + 50
      }px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    function triangleLeft() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `0px`;
      shape.style.height = `0px`;
      shape.style.borderBottom = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderTop = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderRight = `${
        Math.floor(Math.random() * (125 - 50 + 1)) + 50
      }px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    function triangleRight() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `0px`;
      shape.style.height = `0px`;
      shape.style.borderBottom = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderTop = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px solid transparent`;
      shape.style.borderLeft = `${
        Math.floor(Math.random() * (125 - 50 + 1)) + 50
      }px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    function square() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px`;
      shape.style.height = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px`;
      shape.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    function circle() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px`;
      shape.style.height = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px`;
      shape.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      shape.style.borderRadius = `50%`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    function trapezoid() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `${
        Math.floor(Math.random() * (150 - 25 + 1)) + 25
      }px`;
      shape.style.height = `0px`;
      shape.style.borderLeft = `${
        Math.floor(Math.random() * (100 - 15 + 1)) + 15
      }px solid transparent`;
      shape.style.borderRight = `${
        Math.floor(Math.random() * (100 - 15 + 1)) + 15
      }px solid transparent`;
      shape.style.borderBottom = `${
        Math.floor(Math.random() * (125 - 25 + 1)) + 25
      }px solid #${Math.floor(Math.random() * 16777215).toString(16)}`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    function parallelogram() {
      const shape = document.createElement(`div`);
      shape.id = `shapes`;
      shape.style.width = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px`;
      shape.style.height = `${
        Math.floor(Math.random() * (100 - 25 + 1)) + 25
      }px`;
      shape.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      shape.style.transform = `skew(${
        Math.floor(Math.random() * (50 - 10 + 1)) + 10
      }deg)`;
      shape.style.position = `absolute`;
      shape.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      shape.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
      return shape;
    }
    const shapeList = [
      triangleUp(),
      triangleDown(),
      triangleLeft(),
      triangleRight(),
      circle(),
      square(),
      trapezoid(),
      parallelogram(),
    ];
    body.append(shapeList[Math.floor(Math.random() * 7)]);

    const allShapes = document.querySelectorAll(`#shapes`);
    allShapes.forEach((shape) => {
      shape.addEventListener(`click`, (event) => {
        const { target } = event;
        target.remove();
        if (allShapes.length < 2) {
          const screenCleaner = document.querySelector(`#clearButton`);
          screenCleaner.remove();
        }
      });
    });

    const screenCleaner = document.querySelector(`#clearButton`);
    screenCleaner.addEventListener(`click`, () => {
      allShapes.forEach((shape) => {
        shape.remove();
      });
      screenCleaner.remove();
    });
  }
}
