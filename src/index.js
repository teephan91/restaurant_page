import createMainPage from './main_page';
import createContactPage from './contact_page';
import createMenuPage from './menu_page';

const primaryContent = document.getElementById('content');

primaryContent.appendChild(createMainPage());
primaryContent.appendChild(createMenuPage());
primaryContent.appendChild(createContactPage());