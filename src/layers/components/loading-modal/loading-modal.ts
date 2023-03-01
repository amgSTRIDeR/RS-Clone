import createElement from '../../../utils/create-element';
import loadingModalSvg from './loading-modal-svg';

export default class LoadingModal {
  static loadingWrapper = createElement('div', [
    'fixed',
    'top-0',
    'left-0',
    'w-screen',
    'h-screen',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'backdrop-blur-sm',
    'bg-base-200/50',
    'z-50',
    'hidden',
  ], '', loadingModalSvg);

  static render(container: HTMLElement) {
    const loadingText = createElement('span', ['text-primary', 'text-2xl']);
    loadingText.setAttribute('data-i18n', 'loading');

    LoadingModal.loadingWrapper.appendChild(loadingText);
    container.appendChild(LoadingModal.loadingWrapper);
  }

  static show() {
    LoadingModal.loadingWrapper.classList.remove('hidden');
  }

  static hide() {
    LoadingModal.loadingWrapper.classList.add('hidden');
  }
}
