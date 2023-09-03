import { Module } from '../core/module';
import axios from 'axios';

export class RandomQuoteModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const url = 'https://api.quotable.io/random';
    axios
      .get(url)
      .then((response) => {
        const quote = response.data.content;
        const author = response.data.author;
        alert(`${quote} - ${author}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
