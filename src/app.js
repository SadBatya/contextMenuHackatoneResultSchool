import './styles.css'

import { ContextMenu } from './menu';
import { TestModule } from './modules/test.module';
import { BackgroundModule } from './modules/background.module';
import { TimerModule } from './modules/timer.module';

const contextMenu = new ContextMenu('#menu');
const addTestModule = new TestModule('add_text_block', 'Добавить тестовый блок с текстом');
const backgroundModule = new BackgroundModule('add_text_block', 'Изменить задний фон сайта')
const timerModule = new TimerModule('add_text_block', 'Таймер')

contextMenu.add(addTestModule);
contextMenu.add(backgroundModule)
contextMenu.add(timerModule)
addTestModule.trigger = () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'тестовый текст';
    document.body.append(newParagraph);
}

document.body.addEventListener('contextmenu', (event) => {
    contextMenu.showContextMenu(event);
});
