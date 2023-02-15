import createElement from '../../../utils/create-element';
import HeaderNav from './Header-nav';
import HeaderSVG from './Header-svg';

export default class Header {
  container: HTMLElement;

  searchWrapper: HTMLElement;

  accountButton: HTMLDivElement;

  loginButton: HTMLDivElement;

  navContainer: HTMLElement;

  headerNav;

  constructor(container: HTMLElement) {
    this.container = container;
    this.searchWrapper = createElement('div', ['relative']);
    this.accountButton = createElement('div', [
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
    this.loginButton = createElement('div');
    this.navContainer = createElement(
      'div',
      ['flex', 'flex-col', 'items-end', 'justify-self-end', 'text-secondary'],
      'nav-container',
    );
    this.headerNav = new HeaderNav(
      this.container,
      this.navContainer,
    );
  }

  render() {
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
    );

    const mainLogo = createElement('div', [], '', HeaderSVG.Logo);
    mainLogo.setAttribute('data-i18n-title', 'logo');
    mainLogo.addEventListener('click', () => {
      window.location.hash = '';
    });
    header.appendChild(mainLogo);

    this.searchWrapper.innerHTML = HeaderSVG.MagnifyingGlass;
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
    this.searchWrapper.appendChild(searchInput);
    header.appendChild(this.searchWrapper);

    header.appendChild(this.navContainer);

    this.accountButton.setAttribute('data-i18n-title', 'accountInfo');
    header.appendChild(this.accountButton);

    this.loginButton.title = 'Log In';
    this.loginButton.innerHTML = HeaderSVG.Login;
    this.loginButton.addEventListener('click', () => {
      window.location.hash = '/login';
    });
    header.appendChild(this.loginButton);

    this.container.prepend(header);
    this.headerNav.render();
  }

  renew(isAuthenticated: boolean) {
    this.headerNav.renew(isAuthenticated);

    if (isAuthenticated) {
      this.searchWrapper.style.display = '';
      this.accountButton.style.display = '';
      this.loginButton.style.display = 'none';
    } else {
      this.searchWrapper.style.display = 'none';
      this.accountButton.style.display = 'none';
      this.loginButton.style.display = '';
    }
  }
}
