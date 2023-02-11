import createElement from '../../../utils/createe-element';
import BoardSVG from '../Board/Board-svg';
import { ICardProps } from './Card.types';

export default class Card {
  container: HTMLElement;

  name: string;

  description: string;

  table: string;

  column: string;

  comments: string[];

  users: string[];

  creator: string;

  constructor({
    container,
    name,
    description,
    table,
    column,
    comments,
    users,
    creator,
  }: ICardProps) {
    this.container = container;
    this.name = name;
    this.description = description;
    this.table = table;
    this.column = column;
    this.comments = comments;
    this.users = users;
    this.creator = creator;
  }

  render() {
    const cardHeader = createElement('div', ['card__header', 'flex', 'justify-between']);
    const cardTitle = createElement('h3', ['card__title'], '', `${this.name}`);
    const cardHoverPen = createElement('div', ['card__hover-pen', 'top-0', 'ml-auto', 'opacity-0', 'hover:block', 'w-[17px]', 'h-[17px]'], '', BoardSVG.Pen);

    cardHeader.append(cardTitle, cardHoverPen);

    const cardBody = createElement('div', ['board__list']);
    const card = createElement(
      'a',
      [
        'card',
        'p-[6px]',
        'min-h-[50px]',
        'border-2',
        'bg-basic-2',
        'cursor-pointer',
        'hover:text-secondary-focus',
        'hover:border-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
      ],
      '',
      `${cardHeader} ${cardBody}`,
    );
    console.log(card);
    this.container.append(card);
  }

  // update() {}
}
