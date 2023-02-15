import createlement from '../../../utils/create-element';
import testCLick from '../../../utils/test-click';
import BoardSVG from '../Board/Board-svg';
import ButtonTextWithIcon from '../Button/ButtonTextWithIcon';
import Card from '../Card/Card';
import { ICardProps } from '../Card/Card.types';

export default class CardModalAside extends Card {
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
    super({
      container,
      name,
      description,
      table,
      column,
      comments,
      users,
      creator,
    });
  }

  render() {
    const cardModalAside = createlement('div', [
      'cardModal__aside',
      'flex',
      'flex-col',
      'gap-5',
      'md:gap-5',
      'mt-5',
      'before::content-[""]',
      'before:h-[1px]',
      'before:w-[416px]',
      'before:bg-gray-200',
      'md:before:w-0',
      'md:before:h-0',
      'md:mt-0',
    ]);

    const cardModalAsideCol1 = createlement('div', [
      'cardModal-Aside__col',
      'flex',
      'flex-row',
      'md:flex-col',
      'gap-5',
    ]);

    const cardModalAsideCol2 = createlement('div', [
      'cardModal-Aside__col',
      'flex',
      'flex-row',
      'md:flex-col',
      'gap-5',
    ]);

    const cardAddUserButton = new ButtonTextWithIcon({
      value: 'Add a new user ',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Arrow,
    }).render();

    const cardAttachmentButton = new ButtonTextWithIcon({
      value: 'Copy the card',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Attachment,
    }).render();

    const cardAddTimelineButton = new ButtonTextWithIcon({
      value: 'Add a new mark',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Mark,
    }).render();

    const cardMarkButton = new ButtonTextWithIcon({
      value: 'Set a timeline',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Time,
    }).render();

    cardModalAsideCol1.append(cardAddUserButton, cardAttachmentButton);
    cardModalAsideCol2.append(cardAddTimelineButton, cardMarkButton);

    cardModalAside.append(cardModalAsideCol1, cardModalAsideCol2);

    return cardModalAside;
  }
}
