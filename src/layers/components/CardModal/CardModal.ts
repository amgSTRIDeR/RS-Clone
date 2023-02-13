import createlement from '../../../utils/create-element';
import testCLick from '../../../utils/test-click';
import BoardSVG from '../Board/Board-svg';
import ButtonWithIcon from '../Button/ButtonWithIcon';
import Card from '../Card/Card';
import { ICardProps } from '../Card/Card.types';
import Editor from '../Editor/Editor';

export default class CardModal extends Card {
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
    const overlay = createlement('div', [
      'overlay',
      'absolute',
      'top-0',
      'left-0',
      'h-full',
      'w-full',
      'z-10',
      'bg-semiblack',
    ]);
    const cardModal = createlement('div', [
      'card-modal',
      'sm:w-[100%]',
      'm:w-[90%]',
      'xl:w-[70%]',
      'sm:mt-0',
      'midmd:mt-10',
      'rounded',
      'midmd:mt-10',
      'sm:mt-0',
      'mmd:mt-10',
      'mx-auto',
      'px-5',
      'py-6',
      'bg-basic-2',
      'transition',
      'ease-in-out',
      'delay-50',
    ]);

    const cardModalHeader = createlement('div', ['card__modal', 'flex', 'justify-between']);
    const cardModalTitle = createlement('h3', ['card-modal__title'], '', `${this.name}`);

    cardModalHeader.append(cardModalTitle);

    const cardModalBody = createlement('div', ['card-modal__body']);
    const cardModalDescription = createlement('div', ['board__desc'], '', 'This is description');

    const descriptionEditor = new Editor(cardModalBody);

    const cardModalMemberContainer = createlement('div', ['card__members', 'flex']);
    const cardModalMember = createlement(
      'div',
      [
        'card__member',
        'flex',
        'justify-center',
        'items-center',
        'w-[30px]',
        'h-[30px]',
        'rounded-full',
        'bg-secondary',
      ],
      '',
      'M',
    );
    const cardModalMemberButton = new ButtonWithIcon({
      value: '',
      className: ['gap-0'],
      onClick: testCLick,
      svg: BoardSVG.Add,
    });
    cardModalMemberContainer.append(cardModalMember, cardModalMemberButton.render());

    const cardModalMarksContainer = createlement('div', ['card__marks', 'flex']);
    const cardModalMark = createlement(
      'div',
      [
        'card__mark',
        'w-auto',
        'text-xs',
        'text-center',
        'border',
        'border-secondary',
        'bg-secondary',
      ],
      '',
      'Mark',
    );
    const cardModalMarkButton = new ButtonWithIcon({
      className: ['gap-0'],
      onClick: testCLick,
      svg: BoardSVG.Add,
    });
    cardModalMarksContainer.append(cardModalMark, cardModalMarkButton.render());

    cardModalBody.append(
      cardModalMemberContainer,
      cardModalMarksContainer,
      cardModalDescription,
      descriptionEditor.render(),
    );
    cardModal.append(cardModalHeader, cardModalBody);
    overlay.append(cardModal);

    this.container.append(overlay);
  }

  // update() {}
}
