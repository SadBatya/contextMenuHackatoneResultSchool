import { Module } from '../core/module'

export class TestModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  trigger() {
    const newParagraph = document.createElement('p')
    newParagraph.textContent = 'Тестовый текст'
    document.body.append(newParagraph)
  }
}
