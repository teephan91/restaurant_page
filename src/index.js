import createMainPage from './main_page';
import createContactPage from './contact_page';
import createMenuPage from './menu_page';

const navBar = document.getElementById('nav_bar');
const primaryContent = document.getElementById('content');

const homeBtn = document.createElement('button');
homeBtn.setAttribute('id', 'home');
homeBtn.textContent = 'Home';

const menuBtn = document.createElement('button');
menuBtn.setAttribute('id', 'menu');
menuBtn.textContent = 'Menu';

const contactBtn = document.createElement('button');
contactBtn.setAttribute('id', 'contact');
contactBtn.textContent = 'Contact';

navBar.appendChild(homeBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);
primaryContent.appendChild(createMainPage());

const allBtns = document.querySelectorAll('button');

allBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switch(btn.id) {
            case 'home':
                primaryContent.innerHTML = '';
                primaryContent.appendChild(createMainPage());
                break;
            case 'menu':
                primaryContent.innerHTML = '';
                primaryContent.appendChild(createMenuPage());
                break;
            case 'contact':
                primaryContent.innerHTML = '';
                primaryContent.appendChild(createContactPage());
                break;
        }
    });
});