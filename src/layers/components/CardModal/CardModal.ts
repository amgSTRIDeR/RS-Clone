import createlement from '../../../utils/create-element';
import testCLick from '../../../utils/test-click';
import BoardSVG from '../Board/Board-svg';
import ButtonTextWithIcon from '../Button/ButtonTextWithIcon';
import ButtonWithIcon from '../Button/ButtonWithIcon';
import Card from '../Card/Card';
import { ICardProps } from '../Card/Card.types';
import Editor from '../Editor/Editor';
import CardModalAside from './CardModalAside';

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
      'hidden',
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
    const cardModalTitle = createlement('h3', ['card-modal__title', 'mb-6'], '', `${this.name}`);

    cardModalHeader.append(cardModalTitle);

    const cardModalDetails = createlement('div', ['card__details', 'flex', 'gap-5']);

    const cardModalBody = createlement('div', ['card-modal__body']);

    const cardModalDescriptionContainer = createlement('div', [
      'board__desc-box',
      'flex',
      'gap-3',
      'my-5',
    ]);
    const descriptionText = createlement('div', ['board__desc-text'], '', 'This description text');
    const cardModalDescription = createlement('div', ['board__desc'], '', `${BoardSVG.Lines}`);
    cardModalDescriptionContainer.append(cardModalDescription, descriptionText);

    const descriptionEditor = new Editor(cardModalBody);

    const cardModalMemberContainer = createlement('div', ['card__members', 'flex', 'gap-3']);
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

    const cardModalMarksContainer = createlement('div', [
      'card__marks',
      'flex',
      'items-center',
      'gap-3',
    ]);
    const cardModalMark = createlement(
      'div',
      [
        'card__mark',
        'flex',
        'justify-center',
        'items-center',
        'w-auto',
        'h-[20px]',
        'text-xs',
        'px-2',
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

    cardModalDetails.append(cardModalMemberContainer, cardModalMarksContainer);

    const cardMoveButton = new ButtonTextWithIcon({
      value: 'Move the card',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Arrow,
    }).render();

    const cardCopyButton = new ButtonTextWithIcon({
      value: 'Copy the card',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Copy,
    }).render();

    const cardMakeTemplateButton = new ButtonTextWithIcon({
      value: 'Make a template',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Template,
    }).render();

    const cardDeleteButton = new ButtonTextWithIcon({
      value: 'Make a template',
      className: ['min-w-[200px]'],
      onClick: testCLick,
      svg: BoardSVG.Delete,
    }).render();

    const cardModalButtonsCol1 = createlement('div', [
      'card__Buttons1',
      'flex',
      'md:flex-wrap2',
      'gap-5',
      'mt-5',
    ]);
    const cardModalButtonsCol2 = createlement('div', [
      'card__Buttons2',
      'flex',
      'md:flex-wrap',
      'gap-5',
    ]);
    cardModalButtonsCol1.append(cardMoveButton, cardCopyButton);

    cardModalButtonsCol2.append(cardMakeTemplateButton, cardDeleteButton);

    const cardModalActions = createlement('div', [
      'card__Buttons',
      'flex',
      'flex-wrap',
      'gap-5',
      'mt-5',
    ]);
    cardModalActions.append(cardModalButtonsCol1, cardModalButtonsCol2);

    cardModalBody.append(
      cardModalDetails,
      cardModalDescriptionContainer,
      descriptionEditor.render(),
      cardModalActions,
    );

    const cardModalMain = createlement('div', ['cardModal__main', 'flex', 'flex-col', 'md:flex-row', 'gap-0', 'md:gap-7']);
    const cardModalAside = new CardModalAside({
      container: this.container,
      description: this.description,
      name: this.name,
      table: this.table,
      column: this.column,
      comments: this.comments,
      users: this.users,
      creator: this.creator,
    }).render();

    cardModalMain.append(cardModalBody, cardModalAside);

    cardModal.append(cardModalHeader, cardModalMain);
    overlay.append(cardModal);

    this.container.append(overlay);
    // return cardModal;
    return overlay;
  }

  // update() {}
}
