/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
import { boardHttp } from '../../../api/board';
import { userHttp } from '../../../api/user';
import createElement from '../../../utils/create-element';
import AuthenticateManager from '../../shared/authenticate-manager';
// eslint-disable-next-line import/no-cycle
import LoadingModal from '../loading-modal/loading-modal';
import NotificationMessage from '../notification-message/notification-message';

export default class BoardCreateModal {
  container: HTMLElement;

  imageUrl: string;

  participants: string[];

  authenticateManager = AuthenticateManager.getInstance();

  modalWrapper = createElement('div', [
    'fixed',
    'z-10',
    'inset-0',
    'overflow-y-auto',
    'backdrop-blur-sm',
    'bg-base-200/50',
    'flex',
    'items-center',
    'justify-center',
    'hidden',
  ]);

  constructor(container: HTMLElement) {
    this.container = container;
    this.imageUrl = '';
    this.participants = [];
  }

  async render() {
    const createWrapper = createElement('div', [
      'inline-block',
      'align-bottom',
      'bg-base-100',
      'rounded-lg',
      'text-left',
      'overflow-hidden',
      'shadow-xl',
      'transform',
      'transition-all',
      'sm:my-8',
      'sm:align-middle',
      'sm:max-w-lg',
      'sm:w-full',
    ]);

    const createButton = createElement('button', [
      'bg-primary',
      'hover:bg-primary-focus',
      'text-base-100',
      'hover:text-base-200',
      'font-bold',
      'py-2',
      'px-4',
      'rounded',
      'focus:outline-none',
      'focus:shadow-outline',
      'w-[50%]',
    ]) as HTMLButtonElement;

    const headerWrapper = createElement('div', ['bg-secondary', 'px-4', 'py-5', 'sm:px-6']);
    const header = createElement('h2', [
      'text-lg',
      'font-medium',
      'leading-6',
      'text-secondary-content',
    ]);
    header.setAttribute('data-i18n', 'createBoard');
    headerWrapper.appendChild(header);

    const createForm = createElement('form', [
      'px-4',
      'py-5',
      'sm:p-6',
      'bg-base-100',
      'text-base',
      'flex',
      'flex-col',
      'items-center',
    ]);

    const boardNameWrapper = createElement('div', ['mb-4']);
    const boardNameLabel = createElement('label', ['block', 'font-bold', 'mb-2']);
    boardNameLabel.setAttribute('for', 'boardName');
    boardNameLabel.setAttribute('data-i18n', 'boardName');
    const boardNameHint = createElement('p', [
      'font-bold',
      'text-accent-focus',
      'text-center',
      'mb-1',
      'opacity-0',
    ]);
    boardNameHint.setAttribute('data-i18n', 'boardCreateHint');
    const boardNameInput = createElement(
      'input',
      [
        'shadow',
        'appearance-none',
        'border',
        'rounded',
        'w-full',
        'py-2',
        'px-3',
        'text-primary',
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline',
        'mb-2',
      ],
      'boardName',
    ) as HTMLInputElement;
    boardNameInput.setAttribute('required', '');
    boardNameInput.setAttribute('type', 'boardName');
    boardNameInput.setAttribute('name', 'boardName');
    boardNameWrapper.appendChild(boardNameLabel);
    boardNameWrapper.appendChild(boardNameInput);
    boardNameWrapper.appendChild(boardNameHint);

    const boardDescriptionWrapper = createElement('div', ['mb-6']);
    const boardDescriptionLabel = createElement('label', ['block', 'font-bold', 'mb-2']);
    boardDescriptionLabel.setAttribute('for', 'boardDescription');
    boardDescriptionLabel.setAttribute('data-i18n', 'boardDescription');

    const boardDescriptionInput = createElement(
      'input',
      [
        'shadow',
        'appearance-none',
        'border',
        'rounded',
        'w-full',
        'py-2',
        'px-3',
        'text-primary',
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline',
        'mb-2',
      ],
      'boardDescription',
    ) as HTMLInputElement;
    boardDescriptionInput.setAttribute('type', 'boardDescription');
    boardDescriptionWrapper.appendChild(boardDescriptionLabel);
    boardDescriptionWrapper.appendChild(boardDescriptionInput);

    const mainWrapper = createElement('div', ['flex', 'justify-between']);
    const inputsWrapper = createElement('div', [
      'flex-col',
      'items-center',
      'justify-between',
      'w-[45%]',
    ]);
    mainWrapper.appendChild(inputsWrapper);

    const boardUserWrapper = createElement('div', ['mb-4']);
    const boardUserLabel = createElement('label', ['block', 'font-bold', 'mb-2']);
    boardUserLabel.setAttribute('for', 'usersAdd');
    boardUserLabel.setAttribute('data-i18n', 'usersAdd');
    const boardUserInput = createElement(
      'input',
      [
        'shadow',
        'appearance-none',
        'border',
        'rounded',
        'w-full',
        'py-2',
        'px-3',
        'text-primary',
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline',
        'mb-2',
      ],
      'usersAdd',
    ) as HTMLInputElement;

    boardUserInput.setAttribute('data-i18n-placeholder', 'search');

    const boardUsers = createElement('ul', ['max-h-32', 'overflow-y-scroll', 'flex', 'flex-col']);

    boardUserWrapper.appendChild(boardUserLabel);
    boardUserWrapper.appendChild(boardUserInput);
    boardUserWrapper.appendChild(boardUsers);
    mainWrapper.appendChild(boardUserWrapper);

    createButton.setAttribute('data-i18n', 'create');
    createButton.setAttribute('type', 'submit');

    inputsWrapper.appendChild(boardNameWrapper);
    inputsWrapper.appendChild(boardDescriptionWrapper);
    mainWrapper.prepend(inputsWrapper);
    createForm.appendChild(mainWrapper);

    const bgChooseWrapper = createElement('div', [
      'flex',
      'flex-col',
      'justify-around',
      'min-h-[160px]',
      'mb-[20px]',
    ]);
    const bgChooseWrapperTitle = createElement('span', [
      'bg-base-100',
      'text-base',
      'font-bold',
      'text-center',
    ]);
    bgChooseWrapperTitle.setAttribute('data-i18n', 'imagesWrapper');
    bgChooseWrapper.appendChild(bgChooseWrapperTitle);
    const imagesWrapper = createElement('div', [
      'flex',
      'flex-row',
      'items-center',
      'justify-between',
    ]);
    bgChooseWrapper.appendChild(imagesWrapper);

    const image1 = createElement('img', [
      'image-source',
      'w-[20%]',
      'object-fit',
      'rounded',
      'outline-3',
      'outline-primary',
      'hover:scale-105',
      'cursor-pointer',
      'transition',
      'ease',
      'delay-50',
      'border-2',
      'border-secondary',
    ]) as HTMLImageElement;
    image1.src =
      'https://wallpapers.com/images/high/el-matador-malibu-beach-cave-wh3devmo1md8f1j5.webp';
    const image2 = image1.cloneNode() as HTMLImageElement;
    image2.src =
      'https://wallpapers.com/images/high/enchanting-white-flowers-cottagecore-desktop-czpmy5vri8bcyuls.webp';
    const image3 = image1.cloneNode() as HTMLImageElement;
    image3.src = 'https://wallpapers.com/images/high/green-hills-sunrise-8knp2p6ehh38cnbr.webp';
    const image4 = image1.cloneNode() as HTMLImageElement;
    image4.src = 'https://wallpapers.com/images/hd/tesla-model-s-p85d-cars-25rb1ylm2bdukmab.webp';

    imagesWrapper.appendChild(image1);
    imagesWrapper.appendChild(image2);
    imagesWrapper.appendChild(image3);
    imagesWrapper.appendChild(image4);

    const urlInput = createElement('input', [
      'w-[100%]',
      'text-center',
      'rounded',
      'image-source-input',
      'outline-3',
      'outline-primary',
    ]) as HTMLInputElement;
    urlInput.setAttribute('data-i18n-placeholder', 'urlInput');

    bgChooseWrapper.appendChild(urlInput);
    createForm.appendChild(bgChooseWrapper);
    createForm.appendChild(createButton);

    createWrapper.appendChild(headerWrapper);
    createWrapper.appendChild(createForm);

    this.modalWrapper.appendChild(createWrapper);

    this.modalWrapper.addEventListener('click', (event) => {
      if (event.target === this.modalWrapper) {
        this.hide();
      }
    });

    bgChooseWrapper.addEventListener('click', (e) => {
      image1.classList.remove('outline');
      image2.classList.remove('outline');
      image3.classList.remove('outline');
      image4.classList.remove('outline');
      urlInput.classList.remove('outline');

      switch (e.target) {
        case image1:
        case image2:
        case image3:
        case image4:
          this.imageUrl = (e.target as HTMLImageElement).src;
          (e.target as HTMLElement).classList.add('outline');
          break;
        case urlInput:
          urlInput.addEventListener(
            'blur',
            () => {
              this.imageUrl = (e.target as HTMLInputElement).value;
            },
            { once: true },
          );
          (e.target as HTMLElement).classList.add('outline');
          break;
        default:
      }
    });

    this.container.appendChild(this.modalWrapper);

    const usersElementsArray = await this.setUsers(boardUsers);

    boardUserInput.addEventListener('input', () => {
      usersElementsArray.forEach((e) => {
        const userName: string = e.getAttribute('user-name') || '';
        if (userName.includes(boardUserInput.value)) {
          e.classList.remove('hidden');
        } else if (!e.classList.contains('bg-primary/50')) {
          e.classList.add('hidden');
        }
      });
    });

    usersElementsArray.forEach((e) => {
      e.addEventListener('click', () => {
        e.classList.toggle('bg-primary/50');
        e.classList.toggle('hover:bg-secondary/50');
        e.classList.toggle('order-first');

        const userId: string = e.getAttribute('user-id') || '';
        const index = this.participants.indexOf(userId);
        if (index === -1) {
          this.participants.push(userId);
        } else {
          this.participants.splice(index, 1);
        }
      });
    });

    createButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const nameRegex = /^.{3,20}$/;
      const imageUrlPattern = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
      if (!imageUrlPattern.test(this.imageUrl)) {
        this.imageUrl = '';
      }
      if (nameRegex.test(boardNameInput.value)) {
        LoadingModal.show();
        const date = new Date();

        await boardHttp
          .createBoard({
            name: `${boardNameInput.value}`,
            description: `${boardDescriptionInput.value}`,
            cards: [],
            date,
            imageURL: `${this.imageUrl}`,
            creator: `${this.authenticateManager.getId()}`,
            members: this.participants,
            columns: [],
            starred: false,
          })
          .then((resp) => {
            NotificationMessage.showNotification(`${Object.values(resp)}`);
            this.hide();
            window.location.hash = 'board';
            LoadingModal.hide();
            this.imageUrl = '';
            this.modalWrapper.innerHTML = '';
            this.render();
          })
          .catch((err) => {
            NotificationMessage.showNotification(`${Object.values(err)}: ${Object.values(err)}`);
          });
      } else {
        boardNameHint.classList.remove('opacity-0');
        setTimeout(() => {
          boardNameHint.classList.add('opacity-0');
        }, 3000);
      }
    });
  }

  async setUsers(boardUsers: HTMLElement) {
    const usersElementsArray: HTMLElement[] = [];
    const usersArray = await userHttp.getUsers();
    usersArray.forEach((e) => {
      const userLi = createElement('li', [
        'flex',
        'items-center',
        'py-2',
        'px-3',
        'hover:bg-secondary/50',
        'cursor-pointer',
        'hover:text-primary',
        'transition',
        'ease-in-out',
        'delay-50',
      ]);

      // eslint-disable-next-line no-underscore-dangle
      userLi.setAttribute('user-id', `${e._id}`);
      userLi.setAttribute('user-name', `${e.username}`);

      const userImage = createElement('div', [
        'rounded-full',
        'h-8',
        'w-8',
        'bg-primary/50',
        'mr-3',
      ]);

      const userName = createElement('div', ['flex-1']);
      userName.textContent = `${e.username}`;

      const copyElement = userLi.cloneNode();
      usersElementsArray.push(copyElement as HTMLElement);
      copyElement.appendChild(userImage);
      copyElement.appendChild(userName);
      boardUsers.appendChild(copyElement);
    });
    return usersElementsArray;
  }

  show() {
    this.modalWrapper.classList.remove('hidden');
  }

  hide() {
    this.modalWrapper.classList.add('hidden');
  }
}
