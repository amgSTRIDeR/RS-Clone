import createElement from '../../../utils/createe-element';
import FooterSVG from './Footer-svg';

export default class Footer {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render(): void {
    const footer = createElement(
      'footer',
      'px-[2vw]',
      'h-[8vh]',
      'min-h-16',
      'bg-base-100',
      'flex',
      'justify-around',
      'items-center',
    );
    footer.id = 'footer';

    const githubLinkFirst: HTMLLinkElement = createElement(
      'a',
      'w-[30px]',
      'fill-secondary',
      'hover:fill-primary-focus',
      'transition',
      'ease-in-out',
      'delay-50',
    );
    githubLinkFirst.href = 'https://github.com/A-nastasi-a';
    githubLinkFirst.title = "Visit Anastasia's Github";
    githubLinkFirst.innerHTML = FooterSVG.Github;

    const githubLinkSecond: HTMLLinkElement = createElement(
      'a',
      'w-[30px]',
      'fill-secondary',
      'hover:fill-primary-focus',
      'transition',
      'ease-in-out',
      'delay-50',
    );
    githubLinkSecond.href = 'https://github.com/llallonen';
    githubLinkSecond.title = "Visit Valeria's Github";
    githubLinkSecond.innerHTML = FooterSVG.Github;

    const githubLinkThird: HTMLLinkElement = createElement(
      'a',
      'w-[30px]',
      'fill-secondary',
      'hover:fill-primary-focus',
      'transition',
      'ease-in-out',
      'delay-50',
    );
    githubLinkThird.href = 'https://github.com/amgSTRIDeR';
    githubLinkThird.title = "Visit Aleksei's Github";
    githubLinkThird.innerHTML = FooterSVG.Github;

    const year = createElement('p', 'text-xl', 'text-secondary');
    year.textContent = '2023';

    const RsLink: HTMLLinkElement = createElement(
      'a',
      'w-[100px]',
      'fill-secondary',
      'hover:fill-primary-focus',
      'transition',
      'ease-in-out',
      'delay-50',
      'group',
    );
    RsLink.href = 'https://rs.school/js/';
    RsLink.title = "Visit RSSchool's page";
    RsLink.innerHTML = FooterSVG.Rsschool;

    footer.appendChild(githubLinkFirst);
    footer.appendChild(githubLinkSecond);
    footer.appendChild(githubLinkThird);
    footer.appendChild(year);
    footer.appendChild(RsLink);

    this.container.append(footer);
  }
}
