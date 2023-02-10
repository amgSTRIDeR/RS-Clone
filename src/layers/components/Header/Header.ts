import changeLang from '../../../utils/change-lang';
import changeTheme from '../../../utils/change-theme';
import createElement from '../../../utils/create-element';
import HeaderSVG from './Header-svg';

export default class Header {
  container: HTMLElement;

  theme: string;

  lang: string;

  isAuthenticated: boolean;

  constructor(
    container: HTMLElement,
    theme: string = 'corporate',
    lang: string = 'en',
    isAuthenticated: boolean = false,
  ) {
    this.container = container;
    this.theme = theme;
    this.lang = lang;
    this.isAuthenticated = isAuthenticated;
  }

  public render(): void {
    const header = createElement(
      'header',
      [
        'px-[2vw]',
        'h-[60px]',
        'bg-base-100',
        'sticky',
        'top-0',
        'flex',
        'flex-row',
        'justify-between',
        'items-center',
      ],
      'header',
      HeaderSVG.Logo,
    );

    if (this.isAuthenticated) {
      const searchWrapper = createElement('div', ['relative']);
      searchWrapper.innerHTML = HeaderSVG.MagnifyingGlass;
      const searchInput = createElement(
        'input',
        [
          'sm:bg-base-200',
          'text-primary',
          'rounded',
          'pr-[25px]',
          'text-center',
          'sm:static',
          'absolute',
          'sm:visible',
          'sm:static',
          'absolute',
          'invisible',
          'top-[50px]',
          'left-[-70px]',
          'bg-base-100',
          'placeholder:text-secondary',
        ],
        'search-input',
      ) as HTMLInputElement;
      searchInput.type = 'text';
      searchInput.setAttribute('data-i18n-placeholder', 'search');
      searchWrapper.appendChild(searchInput);
      header.appendChild(searchWrapper);
    }

    const navContainer = createElement(
      'div',
      ['flex', 'flex-col', 'items-end', 'justify-self-end', 'text-secondary'],
      'nav-container',
    );
    const navIcon = createElement(
      'div',
      ['h-12', 'w-12', 'p-2', 'group', 'md:hidden', 'cursor-pointer'],
      'nav-icon',
      HeaderSVG.Hamburger,
    );
    navIcon.setAttribute('data-i18n-title', 'navIcon');

    navContainer.appendChild(navIcon);
    const navMenu = createElement(
      'ul',
      [
        'hidden',
        'pr-3',
        'font-semibold',
        'text-xl',
        'text-right',
        'md:h-12',
        'md:flex',
        'md:flex-row',
        'md:items-center',
        'md:justify-end',
        'md:space-x-8',
        'gap-y-5',
        'md:static',
        'absolute',
        'top-[70px]',
        'right-[10px]',
        'backdrop-blur-md',
        'bg-neutral/10',
        'md:bg-neutral/0',
        'rounded',
        'flex',
        'flex-col-reverse',
        'items-center',
        'p-5',
      ],
      'nav-menu',
    );
    navIcon.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });

    if (this.isAuthenticated) {
      const navWorkspase = createElement(
        'li',
        [
          'text-lg',
          'text-secondary',
          'flex',
          'items-center',
          'h-[20px]',
          'cursor-pointer',
          'group',
          'hover:text-secondary-focus',
        ],
        'button-workspaces',
        `<span data-i18n='workspaces'></span>${HeaderSVG.ArrowDown}`,
      );
      navMenu.appendChild(navWorkspase);
      const navStarred = createElement(
        'li',
        [
          'text-lg',
          'text-secondary',
          'flex',
          'items-center',
          'h-[20px]',
          'cursor-pointer',
          'group',
          'hover:text-secondary-focus',
        ],
        'button-starred',
        `<span data-i18n='starred'></span>${HeaderSVG.ArrowDown}`,
      );
      navMenu.appendChild(navStarred);
    }

    const navThemes = createElement('li', ['fill-secondary', 'flex']);

    const buttonLight = createElement(
      'div',
      ['p-[3px]', 'w-[30px]', 'cursor-pointer'],
      'button-light',
      HeaderSVG.Light,
    );
    buttonLight.setAttribute('data-i18n-title', 'lightTheme');
    navThemes.appendChild(buttonLight);

    const buttonDark = createElement(
      'div',
      ['p-[3px]', 'w-[30px]', 'cursor-pointer'],
      'button-dark',
      HeaderSVG.Dark,
    );
    buttonDark.setAttribute('data-i18n-title', 'darkTheme');
    navThemes.appendChild(buttonDark);

    const buttonBlack = createElement(
      'div',
      ['p-[3px]', 'w-[30px]', 'cursor-pointer'],
      'button-black',
      HeaderSVG.Black,
    );
    buttonBlack.setAttribute('data-i18n-title', 'blackTheme');
    navThemes.appendChild(buttonBlack);

    switch (this.theme) {
      case 'autumn':
        buttonLight.classList.add('hover:fill-secondary-focus');
        buttonDark.classList.add('fill-primary');
        buttonBlack.classList.add('hover:fill-secondary-focus');
        this.container.setAttribute('data-theme', 'autumn');
        break;
      case 'night':
        buttonLight.classList.add('hover:fill-secondary-focus');
        buttonDark.classList.add('hover:fill-secondary-focus');
        buttonBlack.classList.add('fill-primary');
        this.container.setAttribute('data-theme', 'night');
        break;
      default:
        buttonLight.classList.add('fill-primary');
        buttonDark.classList.add('hover:fill-secondary-focus');
        buttonBlack.classList.add('hover:fill-secondary-focus');
        this.container.setAttribute('data-theme', 'corporate');
    }

    buttonLight.addEventListener('click', () => {
      changeTheme('corporate', this.container, buttonLight, buttonDark, buttonBlack);
    });

    buttonDark.addEventListener('click', () => {
      changeTheme('autumn', this.container, buttonDark, buttonLight, buttonBlack);
    });

    buttonBlack.addEventListener('click', () => {
      changeTheme('night', this.container, buttonBlack, buttonLight, buttonDark);
    });

    const navLang = createElement('li', ['text-secondary', 'flex']);

    const buttonEn = createElement('button', ['w-[30px]', 'cursor-pointer'], 'button-en', 'En');
    navLang.appendChild(buttonEn);

    const buttonRu = createElement('button', ['w-[30px]', 'cursor-pointer'], 'button-ru', 'Ru');
    navLang.appendChild(buttonRu);

    const buttonUk = createElement('button', ['w-[30px]', 'cursor-pointer'], 'button-uk', 'Uk');
    navLang.appendChild(buttonUk);

    navLang.addEventListener('click', (event) => {
      if (event.target instanceof HTMLButtonElement) {
        changeLang(event.target.id.split('-')[1], buttonRu, buttonEn, buttonUk);
      }
    });

    navMenu.appendChild(navThemes);
    navMenu.appendChild(navLang);
    navContainer.appendChild(navMenu);
    header.appendChild(navContainer);

    if (this.isAuthenticated) {
      const accountButton = createElement('div', [
        'rounded-full',
        'border-2',
        'border-primary',
        'w-[50px]',
        'h-[50px]',
        'hover:border-primary-focus',
        'cursor-pointer',
        'bg-secondary',
        'hover:bg-secondary-focus',
      ]);
      accountButton.setAttribute('data-i18n-title', 'accountInfo');
      header.appendChild(accountButton);
    } else {
      const loginButton = createElement('div');
      loginButton.title = 'Log In';
      loginButton.innerHTML = HeaderSVG.Login;
      header.appendChild(loginButton);
    }

    this.container.prepend(header);
    changeLang(this.lang, buttonRu, buttonEn, buttonUk);
  }
}
