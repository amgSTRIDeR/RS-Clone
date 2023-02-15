import Model from '../Model/Model';
import View from '../View/View';

// need to get theme, lang from localStorage and ifLogin from sessionStorage (or from localStorage?)

export default class Controller {
  view: View;

  model: Model;

  container: HTMLElement;

  isAuthenticated: boolean;

  language: string;

  theme: string;

  constructor(container: HTMLElement) {
    this.container = container;
    this.isAuthenticated = false;
    this.theme = 'corporate';
    this.language = 'en';
    this.view = new View(this.container);
    this.model = new Model();
    this.listenHashState();
  }

  render() {
    this.isAuthenticated = this.model.checkAuthentication();

    this.view.render(this.isAuthenticated);
  }

  // eslint-disable-next-line class-methods-use-this
  listenHashState(): void {
    window.onhashchange = () => {
      switch (window.location.hash) {
        case '#/login':
          // this.model.loginPopup(this.isAuthenticated);
          break;
        case '#/signup':
          console.log('signup');
          break;
        case '':
          console.log('main');
          break;
        default:
          console.log('error - 404');
      }
    };
  }
}
