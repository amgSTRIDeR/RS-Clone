import createElement from '../../../utils/createe-element';

export default class Start {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public render(): void {
    const startWrapper = createElement(
      'div',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'h-fit',
      'gap-y-[5vw]',
    );

    const startHeader = createElement('h1', 'text-4xl', 'text-center', 'text-primary-focus');
    startHeader.textContent = 'Trello brings all your tasks, teammates, and tools together';
    startWrapper.appendChild(startHeader);

    const startText = createElement('p', 'text-2xl', 'text-center', 'text-primary');
    startText.textContent = 'Keep everything in the same place - even if your team isn’t.';
    startWrapper.appendChild(startText);

    const signupButton = createElement(
      'button',
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
    );
    signupButton.id = 'button-signup';
    signupButton.textContent = 'Sign up';

    const videoButton = createElement(
      'button',
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
    );
    videoButton.id = 'button-video';
    videoButton.textContent = 'Watch video';

    const startButtonsWrapper = createElement(
      'div',
      'flex',
      'justify-center',
      'w-full',
      'gap-x-[10px]',
    );
    startButtonsWrapper.appendChild(signupButton);
    startButtonsWrapper.appendChild(videoButton);
    startWrapper.appendChild(startButtonsWrapper);

    const startImage = createElement('img', 'w-[50vw]', 'max-w-[600px]') as HTMLImageElement;
    startImage.src = 'https://wac-cdn.atlassian.com/dam/jcr:015eb45b-2d77-4dc9-961e-b2fdc1843da0/Jira.svg?cdnVersion=755';

    const mainElement = createElement(
      'main',
      'flex',
      'md:flex-row',
      'flex-col',
      'justify-around',
      'items-center',
      'p-[1vw]',
      'min-h-[450px]',
      'h-[84vh]',
      'gap-y-[10px]',
    );
    mainElement.id = 'main';
    mainElement.appendChild(startWrapper);
    mainElement.appendChild(startImage);

    this.container.append(mainElement);
  }
}
