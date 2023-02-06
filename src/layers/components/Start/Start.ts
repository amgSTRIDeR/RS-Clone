import createElement from '../../../utils/createElement';

export default class Start {
  container: HTMLElement;

  constructor(
    container: HTMLElement,
  ) {
    this.container = container;
  }

  public render(): void {
    const mainElement = createElement('main', 'start-page');

    const informationDiv = createElement('div', 'information');

    const informationHeader = createElement('h1', 'information__header');
    informationHeader.textContent = 'Trello brings all your tasks, teammates, and tools together';

    const informationText = createElement('p', 'information__text');
    informationText.textContent = 'Keep everything in the same place—even if your team isn’t.';

    const informationSignupButton = createElement('button', 'information__signup-button');
    informationSignupButton.textContent = 'Sign up';

    const informationVideoButton = createElement('button', 'information__video-button');
    informationVideoButton.textContent = 'Video';

    informationDiv.appendChild(informationHeader);
    informationDiv.appendChild(informationText);
    informationDiv.appendChild(informationSignupButton);
    informationDiv.appendChild(informationVideoButton);

    const image: HTMLImageElement = createElement('img', 'start-image');
    image.src = 'https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=2280&fm=webp';

    mainElement.appendChild(informationDiv);
    mainElement.appendChild(image);

    this.container.append(mainElement);
  }
}
