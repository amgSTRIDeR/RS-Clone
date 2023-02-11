import createElement from '../../../utils/createe-element';
import testCLick from '../../../utils/test-click';
import BoardSVG from '../Board/Board-svg';
import Button from '../Button/Button';
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

    const ButtonDots = new Button({
      value: BoardSVG.Dots,
      className: [],
      onClick: testCLick,
    });

    columnHeader.append(`${this.name}`, ButtonDots.render());

    const column = createElement(
      'div',
      [
        'column',
        'min-w-[230px]',
        'max-w-400',
        'p-[6px]',
        'bg-basic',
        'rounded',
        'border-2',
        'border-primary',
      ],
      '',
      columnHeader,
    );

    this.container.append(column);
    return column;
  }
}
