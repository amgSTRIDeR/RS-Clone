import initI18next from '../../utils/init-i18next';
import Board from '../components/Board/Board';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Start from '../components/Start/Start';
import AuthenticateManager from '../shared/authenticate-manager';
import LoadingModal from '../components/loading-modal/loading-modal';
import createElement from '../../utils/create-element';
import NotificationMessage from '../components/notification-message/notification-message';
import UserPopup from '../components/UserPopup/UserPopup';
import Workspace from '../components/Workspace/workspace';
import { IUserPayload } from '../../api/interfaces';

const currentUser: IUserPayload = {
  username: 'CURRENTUSER',
  password: '12345678',
  roles: ['admin'],
  tables: ['table1', 'table2'],
  cards: [],
};

export default class View {
  private container: HTMLElement;

  private header: Header;

  private board: Board;

  private start: Start;

  private workspace: Workspace;

  private userPopup: UserPopup;

  private footer: Footer;

  private isAuthenticated = AuthenticateManager.getInstance();

  mainContainer = createElement(
    'main',
    ['h-full', 'items-center', 'justify-around'],
    'main',
  );

  constructor(container: HTMLElement) {
    this.container = container;
    this.board = new Board(this.mainContainer);
    this.start = new Start(this.container, this.mainContainer);
    this.workspace = new Workspace(this.container, currentUser);
    this.userPopup = new UserPopup(this.container, currentUser);
    this.header = new Header(this.container, this.userPopup);
    this.footer = new Footer(this.container);
  }

  render(): void {
    if (this.isAuthenticated.checkToken()) {
      this.workspace.render();
      this.userPopup.render();
    } else {
      this.start.render();
    }

    initI18next();
    LoadingModal.render(this.container);
    NotificationMessage.render(this.container);
    this.container.appendChild(this.mainContainer);

    this.footer.render();
    this.header.render();
    this.listenModals();
  }

  renew() {
    this.mainContainer.innerHTML = '';
    this.header.renew();
    if (this.isAuthenticated.checkToken()) {
      this.workspace.render();
      this.userPopup.render();
    } else {
      this.start.render();
    }
    initI18next();
  }

  listenModals() {
    this.header.signinModal.footerLink.addEventListener('click', () => {
      this.header.signinModal.hide();
      this.start.signupModal.show();
    });

    this.start.signupModal.footerLink.addEventListener('click', () => {
      this.start.signupModal.hide();
      this.header.signinModal.show();
    });
  }
}
