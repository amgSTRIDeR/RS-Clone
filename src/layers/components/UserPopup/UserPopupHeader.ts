import createElement from '../../../utils/create-element';
import IUserProps from './IUserProps';

export default class UserPopupHead {
  container: HTMLElement;

  currentUser: IUserProps;

  constructor(container: HTMLElement, currentUser: IUserProps) {
    this.container = container;
    this.currentUser = currentUser;
  }

  render() {
    const popupHeader = createElement('div', ['user-popup__header', 'flex', 'flex-wrap']);
    const UserPopupHeading = createElement(
      'h3',
      ['text-uppercase', 'tracking-wide', 'w-full', 'px-6'],
      '',
      'Account',
    );

    const UserPopupUserinfo = createElement('div', [
      'user-popup__userinfo',
      'flex',
      'w-full',
      'gap-5',
      'px-6',
      'items-center',
      'my-5',
    ]);

    const UserPopupUserpic = createElement('div', [
      'user-popup__userpic',
      'w-[30px]',
      'h-[30px]',
      'bg-secondary',
      'rounded-full',
    ]);

    const UserPopupUserCol = createElement('div', ['user-popup__userinfo', 'flex', 'flex-col']);
    const UserPopupUserName = createElement('p', ['user-popup__heading'], '', 'User Name');
    const UserPopupUserMail = createElement('p', ['user-popup__heading'], '', 'mailmail@mail.ru');
    const UserDivider = createElement('div', [
      'user__divider',
      'h-[1px]',
      'w-[90%]',
      'mx-auto',
      'bg-gray-300',
    ]);

    UserPopupUserCol.append(UserPopupUserName, UserPopupUserMail);
    UserPopupUserinfo.append(UserPopupUserpic, UserPopupUserCol);
    popupHeader.append(UserPopupHeading, UserPopupUserinfo, UserDivider);

    return popupHeader;
  }
}
