import createElement from '../../../utils/createElement';
import FooterSVG from './Footer-svg';

export default class Footer {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render(): void {
    const footer = createElement('footer', 'footer');
    const githubLinkFirst: HTMLLinkElement = createElement('a', 'github-link');
    githubLinkFirst.href = 'https://github.com/A-nastasi-a';
    githubLinkFirst.title = 'Visit Anastasia\'s Github';
    githubLinkFirst.innerHTML = FooterSVG.Github;

    const githubLinkSecond: HTMLLinkElement = createElement('a', 'github-link');
    githubLinkSecond.href = 'https://github.com/llallonen';
    githubLinkSecond.title = 'Visit Valeria\'s Github';
    githubLinkSecond.innerHTML = FooterSVG.Github;

    const githubLinkThird: HTMLLinkElement = createElement('a', 'github-link');
    githubLinkThird.href = 'https://github.com/amgSTRIDeR';
    githubLinkThird.title = 'Visit Aleksei\'s Github';
    githubLinkThird.innerHTML = FooterSVG.Github;

    const year = createElement('p', 'year-author');

    const RsLink: HTMLLinkElement = createElement('a', 'rsschool-link');
    RsLink.href = 'https://rs.school/js/';
    RsLink.title = 'Visit RSSchool\'s page';
    RsLink.innerHTML = FooterSVG.Rsschool;

    footer.appendChild(githubLinkFirst);
    footer.appendChild(githubLinkSecond);
    footer.appendChild(githubLinkThird);
    footer.appendChild(year);
    footer.appendChild(RsLink);

    this.container.append(footer);
  }
}
