import './assets/styles/main.css';
import Controller from './layers/Controller/Controller';

const initApp = (): void => {
  const container: HTMLElement | null = document.getElementById('body');
  if (!container) {
    return;
  }
  const controller = new Controller(container);
  controller.render();
};

initApp();
