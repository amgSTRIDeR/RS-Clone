/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import { userHttp } from '../../../api/user';
import createElement from '../../../utils/create-element';
import AuthenticateManager from '../../shared/authenticate-manager';
import LoadingModal from '../loading-modal/loading-modal';
import NotificationMessage from '../notification-message/notification-message';

export default class SignModal {
  container: HTMLElement;

  type: string;

  authenticateManager = AuthenticateManager.getInstance();

  modalWrapper = createElement('div', [
    'fixed',
    'z-10',
    'inset-0',
    'overflow-y-auto',
    'backdrop-blur-sm',
    'bg-base-200/50',
    'flex',
    'items-center',
    'justify-center',
    'hidden',
  ]);

  signButton = createElement('button', [
    'bg-primary',
    'hover:bg-primary-focus',
    'text-base-100',
    'hover:text-base-200',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'focus:outline-none',
    'focus:shadow-outline',
  ]) as HTMLButtonElement;

  footerLink = createElement('a', [
    'inline-block',
    'align-baseline',
    'font-bold',
    'text-sm',
    'font-bold',
    'text-primary',
    'px-4',
    'hover:text-primary-focus',
    'cursor-pointer',
  ]);

  constructor(container: HTMLElement, type: string) {
    this.container = container;
    this.type = type;
  }

  render() {
    const signWrapper = createElement('div', [
      'inline-block',
      'align-bottom',
      'bg-base-100',
      'rounded-lg',
      'text-left',
      'overflow-hidden',
      'shadow-xl',
      'transform',
      'transition-all',
      'sm:my-8',
      'sm:align-middle',
      'sm:max-w-lg',
      'sm:w-full',
    ]);

    const headerWrapper = createElement('div', ['bg-secondary', 'px-4', 'py-5', 'sm:px-6']);
    const header = createElement('h2', [
      'text-lg',
      'font-medium',
      'leading-6',
      'text-secondary-content',
    ]);
    header.setAttribute('data-i18n', `sign_${this.type}_header`);
    headerWrapper.appendChild(header);

    const signForm = createElement('form', ['px-4', 'py-5', 'sm:p-6', 'bg-base-100', 'text-base']);

    const usernameWrapper = createElement('div', ['mb-4']);
    const usernameLabel = createElement('label', ['block', 'font-bold', 'mb-2']);
    usernameLabel.setAttribute('for', `sign-${this.type}-name`);
    usernameLabel.setAttribute('data-i18n', 'sign_name');
    const usernameHint = createElement('p', [
      'font-bold',
      'text-accent-focus',
      'text-center',
      'mb-1',
      'opacity-0',
    ]);
    usernameHint.setAttribute('data-i18n', 'usernameHint');
    const usernameInput = createElement(
      'input',
      [
        'shadow',
        'appearance-none',
        'border',
        'rounded',
        'w-full',
        'py-2',
        'px-3',
        'text-primary',
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline',
        'mb-2',
      ],
      `sign-${this.type}-name`,
    ) as HTMLInputElement;
    usernameInput.setAttribute('required', '');
    usernameInput.setAttribute('type', `sign-${this.type}-name`);
    usernameInput.setAttribute('name', `sign-${this.type}-name`);
    usernameWrapper.appendChild(usernameLabel);
    usernameWrapper.appendChild(usernameInput);
    usernameWrapper.appendChild(usernameHint);

    const passwordWrapper = createElement('div', ['mb-6']);
    const passwordLabel = createElement('label', ['block', 'font-bold', 'mb-2']);
    passwordLabel.setAttribute('for', `sign-${this.type}-password`);
    passwordLabel.setAttribute('data-i18n', 'sign_password');
    const passwordHint = createElement('p', [
      'font-bold',
      'text-accent-focus',
      'text-center',
      'mb-1',
      'opacity-0',
    ]);
    passwordHint.setAttribute('data-i18n', 'passwordHint');
    const passwordInput = createElement(
      'input',
      [
        'shadow',
        'appearance-none',
        'border',
        'rounded',
        'w-full',
        'py-2',
        'px-3',
        'text-primary',
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline',
        'mb-2',
      ],
      `sign-${this.type}-password`,
    ) as HTMLInputElement;
    passwordInput.setAttribute('required', '');
    passwordInput.setAttribute('type', `sign-${this.type}-password`);
    passwordInput.setAttribute('password', `sign-${this.type}-password`);
    passwordWrapper.appendChild(passwordLabel);
    passwordWrapper.appendChild(passwordInput);
    passwordWrapper.appendChild(passwordHint);

    const footerWrapper = createElement('div', ['flex', 'items-center', 'justify-between']);

    this.signButton.setAttribute('data-i18n', `sign_${this.type}`);
    this.signButton.setAttribute('type', 'submit');

    this.footerLink.setAttribute('data-i18n', `sign_${this.type}_redirect`);
    footerWrapper.appendChild(this.signButton);
    footerWrapper.appendChild(this.footerLink);

    signForm.appendChild(usernameWrapper);
    signForm.appendChild(passwordWrapper);
    signForm.appendChild(footerWrapper);

    signWrapper.appendChild(headerWrapper);
    signWrapper.appendChild(signForm);

    this.modalWrapper.appendChild(signWrapper);

    this.modalWrapper.addEventListener('click', (event) => {
      if (event.target === this.modalWrapper) {
        this.hide();
      }
    });

    this.signButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const usernameRegex = /^[a-zA-Z]{3,20}$/;
      const passwordRegex = /^.{8,15}$/;

      if (usernameRegex.test(usernameInput.value) && passwordRegex.test(passwordInput.value)) {
        LoadingModal.show();
        if (this.type === 'in') {
          const answer = await userHttp.getUserToken(usernameInput.value, passwordInput.value);
          const [key] = Object.keys(answer);
          const [value] = Object.values(answer);
          if (key === 'token') {
            this.hide();
            this.authenticateManager.setToken(value);
            NotificationMessage.showNotification(`${usernameInput.value} logged in`);
          } else {
            NotificationMessage.showNotification(value);
          }
        } else {
          const result = await userHttp.createUser(usernameInput.value, passwordInput.value);
          NotificationMessage.showNotification(result.data.message);
          if (result.status === 201) {
            const answer = await userHttp.getUserToken(usernameInput.value, passwordInput.value);
            const [value] = Object.values(answer);
            this.authenticateManager.setToken(value);
            this.hide();
          }
        }
        LoadingModal.hide();
      } else {
        usernameHint.classList.remove('opacity-0');
        passwordHint.classList.remove('opacity-0');
        setTimeout(() => {
          usernameHint.classList.add('opacity-0');
          passwordHint.classList.add('opacity-0');
        }, 3000);
      }
    });

    this.container.appendChild(this.modalWrapper);
  }

  show() {
    this.modalWrapper.classList.remove('hidden');
  }

  hide() {
    this.modalWrapper.classList.add('hidden');
  }
}
