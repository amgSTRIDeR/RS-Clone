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
      ['px-[2vw]', 'h-[60px]', 'bg-base-100', 'flex', 'justify-around', 'items-center', 'grow-0', 'basis-auto', 'shrink-0'],
      'footer',
    );

    const githubLinkFirst: HTMLLinkElement = createElement(
      'a',
      [
        'w-[30px]',
        'fill-secondary',
        'hover:fill-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
      ],
      '',
      FooterSVG.Github,
    );
    githubLinkFirst.href = 'https://github.com/A-nastasi-a';
    githubLinkFirst.title = "Visit Anastasia's Github";

    const githubLinkSecond: HTMLLinkElement = createElement(
      'a',
      [
        'w-[30px]',
        'fill-secondary',
        'hover:fill-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
      ],
      '',
      FooterSVG.Github,
    );
    githubLinkSecond.href = 'https://github.com/llallonen';
    githubLinkSecond.title = "Visit Valeria's Github";

    const githubLinkThird: HTMLLinkElement = createElement(
      'a',
      [
        'w-[30px]',
        'fill-secondary',
        'hover:fill-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
      ],
      '',
      FooterSVG.Github,
    );
    githubLinkThird.href = 'https://github.com/amgSTRIDeR';
    githubLinkThird.title = "Visit Aleksei's Github";

    const year = createElement('p', ['text-xl', 'text-secondary']);
    year.textContent = '2023';

    const RsLink: HTMLLinkElement = createElement(
      'a',
      [
        'w-[100px]',
        'fill-secondary',
        'hover:fill-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
        'group',
      ],
      '',
      FooterSVG.Rsschool,
    );
    RsLink.href = 'https://rs.school/js/';
    RsLink.title = "Visit RSSchool's page";

    footer.appendChild(githubLinkFirst);
    footer.appendChild(githubLinkSecond);
    footer.appendChild(githubLinkThird);
    footer.appendChild(year);
    footer.appendChild(RsLink);

    this.container.append(footer);
  }
}
