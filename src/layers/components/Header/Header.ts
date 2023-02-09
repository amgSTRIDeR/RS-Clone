import changeTheme from '../../../utils/change-theme';
import createElement from '../../../utils/createe-element';
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
      'px-[2vw]',
      'h-[8vh]',
      'min-h-16',
      'bg-base-100',
      'sticky',
      'top-0',
      'flex',
      'flex-row',
      'justify-between',
      'items-center',
    );
    header.id = 'header';
    header.insertAdjacentHTML('afterbegin', HeaderSVG.Logo);

    if (this.isAuthenticated) {
      const searchWrapper = createElement('div', 'relative');
      searchWrapper.innerHTML = HeaderSVG.MagnifyingGlass;
      const searchInput = createElement(
        'input',
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
      ) as HTMLInputElement;
      searchInput.id = 'search-input';
      searchInput.type = 'text';
      searchInput.placeholder = 'Search';
      searchWrapper.appendChild(searchInput);
      header.appendChild(searchWrapper);
    }

    const navContainer = createElement(
      'div',
      'flex',
      'flex-col',
      'items-end',
      'justify-self-end',
      'text-secondary',
    );
    navContainer.id = 'nav-container';
    const navIcon = createElement(
      'div',
      'h-12',
      'w-12',
      'p-2',
      'group',
      'md:hidden',
      'cursor-pointer',
    );
    navIcon.id = 'nav-icon';
    navIcon.innerHTML = HeaderSVG.Hamburger;
    navContainer.appendChild(navIcon);
    const navMenu = createElement(
      'ul',
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
    );
    navMenu.id = 'nav-menu';

    if (this.isAuthenticated) {
      const navWorkspase = createElement(
        'li',
        'text-lg',
        'text-secondary',
        'flex',
        'items-center',
        'h-[20px]',
        'cursor-pointer',
        'group',
        'hover:text-secondary-focus',
      );
      navWorkspase.id = 'button-workspaces';
      navWorkspase.innerHTML = `Workspaces${HeaderSVG.ArrowDown}`;
      navMenu.appendChild(navWorkspase);

      const navStarred = createElement(
        'li',
        'text-lg',
        'text-secondary',
        'flex',
        'items-center',
        'h-[20px]',
        'cursor-pointer',
        'group',
        'hover:text-secondary-focus',
      );
      navStarred.id = 'button-starred';
      navStarred.innerHTML = `Starred${HeaderSVG.ArrowDown}`;
      navMenu.appendChild(navStarred);
    }

    const navThemes = createElement('li', 'fill-secondary', 'flex');

    const buttonLight = createElement('div', 'p-[3px]', 'w-[30px]', 'cursor-pointer');
    buttonLight.id = 'button-light';
    buttonLight.innerHTML = HeaderSVG.Light;
    navThemes.appendChild(buttonLight);

    const buttonDark = createElement('div', 'p-[3px]', 'w-[30px]', 'cursor-pointer');
    buttonDark.id = 'button-dark';
    buttonDark.innerHTML = HeaderSVG.Dark;
    navThemes.appendChild(buttonDark);

    const buttonBlack = createElement('div', 'p-[3px]', 'w-[30px]', 'cursor-pointer');
    buttonBlack.id = 'button-black';
    buttonBlack.innerHTML = HeaderSVG.Black;
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

    const navLang = createElement('li', 'fill-secondary', 'flex');

    const buttonEn = createElement('div', 'w-[40px]', 'cursor-pointer');
    buttonEn.id = 'button-en';
    buttonEn.innerHTML = HeaderSVG.En;
    navLang.appendChild(buttonEn);

    const buttonRu = createElement('div', 'w-[40px]', 'cursor-pointer');
    buttonRu.id = 'button-en';
    buttonRu.innerHTML = HeaderSVG.Ru;
    navLang.appendChild(buttonRu);

    switch (this.lang) {
      case 'ru':
        buttonEn.classList.add('hover:fill-secondary-focus');
        buttonRu.classList.add('fill-primary');
        break;
      default:
        buttonEn.classList.add('fill-primary');
        buttonRu.classList.add('hover:fill-secondary-focus');
    }

    navMenu.appendChild(navThemes);
    navMenu.appendChild(navLang);
    navContainer.appendChild(navMenu);
    header.appendChild(navContainer);

    if (this.isAuthenticated) {
      const accountButton = createElement(
        'div',
        'rounded-full',
        'border-2',
        'border-primary',
        'w-[50px]',
        'h-[50px]',
        'hover:border-primary-focus',
        'cursor-pointer',
        'bg-secondary',
        'hover:bg-secondary-focus',
      );
      accountButton.title = 'Account info';
      header.appendChild(accountButton);
    } else {
      const loginButton = createElement('div');
      loginButton.title = 'Log In';
      loginButton.innerHTML = HeaderSVG.Login;
      header.appendChild(loginButton);
    }

    this.container.append(header);
  }
}
