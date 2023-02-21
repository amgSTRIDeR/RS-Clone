import createElement from '../../../utils/create-element';
import Card from '../Card/Card';
import CardModal from '../CardModal/CardModal';
import Column from '../Column/Column';
import BoardHeader from './BoardHeader';
import { IBoard, ICardPayload, IUserPayload } from '../../../api/interfaces';
import { cardHttp } from '../../../api/card';
import { userHttp } from '../../../api/user';

export default class Board {
  board: IBoard;

  container: HTMLElement;

  constructor(container: HTMLElement, boardContent: IBoard) {
    console.log(boardContent);
    // console.log(boardContent.columns);
    this.board = boardContent;
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
      'h-full',
      'px-[2vw]',
    ]);

    new BoardHeader(board, this.board.name).render();

    this.board.columns.forEach((columnName: string, index: number) => {
      const column = new Column({
        container: board,
        id: `${index + 1}`,
        name: columnName,
        table: this.board.name,
        cards: [...this.board.cards],
      }).render();

      // const cardList: ICardPayload[] = await cardHttp.getCards();
      this.board.cards.forEach(async (cardId) => {
        const cardInfo: ICardPayload = await cardHttp.getCard(cardId);
        if (cardInfo.column === columnName) {
          const creatorUser: IUserPayload = await userHttp.getUser(cardInfo.creator);
          new Card({
            container: column,
            name: cardInfo.name,
            description: cardInfo.description,
            table: this.board.name,
            column: columnName,
            comments: [...cardInfo.comments],
            users: ['users'],
            creator: creatorUser.username,
          }).render();

          new CardModal({
            container: column,
            name: cardInfo.name,
            description: cardInfo.description,
            table: this.board.name,
            column: columnName,
            comments: [...cardInfo.comments],
            users: ['users'],
            creator: creatorUser.username,
          }).render();
        }
      });
      this.container.append(board);
    });
  }
}
