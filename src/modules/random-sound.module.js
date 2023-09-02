import { Module } from '../core/module'
import axios from 'axios'

export class RandomSoundModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    const API_KEY = 'hfV48dljf325YW4yimpkf1AZvIChewksHyVrRgoQ'
    const query = 'random'
    const url = `https://freesound.org/apiv2/search/text/?query=${query}&token=${API_KEY}`
    axios
      .get(url)
      .then((response) => {
        const results = response.data.results
        const randomIndex = Math.floor(Math.random() * results.length)
        const soundId = results[randomIndex].id
        const soundUrl = `https://freesound.org/apiv2/sounds/${soundId}/?token=${API_KEY}`
        axios.get(soundUrl).then((response) => {
          const audio = new Audio(response.data.previews['preview-lq-mp3'])
          audio.play()
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  toHTML() {
    const menuItem = document.createElement('li')
    menuItem.className = 'menu-item'
    menuItem.dataset.type = this.type
    menuItem.textContent = this.text

    return menuItem
  }
}
