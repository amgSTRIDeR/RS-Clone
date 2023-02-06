import createElement from '../../../utils/createElement';
import HeaderSVG from './Header-svg';

export default class Header {
  container: HTMLElement;

  theme: string;

  lang: string;

  isLogin: boolean;

  constructor(
    container: HTMLElement,
    theme: string = 'light',
    lang: string = 'en',
    isLogin: boolean = false,
  ) {
    this.container = container;
    this.theme = theme;
    this.lang = lang;
    this.isLogin = isLogin;
  }

  public render(): void {
    const header = createElement('header', 'header');

    const headerNav = createElement('nav', 'header-nav');
    const workspacesButton = createElement('button', 'nav-button', 'nav-button__workspaces');
    workspacesButton.innerHTML = `Workspaces${HeaderSVG.ArrowDown}`;
    const starredButton = createElement('button', 'nav-button', 'nav-button__starred');
    starredButton.innerHTML = `Starred${HeaderSVG.ArrowDown}`;
    headerNav.innerHTML = `${HeaderSVG.Logo}`;
    if (this.isLogin) {
      headerNav.appendChild(workspacesButton);
      headerNav.appendChild(starredButton);
    }
    header.appendChild(headerNav);

    const searchDiv = createElement('div', 'search');
    searchDiv.innerHTML = `${HeaderSVG.MagnifyingGlass}`;
    const searchInput: HTMLInputElement = createElement('input', 'search__input');
    searchInput.type = 'text';
    searchInput.placeholder = 'search';
    searchDiv.appendChild(searchInput);
    header.appendChild(searchDiv);

    const setsNav = createElement('nav', 'sets');
    const setsLang = createElement('div', 'sets__lang');
    const setsLangButtonEn = createElement('button', 'sets__button', 'button-en');
    setsLangButtonEn.textContent = 'EN';
    const setsLangButtonRu = createElement('button', 'sets__button', 'button-ru');
    setsLangButtonRu.textContent = 'RU';
    setsLang.appendChild(setsLangButtonEn);
    setsLang.appendChild(setsLangButtonRu);
    setsNav.appendChild(setsLang);

    switch (this.lang) {
      case 'ru':
        setsLangButtonRu.classList.add('sets__button_active');
        break;
      default:
        setsLangButtonEn.classList.add('sets__button_active');
    }

    const setsTheme = createElement('div', 'sets__theme');
    const setsThemeButtonLight = createElement('button', 'sets__button', 'button-light');
    setsThemeButtonLight.textContent = 'Light';
    const setsThemeButtonDark = createElement('button', 'sets__button', 'button-dark');
    setsThemeButtonDark.textContent = 'Dark';
    const setsThemeButtonBlack = createElement('button', 'sets__button', 'button-black');
    setsThemeButtonBlack.textContent = 'Black';
    setsTheme.appendChild(setsThemeButtonLight);
    setsTheme.appendChild(setsThemeButtonDark);
    setsTheme.appendChild(setsThemeButtonBlack);
    setsNav.appendChild(setsTheme);

    switch (this.theme) {
      case 'dark':
        setsThemeButtonDark.classList.add('sets__button_active');
        break;
      case 'black':
        setsThemeButtonBlack.classList.add('sets__button_active');
        break;
      default:
        setsThemeButtonLight.classList.add('sets__button_active');
    }
    // replace isLogin on image url?
    if (this.isLogin) {
      const accountImage = createElement('div', 'sets__account-image');
      setsNav.appendChild(accountImage);
    } else {
      const accountLoginButton = createElement('div', 'sets__account-button');
      accountLoginButton.textContent = 'Log In';
      setsNav.appendChild(accountLoginButton);
    }

    const accountSettingsArea = createElement('div', 'settings-area');
    setsNav.appendChild(accountSettingsArea);

    header.appendChild(setsNav);

    this.container.append(header);
  }
}
