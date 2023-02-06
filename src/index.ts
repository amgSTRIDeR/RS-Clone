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
