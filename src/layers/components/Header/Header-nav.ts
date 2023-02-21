import changeLang from '../../../utils/change-lang';
import changeTheme from '../../../utils/change-theme';
import createElement from '../../../utils/create-element';
import AuthenticateManager from '../../shared/authenticate-manager';
import LanguageManager from '../../shared/language-manager';
import ThemeManager from '../../shared/theme-manager';
import HeaderSVG from './Header-svg';

export default class HeaderNav {
  container: HTMLElement;

  theme = ThemeManager.getInstance();

  lang = LanguageManager.getInstance();

  navContainer: HTMLElement;

  navWorkspaces: HTMLDivElement;

  navStarred: HTMLDivElement;

  navCreate: HTMLDivElement;

  isAuthenticated = AuthenticateManager.getInstance();

  constructor(
    container: HTMLElement,
    navContainer: HTMLElement,
  ) {
    this.container = container;
    this.navContainer = navContainer;
    this.navWorkspaces = createElement(
      'li',
      [
        'text-lg',
        'text-secondary',
        'flex',
        'justify-center',
        'items-center',
        'h-[20px]',
        'w-[165px]',
        'cursor-pointer',
        'group',
        'hover:text-secondary-focus',
      ],
      'button-workspaces',
      `<span data-i18n='workspaces'></span>${HeaderSVG.ArrowDown}`,
    );
    this.navStarred = createElement(
      'li',
      [
        'text-lg',
        'text-secondary',
        'flex',
        'items-center',
        'justify-center',
        'h-[20px]',
        'w-[115px]',
        'cursor-pointer',
        'group',
        'hover:text-secondary-focus',
      ],
      'button-starred',
      `<span data-i18n='starred'></span>${HeaderSVG.ArrowDown}`,
    );
    this.navCreate = createElement(
      'li',
      [
        'text-lg',
        'text-secondary',
        'flex',
        'justify-center',
        'items-center',
        'h-[20px]',
        'w-[68px]',
        'cursor-pointer',
        'group',
        'hover:text-secondary-focus',
      ],
      'button-starred',
      '<span data-i18n="create"></span>',
    );
  }

  render() {
    const navIcon = createElement(
      'div',
      ['h-12', 'w-12', 'p-2', 'group', 'mdHead:hidden', 'cursor-pointer'],
      'nav-icon',
      HeaderSVG.Hamburger,
    );
    navIcon.setAttribute('data-i18n-title', 'navIcon');

    this.navContainer.appendChild(navIcon);
    const navMenu = createElement(
      'ul',
      [
        'hidden',
        'pr-3',
        'font-semibold',
        'text-xl',
        'text-right',
        'mdHead:h-12',
        'mdHead:flex',
        'mdHead:flex-row',
        'mdHead:justify-end',
        'mdHead:space-x-8',
        'gap-y-5',
        'mdHead:static',
        'absolute',
        'top-[70px]',
        'right-[10px]',
        'backdrop-blur-md',
        'bg-neutral/10',
        'mdHead:bg-neutral/0',
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

    navMenu.appendChild(this.navWorkspaces);
    navMenu.appendChild(this.navStarred);
    navMenu.appendChild(this.navCreate);

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

    switch (this.theme.getTheme()) {
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
      const theme = 'corporate';
      this.theme.setTheme(theme);
      changeTheme(theme, this.container, buttonLight, buttonDark, buttonBlack);
    });

    buttonDark.addEventListener('click', () => {
      const theme = 'autumn';
      this.theme.setTheme(theme);
      changeTheme(theme, this.container, buttonDark, buttonLight, buttonBlack);
    });

    buttonBlack.addEventListener('click', () => {
      const theme = 'night';
      this.theme.setTheme(theme);
      changeTheme(theme, this.container, buttonBlack, buttonLight, buttonDark);
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
        const [, language] = event.target.id.split('-');
        this.lang.setLanguage(language);
        changeLang(language, buttonRu, buttonEn, buttonUk);
      }
    });

    navMenu.appendChild(navThemes);
    navMenu.appendChild(navLang);
    this.navContainer.appendChild(navMenu);
    changeLang(this.lang.getLanguage(), buttonRu, buttonEn, buttonUk);
  }

  renew() {
    if (this.isAuthenticated.checkId()) {
      this.navWorkspaces.style.display = '';
      this.navStarred.style.display = '';
      this.navCreate.style.display = '';
    } else {
      this.navWorkspaces.style.display = 'none';
      this.navStarred.style.display = 'none';
      this.navCreate.style.display = 'none';
    }
  }
}
