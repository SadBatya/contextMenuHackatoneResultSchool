import { Module } from '../core/module';

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    function clicksCounter() {
      let clicks = -1;
      let time = 0.0;
      const restartButtonEvent = document.querySelector(`#restartButton`);
      const timeChanger = document.querySelector(`#timeInfo`);
      const clickChanger = document.querySelector(`#clicksInfo`);
      const html = document.querySelector(`html`);
      setInterval(() => {
        if (time < 4.99) {
          time += 0.01;
          timeChanger.textContent = `${time.toFixed(2)}`;
        }
      }, 10);
      setTimeout(() => {
        restartButtonEvent.hidden = false;
      }, 5000);
      html.addEventListener(`click`, () => {
        if (time < 4.99) {
          clicks++;
          clickChanger.textContent = `${clicks}`;
        }
      });
    }
    function addModal() {
      const hasModal = document.querySelector(`#counterModal`);
      if (!hasModal) {
        const body = document.querySelector(`body`);
        const table = document.createElement(`div`);
        table.id = `counterModal`;
        table.style.margin = `0 auto`;
        table.style.width = `184px`;
        table.style.height = `130px`;
        table.style.backgroundColor = `rgb(51,51,54)`;
        table.style.border = `2px solid rgb(170,170,170)`;
        table.style.borderRadius = `10px`;
        table.style.paddingLeft = `10px`;
        table.style.paddingTop = `6px`;
        table.style.paddingBottom = `12px`;
        table.style.fontFamily = `verdana`;
        table.style.fontSize = `30px`;
        table.style.color = `rgb(170,170,170)`;

        const timeContainer = document.createElement(`div`);
        timeContainer.textContent = `time `;
        timeContainer.style.display = `block`;
        timeContainer.style.textAlign = `left`;
        const timeInfo = document.createElement(`span`);
        timeInfo.id = `timeInfo`;
        timeInfo.textContent = `${0}`;
        timeInfo.style.paddingLeft = `14px`;
        timeContainer.append(timeInfo);

        const clicksContainer = document.createElement(`div`);
        clicksContainer.textContent = `clicks `;
        clicksContainer.style.display = `block`;
        clicksContainer.style.textAlign = `left`;
        const clicksInfo = document.createElement(`span`);
        clicksInfo.id = `clicksInfo`;
        clicksInfo.textContent = `${0}`;
        clicksContainer.append(clicksInfo);

        const restartButtonContainer = document.createElement(`div`);
        restartButtonContainer.style.display = `inline`;
        const restartButton = document.createElement(`button`);
        restartButton.hidden = true;
        restartButton.id = `restartButton`;
        restartButton.textContent = `restart`;
        restartButton.style.fontFamily = `verdana`;
        restartButton.style.fontSize = `18px`;
        restartButton.style.color = `rgb(170,170,170)`;
        restartButton.style.backgroundColor = `rgb(68,68,70)`;
        restartButton.style.border = `1px solid rgb(170,170,170)`;
        restartButton.style.borderRadius = `8px`;
        restartButton.style.width = `85px`;
        restartButton.style.height = `26px`;
        restartButtonContainer.append(restartButton);

        const closeButtonContainer = document.createElement(`div`);
        closeButtonContainer.style.display = `inline`;
        closeButtonContainer.style.paddingRight = `8px`;
        const closeButton = document.createElement(`button`);
        closeButton.id = `closeButton`;
        closeButton.textContent = `close`;
        closeButton.style.fontFamily = `verdana`;
        closeButton.style.fontSize = `18px`;
        closeButton.style.color = `rgb(170,170,170)`;
        closeButton.style.backgroundColor = `rgb(68,68,70)`;
        closeButton.style.border = `1px solid rgb(170,170,170)`;
        closeButton.style.borderRadius = `8px`;
        closeButton.style.width = `65px`;
        closeButton.style.height = `26px`;
        closeButtonContainer.append(closeButton);

        table.append(timeContainer);
        table.append(clicksContainer);
        table.append(closeButtonContainer);
        table.append(restartButtonContainer);
        body.append(table);

        const restartButtonEvent = document.querySelector(`#restartButton`);
        restartButtonEvent.addEventListener(`click`, () => {
          restartButtonEvent.hidden = true;
          clicksCounter();
        });

        const closeButtonEvent = document.querySelector(`#closeButton`);
        closeButtonEvent.addEventListener(`click`, () => {
          const modal = document.querySelector(`#counterModal`);
          modal.remove();
        });

        clicksCounter();
      }
    }
    addModal();
  }
}
