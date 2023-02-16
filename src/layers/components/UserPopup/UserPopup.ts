import createElement from '../../../utils/create-element';
import IUserProps from './IUserProps';
import UserPopupBody from './UserPopupBody';
import UserPopupHead from './UserPopupHeader';

export default class UserPopup {
  container: HTMLElement;

  currentUser: IUserProps;

  constructor(container: HTMLElement, currentUser: IUserProps) {
    this.container = container;
    this.currentUser = currentUser;
  }

  render() {
    const userPopup = createElement('div', [
      'fixed',
      'hidden',
      'w-[240px]',
      'top-0',
      'right-0',
      'pt-11',
      'pb-4',
      'bg-white',
      'z-10',
      'rounded',
      'shadow-lg',
    ]);
    const userPopupHead = new UserPopupHead(userPopup, this.currentUser).render();
    const userPopupBody = new UserPopupBody(userPopup, this.currentUser).render();
    const UserPopupLogoutLink = createElement(
      'a',
      ['block', 'w-full', 'h-auto', 'px-6', 'py-2', 'hover:bg-gray-100', 'cursor-pointer'],
      '',
      'Log out',
    );
    userPopup.append(userPopupHead, userPopupBody, UserPopupLogoutLink);

    this.container.append(userPopup);
  }
}
