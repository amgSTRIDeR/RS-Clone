import './assets/styles/main.css';
import Presenter from './layers/Presenter/Presenter';

const initApp = (): void => {
  const container: HTMLElement | null = document.getElementById('body');
  if (!container) {
    return;
  }
  const presenter = new Presenter(container);
  presenter.render();
};

initApp();
// temp
const navIcon = document.getElementById('nav-icon') as HTMLDivElement;
const navMenu = document.getElementById('nav-menu') as HTMLUListElement;
navIcon.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
//
