import { Module } from '../core/module';

export class CreativeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const imgCat = document.createElement('img');
    const cat4Me = document.createElement('p');
    const poop = document.createElement('img');
    const winText = document.createElement('p');

    imgCat.style.width = '250px';
    imgCat.style.display = 'block';
    imgCat.style.margin = '0 auto';
    imgCat.style.cursor = 'pointer';
    imgCat.src =
      'https://img.freepik.com/free-vector/hand-drawn-cat-outline-illustration_23-2149277847.jpg?w=1060&t=st=1693663642~exp=1693664242~hmac=bf29cd984349e278a2e3101acd0deabed367f8c603ddfaa476e288b65ea1b8a4';
    document.body.append(imgCat);

    cat4Me.style.textAlign = 'center';
    cat4Me.textContent = 'Погладь кота...';
    cat4Me.style.fontFamily = 'Roboto';
    cat4Me.style.fontSize = '25px';
    document.body.append(cat4Me);

    imgCat.addEventListener('click', () => {
      imgCat.style.display = 'none';
      cat4Me.style.display = 'none';
      poop.style.width = '250px';
      poop.style.display = 'block';
      poop.style.margin = '0 auto';

      poop.src =
        'https://img.freepik.com/premium-vector/poop-poo-piece-shit-dog-poop-pet-poo-flat-cartoon-vector_419256-1361.jpg?w=1060';
      document.body.append(poop);

      winText.style.textAlign = 'center';
      winText.textContent = 'ты меня испугал, ня...';
      winText.style.fontFamily = 'Roboto';
      winText.style.fontSize = '25px';
      winText.style.color = 'brown';
      document.body.append(winText);

      setTimeout(() => {
        winText.style.display = 'none';
        poop.style.display = 'none';
      }, 3000);
    });
  }
}
