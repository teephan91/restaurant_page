import createMainPage from './main_page';
import createContactPage from './contact_page';
import createMenuPage from './menu_page';

export default function createNavBar() {
    const mainContainer = document.getElementById('container');

    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav_bar');

    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id', 'home');
    homeBtn.textContent = 'Home';

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.textContent = 'Menu';

    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contact');
    contactBtn.textContent = 'Contact';

    const primaryContent = document.createElement('div');
    primaryContent.setAttribute('id', 'content');

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    mainContainer.appendChild(navBar);
    mainContainer.appendChild(primaryContent);
    
    primaryContent.appendChild(createMainPage());
    homeBtn.classList.add('underlined_btn');

    const allBtns = document.querySelectorAll('button');

    allBtns.forEach(btn => btn.classList.add('nav_btn'));

    allBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switch(btn.id) {
                case 'home':
                    menuBtn.classList.remove('underlined_btn');
                    contactBtn.classList.remove('underlined_btn');
                    primaryContent.innerHTML = '';
                    primaryContent.appendChild(createMainPage());
                    homeBtn.classList.add('underlined_btn');
                    break;
                case 'menu':
                    homeBtn.classList.remove('underlined_btn');
                    contactBtn.classList.remove('underlined_btn');
                    primaryContent.innerHTML = '';
                    primaryContent.appendChild(createMenuPage());
                    menuBtn.classList.add('underlined_btn');
                    break;
                case 'contact':
                    homeBtn.classList.remove('underlined_btn');
                    menuBtn.classList.remove('underlined_btn');
                    primaryContent.innerHTML = '';
                    primaryContent.appendChild(createContactPage());
                    contactBtn.classList.add('underlined_btn');
                    break;
            }
        });
    });
}