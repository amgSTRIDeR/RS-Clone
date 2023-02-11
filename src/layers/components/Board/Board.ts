import createElement from '../../../utils/createe-element';
import BoardHeader from './BoardHeader';

export default class Board {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const board = createElement('section', ['board', 'flex', 'w-full', 'h-full', 'px-[2vw]']);
    function newBoard() {
      new BoardHeader(board).render();
    }

    newBoard();
    this.container.append(board);
  }
}
