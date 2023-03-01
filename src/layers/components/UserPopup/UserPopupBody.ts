import { IUserPayload } from '../../../api/interfaces';
import createElement from '../../../utils/create-element';

export default class UserPopupBody {
  container: HTMLElement;

  currentUser: IUserPayload;

  constructor(container: HTMLElement, currentUser: IUserPayload) {
    this.container = container;
    this.currentUser = currentUser;
  }

  render() {
    const popupBody = createElement('div', ['user-popup__body', 'flex', 'flex-wrap']);

    const UserActionsList = createElement('ul', ['user-popup__list', 'w-full', 'py-3']);

    const UserPopupAccountLink = createElement(
      'a',
      ['block', 'w-full', 'h-auto', 'px-6', 'py-2', 'hover:bg-gray-100', 'cursor-pointer'],
      '',
      'Account',
    );

    const UserPopupSettingsLink = createElement(
      'a',
      ['block', 'w-full', 'h-auto', 'px-6', 'py-2', 'hover:bg-gray-100', 'cursor-pointer'],
      '',
      'Settings',
    );

    const UserDivider = createElement('div', [
      'user__divider',
      'h-[1px]',
      'w-[90%]',
      'mx-auto',
      'mb-3',
      'bg-gray-300',
    ]);

    UserActionsList.append(UserPopupAccountLink, UserPopupSettingsLink);
    popupBody.append(UserActionsList, UserDivider);

    return popupBody;
  }
}
