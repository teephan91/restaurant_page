import ghLogo from './github_logo.png';

export default function createFooter() {
    const body = document.querySelector('body');
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