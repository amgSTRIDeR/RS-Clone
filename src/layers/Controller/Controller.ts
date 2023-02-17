/* eslint-disable class-methods-use-this */
import Model from '../Model/Model';
import AuthenticateManager from '../shared/authenticate-manager';
import LanguageManager from '../shared/language-manager';
import ThemeManager from '../shared/theme-manager';
import View from '../View/View';

export default class Controller {
  view: View;

  model: Model;

  container: HTMLElement;

  theme = ThemeManager.getInstance();

  lang = LanguageManager.getInstance();

  tokenCheck = AuthenticateManager.getInstance();

  constructor(container: HTMLElement) {
    this.container = container;
    this.view = new View(this.container);
    this.model = new Model();
  }

  render() {
    this.view.render();
    this.listenTokenChange();
  }

  listenTokenChange() {
    window.addEventListener('tokenChange', () => {
      this.view.renew();
    });
  }
}
