import createElement from '../../../utils/create-element';
import ButtonTextWithIcon from '../Button/ButtonTextWithIcon';
import Card from '../Card/Card';
import CardModal from '../CardModal/CardModal';
import Column from '../Column/Column';
import BoardSVG from './Board-svg';
import BoardHeader from './BoardHeader';

export default class Board {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const board = createElement('section', [
      'board',
      'bg-basic',
      'flex-grow',
      'gap-5',
      'w-full',
      'h-full',
      'px-[2vw]',
    ]);

    const boardContainer = createElement('section', [
      'board__container',
      'flex',
      'gap-5',
      'w-full',
      'h-full',
      'overflow-x-scroll',
    ]);

    const boardBody = createElement('section', [
      'board__body',
      'flex',
      'gap-5',
      'h-full',
      'pb-5',
    ]);

    const boardFooter = createElement('section', [
      'board__footer',
      'flex',
      'gap-5',
      'h-full',
      'pb-5',
    ]);

    new BoardHeader(board).render();

    const column = new Column({
      container: boardBody,
      id: '1',
      name: 'name',
      table: 'table',
      cards: ['cards'],
    }).render();

    new Card({
      container: column,
      name: 'name',
      description: 'description',
      table: 'table',
      column: 'column',
      comments: ['comments'],
      users: ['users'],
      creator: 'creator',
    }).render();

    new CardModal({
      container: column,
      name: 'name',
      description: 'description',
      table: 'table',
      column: 'column',
      comments: ['comments'],
      users: ['users'],
      creator: 'creator',
    }).render();

    const buttonCreateColumn = new ButtonTextWithIcon({
      value: 'Add new column',
      className: [],
      onClick: this.createNewColumn,
      svg: BoardSVG.Add,
    }).render();

    boardContainer.append(boardBody, boardFooter);
    boardBody.append(column);
    boardFooter.append(buttonCreateColumn);
    board.append(boardContainer);
    this.container.append(board);
  }

  createNewColumn() {
    const boardBody = document.querySelector('.board__body') as HTMLElement;
    console.log('eee');
    if (boardBody) {
      boardBody.append(
        new Column({
          container: boardBody,
          id: '1',
          name: 'name',
          table: 'table',
          cards: ['cards'],
        }).render(),
      );
    }
  }
}
