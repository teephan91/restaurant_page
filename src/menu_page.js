export default function createMenuPage() {
    const mainContent = document.createElement('div');

    const mainHeader = document.createElement('h1');
    mainHeader.textContent = 'Menu';

    const mainBody = document.createElement('div');

    const subHeaderArray = ['Pho', 'Crispy Spring Rolls', 'Pork Skewers & Vermicelli', 'Grilled Pork & Rice', 'Three Layer Dessert', 'Vietnamese Iced Coffee'];
    const infoArray = ['Brisket, AAA Canadian rare beef, short plate, rice noodles, 24-hour beef broth', 
    'Pork, chili lime sauce, and vegetables', 
    'Char-grilled skewers of pork belly, vermicelli noodles, crispy spring roll',
    'Char-grilled pork collar, steamed rice, scallion oil, pork crackling, free-range fried egg',
    'Pandan sticky rice cake, housemade coconut and condensed milk gelato, red bean strawberry puree, mung bean streusel',
    'Intense Vietnamese coffee blended with sweet condensed milk'
    ];

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