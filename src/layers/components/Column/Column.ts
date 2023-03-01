import createElement from '../../../utils/create-element';
import testCLick from '../../../utils/test-click';
import openNewCard from '../../../utils/add-new-card';
import BoardSVG from '../Board/Board-svg';
import ButtonWithIcon from '../Button/ButtonWithIcon';
import { IColumnProps } from './Column.types';

export default class Column {
  container: HTMLElement;

  id: string;

  name: string;

  board: string;

  cards: string[];

  constructor({
    container,
    id,
    name,
    board,
    cards,
  }: IColumnProps) {
    this.container = container;
    this.id = id;
    this.name = name;
    this.board = board;
    this.cards = cards;
  }

  render() {
    const columnHeader = createElement('div', [
      'column__header',
      'flex',
      'justify-between',
      'p-[6px]',
      'rounded',
    ]);

    const ButtonDots = new ButtonWithIcon({
      className: [],
      onClick: testCLick,
      svg: BoardSVG.Dots,
    });

    columnHeader.append(`${this.name}`, ButtonDots.render());

    const column = createElement(
      'div',
      [
        'column',
        'flex',
        'flex-col',
        'w-[230px]',
        'gap-[10px]',
        'p-[6px]',
        'bg-basic',
        'rounded',
        'border-2',
        'border-primary',
      ],
      '',
      columnHeader,
    );

    const ButtonAdd = new ButtonWithIcon({
      value: 'Add new card',
      className: ['button-add'],
      svg: BoardSVG.Add,
    }).render();

    ButtonAdd.addEventListener('click', () => {
      openNewCard(column, { columnName: this.name, board: this.board });
    });

    column.append(ButtonAdd);

    this.container.append(column);
    return column;
  }
}
