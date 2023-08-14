export default function createContactPage() {
    const mainContent = document.createElement('div');

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = 'Contact';

    const mainBody = document.createElement('div');

    const subHeaderArray = ['Address', 'Hours', 'Contact'];
    const infoArray = ['123 Lorem Ipsum St', 'Mon - Sat, 10AM - 7PM', '(321) 444 555'];

    for (let i = 0; i < subHeaderArray.length; i++) {
        let mainBlock = document.createElement('div');

        let subHeader = document.createElement('h2');
        subHeader.textContent = subHeaderArray[i];

        let info = document.createElement('p');
        info.textContent = infoArray[i];

        mainBlock.appendChild(subHeader);
        mainBlock.appendChild(info);
        mainBody.appendChild(mainBlock);
        
    }

    mainContent.appendChild(mainHeader);
    mainContent.appendChild(mainBody);

    return mainContent;
}