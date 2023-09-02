import './styles.css'

import { ContextMenu } from './menu'
import { TestModule } from './modules/test.module'
import { RandomSoundModule } from './modules/random-sound.module'

const contextMenu = new ContextMenu('#menu')

const addTestModule = new TestModule(
  'add_text_block',
  'Добавить тестовый блок с текстом'
)
const randomSoundModule = new RandomSoundModule('sound', 'Случайный звук')
contextMenu.add(addTestModule)
contextMenu.add(randomSoundModule)

addTestModule.trigger = () => {
  const newParagraph = document.createElement('p')
  newParagraph.textContent = 'Тестовый текст'
  document.body.append(newParagraph)
}

document.body.addEventListener('contextmenu', (event) => {
  contextMenu.showContextMenu(event)
})
