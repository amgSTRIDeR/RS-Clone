import { IUserPayload } from '../../../api/interfaces';
import createElement from '../../../utils/create-element';
import AuthenticateManager from '../../shared/authenticate-manager';
import NotificationMessage from '../notification-message/notification-message';
import UserPopupBody from './UserPopupBody';
import UserPopupHead from './UserPopupHeader';

export default class UserPopup {
  container: HTMLElement;

  currentUser: IUserPayload;

  authenticateManager = AuthenticateManager.getInstance();

  userPopup = createElement('div', [
    'fixed',
    'w-[240px]',
    'top-0',
    'right-0',
    'pt-11',
    'pb-4',
    'bg-white',
    'z-10',
    'rounded',
    'shadow-lg',
    'hidden',
  ]);

  constructor(container: HTMLElement, currentUser: IUserPayload) {
    this.container = container;
    this.currentUser = currentUser;
  }

  render() {
    this.userPopup.innerHTML = '';
    const userPopupHead = new UserPopupHead(this.userPopup, this.currentUser).render();
    const userPopupBody = new UserPopupBody(this.userPopup, this.currentUser).render();
    const UserPopupLogoutLink = createElement(
      'a',
      ['block', 'w-full', 'h-auto', 'px-6', 'py-2', 'hover:bg-gray-100', 'cursor-pointer'],
      '',
      'Log out',
    );

    this.userPopup.append(userPopupHead, userPopupBody, UserPopupLogoutLink);

    this.container.append(this.userPopup);

    UserPopupLogoutLink.addEventListener('click', () => {
      this.authenticateManager.deleteToken();
      NotificationMessage.showNotification('Logged out');
      this.hide();
    });

    this.container.addEventListener('click', (event) => {
      const accountButton = document.getElementById('account-button');
      if (!this.userPopup.contains(event.target as Node) && event.target !== accountButton) {
        this.hide();
      }
    });
  }

  hide() {
    console.log('hide');
    this.userPopup.classList.add('hidden');
  }

  show() {
    console.log('show');
    this.userPopup.classList.remove('hidden');
  }
}
