import './assets/styles/main.css';
import Presenter from './layers/Presenter/Presenter';

const initApp = (): void => {
  const container: HTMLElement | null = document.querySelector('.body');
  if (!container) {
    return;
  }
  const presenter = new Presenter(container);
  presenter.render();
};

initApp();

// temp for markdown
const buttonLight = document.getElementById('button-light') as HTMLButtonElement;
const buttonDark = document.getElementById('button-dark') as HTMLButtonElement;
const buttonBlack = document.getElementById('button-black') as HTMLButtonElement;
const bodyElement = document.getElementById('body') as HTMLBodyElement;

buttonLight.addEventListener('click', () => {
  bodyElement.setAttribute('data-theme', 'corporate');

  buttonLight.classList.add('fill-primary');
  buttonDark.classList.remove('fill-primary');
  buttonBlack.classList.remove('fill-primary');

  buttonLight.classList.remove('hover:fill-secondary-focus');
  buttonDark.classList.add('hover:fill-secondary-focus');
  buttonBlack.classList.add('hover:fill-secondary-focus');
});

buttonDark.addEventListener('click', () => {
  bodyElement.setAttribute('data-theme', 'business');

  buttonDark.classList.add('fill-primary');
  buttonLight.classList.remove('fill-primary');
  buttonBlack.classList.remove('fill-primary');

  buttonDark.classList.remove('hover:fill-secondary-focus');
  buttonLight.classList.add('hover:fill-secondary-focus');
  buttonBlack.classList.add('hover:fill-secondary-focus');
});

buttonBlack.addEventListener('click', () => {
  bodyElement.setAttribute('data-theme', 'night');

  buttonBlack.classList.add('fill-primary');
  buttonLight.classList.remove('fill-primary');
  buttonDark.classList.remove('fill-primary');

  buttonBlack.classList.remove('hover:fill-secondary-focus');
  buttonLight.classList.add('hover:fill-secondary-focus');
  buttonDark.classList.add('hover:fill-secondary-focus');
});

const navIcon = document.getElementById('nav-icon') as HTMLDivElement;
const navMenu = document.getElementById('nav-menu') as HTMLDivElement;
navIcon.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
//
