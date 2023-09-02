import './styles.css'

import { ContextMenu } from './menu';
import { TestModule } from './modules/test.module';

const contextMenu = new ContextMenu('#menu');

const addTestModule = new TestModule('add_text_block', 'Добваить тестовый блок с текстом');

contextMenu.add(addTestModule);

addTestModule.trigger = () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'тестовый текст';
    document.body.append(newParagraph);
}

document.body.addEventListener('contextmenu', (event) => {
    contextMenu.showContextMenu(event);
});
