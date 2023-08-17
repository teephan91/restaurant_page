import createMainPage from './main_page';
import createContactPage from './contact_page';
import createMenuPage from './menu_page';
import ghLogo from './github_logo.png';

export default function createWebsite() {
    const body = document.querySelector('body');
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

    const footer = document.createElement('footer');
    
    const copyright = document.createElement('p');
    copyright.textContent = `© Thinh Phan, ${new Date().getFullYear()}`;

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/teephan91";
    githubLink.target = "_blank";

    const githubLogo = new Image();
    githubLogo.src = ghLogo;
    githubLogo.classList.add('github');

    githubLink.appendChild(githubLogo);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    body.appendChild(footer);
}
    