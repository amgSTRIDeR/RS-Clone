import createElement from '../../../utils/create-element';
// import testCLick from '../../../utils/test-click';
import BoardSVG from '../Board/Board-svg';
import Button from '../Button/Button';
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

    const ButtonDots = new Button({
      value: BoardSVG.Dots,
      className: [],
      // onClick: testCLick,
    });

    columnHeader.append(`${this.name}`, ButtonDots.render());

    const column = createElement(
      'div',
      [
        'column',
        'flex',
        'flex-col',
        'min-w-[230px]',
        'max-w-400',
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
      // onClick: testCLick,
      svg: BoardSVG.Add,
    });

    column.append(ButtonAdd.render());

    this.container.append(column);
    return column;
  }
}
