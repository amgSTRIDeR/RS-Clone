import View from '../View/View';

// need to get theme, lang from localStorage and ifLogin from sessionStorage (or from localStorage?)

export default class Presenter {
  private view: View;

  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    this.view = new View(this.container);
  }

  render() {
    // temp
    console.log(this.container);
  }
}
