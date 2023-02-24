import createElement from '../../../utils/create-element';
import Card from '../Card/Card';
import CardModal from '../CardModal/CardModal';
import Column from '../Column/Column';
import BoardHeader from './BoardHeader';
import { IBoard, IUser, ICard } from '../../../api/interfaces';
import { cardHttp } from '../../../api/card';
import { userHttp } from '../../../api/user';

export default class Board {
  board: IBoard;

  container: HTMLElement;

  constructor(container: HTMLElement, boardContent: IBoard) {
    this.board = boardContent;
    this.container = container;
  }

  async render() {
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

    const cardList: ICard[] = await cardHttp.getCards();
    const userList: IUser[] = await userHttp.getUsers();

    this.board.columns.forEach((columnName: string, index: number) => {
      const column = new Column({
        container: board,
        id: `${index + 1}`,
        name: columnName,
        table: this.board.name,
        cards: [...this.board.cards],
      }).render();

      cardList.forEach(async (card) => {
        let creatorUser: string = '';
        const cardUserList: string[] = [];
        if (card.column === columnName) {
          userList.forEach((user) => {
            if (Object.values(user).includes(card.creator)) {
              creatorUser = user.username;
            }
            const userId: string = Object.values(user)[0];
            if (card.users.includes(userId)) {
              cardUserList.push(user.username);
            }
          });
          const newCard = new Card({
            container: column,
            name: card.name,
            description: card.description,
            table: this.board.name,
            column: columnName,
            comments: [...card.comments],
            users: cardUserList,
            creator: creatorUser,
          }).render();

          const modal = new CardModal({
            container: column,
            name: card.name,
            description: card.description,
            table: this.board.name,
            column: columnName,
            comments: [...card.comments],
            users: cardUserList,
            creator: creatorUser,
          }).render();

          newCard.addEventListener('click', () => {
            modal.classList.remove('hidden');
          });

          modal.addEventListener('click', (event) => {
            const elements: NodeListOf<Element> | null = document.querySelectorAll('.overlay.absolute.top-0');
            elements.forEach((element) => {
              if (element === event.target) {
                modal.classList.add('hidden');
              }
            });
          });
        }
      });
      board.append(column);
      this.container.append(board);
    });
  }
}
