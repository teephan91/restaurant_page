import siteLogo from './logo.png';

export default function createMainPage() {
    const mainContent = document.createElement('div');
    
    const  mainLogo = new Image();
    mainLogo.src = siteLogo;
    mainLogo.style.width = '700px';
    mainLogo.style.height = 'auto';

    const mainTagline = document.createElement('p');
    mainTagline.textContent = "Exceptional Vietnamese Street Food";

    const mainPara = document.createElement('p');
    mainPara.textContent = "Est. 1995 - Saigon, Vietnam";

    mainContent.appendChild(mainLogo);
    mainContent.appendChild(mainTagline);
    mainContent.appendChild(mainPara);

    return mainContent;
}