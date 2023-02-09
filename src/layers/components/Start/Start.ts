import createElement from '../../../utils/createe-element';

export default class Start {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render(): void {
    const startInfoWrapper = createElement('div', [
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'h-fit',
      'gap-y-[5vw]',
    ]);

    const startHeader = createElement(
      'h1',
      ['text-4xl', 'text-center', 'text-primary-focus'],
      '',
      'Trello brings all your tasks, teammates, and tools together',
    );
    startInfoWrapper.appendChild(startHeader);

    const startText = createElement(
      'p',
      ['text-2xl', 'text-center', 'text-primary'],
      '',
      'Keep everything in the same place - even if your team isn’t.',
    );
    startInfoWrapper.appendChild(startText);

    const signupButton = createElement(
      'button',
      [
        'p-[10px]',
        'bg-secondary/10',
        'rounded',
        'text-primary',
        'border-2',
        'border-primary',
        'hover:text-secondary-focus',
        'hover:border-primary-focus',
        'hover:bg-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
      ],
      'button-signup',
      'Sign up',
    );

    const videoButton = createElement(
      'button',
      [
        'p-[10px]',
        'bg-secondary/10',
        'rounded',
        'text-primary',
        'border-2',
        'border-primary',
        'hover:text-secondary-focus',
        'hover:border-primary-focus',
        'hover:bg-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
      ],
      'button-video',
      'Watch video',
    );

    const startButtonsWrapper = createElement('div', [
      'flex',
      'justify-center',
      'w-full',
      'gap-x-[10px]',
    ]);
    startButtonsWrapper.appendChild(signupButton);
    startButtonsWrapper.appendChild(videoButton);
    startInfoWrapper.appendChild(startButtonsWrapper);

    const startImage = createElement('img', ['w-fit']) as HTMLImageElement;
    startImage.src = 'https://wac-cdn.atlassian.com/dam/jcr:015eb45b-2d77-4dc9-961e-b2fdc1843da0/Jira.svg?cdnVersion=755';

    const mainElement = createElement('main', [], 'main');
    const startWrapper = createElement('div', [
      'flex',
      'md:flex-row',
      'flex-col',
      'justify-around',
      'items-center',
      'p-[5vw]',
      'h-fit',
      'gap-y-[5vw]',
    ]);

    mainElement.appendChild(startWrapper);
    startWrapper.appendChild(startInfoWrapper);
    startWrapper.appendChild(startImage);

    this.container.append(mainElement);
  }
}
