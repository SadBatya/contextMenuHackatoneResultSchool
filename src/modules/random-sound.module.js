import { Module } from '../core/module';
import axios from 'axios';
import { random } from '../utils';

export class RandomSoundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const API_KEY = 'hfV48dljf325YW4yimpkf1AZvIChewksHyVrRgoQ';
    const query = 'sound';
    const url = `https://freesound.org/apiv2/search/text/?query=${query}&token=${API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        const results = response.data.results;
        const randomIndex = random(0, results.length - 1);
        const soundId = results[randomIndex].id;
        const soundUrl = `https://freesound.org/apiv2/sounds/${soundId}/?token=${API_KEY}`;
        axios.get(soundUrl).then((response) => {
          const audio = new Audio(response.data.previews['preview-lq-mp3']);
          audio.play();
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
