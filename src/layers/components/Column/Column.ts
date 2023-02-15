import createElement from '../../../utils/create-element';
import testCLick from '../../../utils/test-click';
import BoardSVG from '../Board/Board-svg';
import ButtonWithIcon from '../Button/ButtonWithIcon';
import { IColumnProps } from './Column.types';

export default class Column {
  container: HTMLElement;

  id: string;

  name: string;

  table: string;

  cards: string[];

  constructor({
    container,
    id,
    name,
    table,
    cards,
  }: IColumnProps) {
    this.container = container;
    this.id = id;
    this.name = name;
    this.table = table;
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
      onClick: testCLick,
      svg: BoardSVG.Add,
    });

    column.append(ButtonAdd.render());

    this.container.append(column);
    return column;
  }
}
