import getUserInfo from '../../utils/get-user-info';
import Model from '../Model/Model';
import AuthenticateManager from '../shared/authenticate-manager';
import LanguageManager from '../shared/language-manager';
import ThemeManager from '../shared/theme-manager';
import View from '../View/View';

export default class Controller {
  view: View | undefined;

  model: Model;

  container: HTMLElement;

  theme = ThemeManager.getInstance();

  lang = LanguageManager.getInstance();

  tokenCheck = AuthenticateManager.getInstance();

  constructor(container: HTMLElement) {
    this.container = container;
    this.model = new Model();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.view;
  }

  async getViewParams() {
    const currentUser = await getUserInfo();
    this.view = new View(this.container, currentUser);
  }

  async render() {
    await this.getViewParams();
    if (this.view) {
      this.view.render();
    }
    this.listenIdChange();
  }

  listenIdChange() {
    window.addEventListener('idChange', () => {
      if (this.view) {
        this.view.renew();
      }
    });
  }
}
