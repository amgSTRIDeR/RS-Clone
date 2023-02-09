import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Start from '../components/Start/Start';

export default class View {
  private container: HTMLElement;

  private header: Header;

  private start: Start;

  private footer: Footer;

  constructor(container: HTMLElement) {
    this.container = container;
    this.header = new Header(this.container, 'corporate', 'en', false);
    this.start = new Start(this.container);
    this.footer = new Footer(this.container);
    this.render();
  }

  private render(): void {
    this.header.render();
    this.start.render();
    this.footer.render();
  }
}
