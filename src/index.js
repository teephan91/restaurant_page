import createMainPage from './main_page';
import createContactPage from './contact_page';

const primaryContent = document.getElementById('content');

primaryContent.appendChild(createMainPage());
primaryContent.appendChild(createContactPage());