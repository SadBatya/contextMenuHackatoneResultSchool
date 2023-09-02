import './styles.css'

import { ContextMenu } from './menu'
import { TestModule } from './modules/test.module'
import { RandomSoundModule } from './modules/random-sound.module'
import { RandomQuoteModule } from './modules/random-quote.module'

const contextMenu = new ContextMenu('#menu')

const addTestModule = new TestModule(
  'add_text_block',
  'Добавить тестовый блок с текстом'
)
const randomSoundModule = new RandomSoundModule('sound', 'Случайный звук')
const randomQuoteModule = new RandomQuoteModule('quote', 'Случайная цитата')

contextMenu.add(addTestModule)
contextMenu.add(randomSoundModule)
contextMenu.add(randomQuoteModule)

document.body.addEventListener('contextmenu', (event) => {
  contextMenu.showContextMenu(event)
})
