import createElement from '../../../utils/create-element';
import Card from '../Card/Card';
import CardModal from '../CardModal/CardModal';
import Column from '../Column/Column';
import BoardHeader from './BoardHeader';

export default class Board {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const board = createElement('section', [
      'board',
      'flex-wrap',
      'items-center',
      'bg-basic',
      'flex-grow',
      'w-full',
      'min-h-[calc(100vh_-_120px)]',
      'px-[2vw]',
    ]);

    new BoardHeader(board).render();

    const column = new Column({
      container: board,
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

    this.container.append(board);
  }
}
