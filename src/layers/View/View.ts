
import initI18next from '../../utils/init-i18next';
import Board from '../components/Board/Board';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Start from '../components/Start/Start';
import AuthenticateManager from '../shared/authenticate-manager';
import LoadingModal from '../components/loading-modal/loading-modal';
import createElement from '../../utils/create-element';
import NotificationMessage from '../components/notification-message/notification-message';
import IUserProps from '../components/UserPopup/IUserProps';
import UserPopup from '../components/UserPopup/UserPopup';


const currentUser: IUserProps = {
  name: 'Name',
  rights: 'Admin',
  mail: 'Admin@mail.com',
};

export default class View {
  private container: HTMLElement;

  private header: Header;

  private board: Board;

  private start: Start;
  
  private userPopup: UserPopup;

  private footer: Footer;

  private isAuthenticated = AuthenticateManager.getInstance();

  mainContainer = createElement(
    'main',
    ['min-h-[calc(100vh_-_120px)]', 'flex', 'items-center', 'justify-around'],
    'main',
  );

  constructor(container: HTMLElement) {
    this.container = container;
    this.header = new Header(this.container);
    this.board = new Board(this.mainContainer);
    this.start = new Start(this.container, this.mainContainer);
    this.userPopup = new UserPopup(this.container, currentUser);
    this.footer = new Footer(this.container);
  }

  render(): void {
    if (this.isAuthenticated.checkToken()) {
      this.board.render();
    } else {
      this.start.render();
    }
    
    // Check this
    this.userPopup.render();

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
      this.board.render();
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
