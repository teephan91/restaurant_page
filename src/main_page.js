export default function createMainPage() {
    const mainContent = document.createElement('div');
    
    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Lunch Lady";

    const mainTagline = document.createElement('p');
    mainTagline.textContent = "Exceptional Vietnamese Street Food";

    const mainPara = document.createElement('p');
    mainPara.textContent = "Est. 1995 - Saigon, Vietnam";

    mainContent.appendChild(mainHeader);
    mainContent.appendChild(mainTagline);
    mainContent.appendChild(mainPara);

    return mainContent;
}