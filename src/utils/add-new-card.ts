/* eslint-disable prefer-destructuring */
import Card from '../layers/components/Card/Card';
import CardModal from '../layers/components/CardModal/CardModal';
import getFromModal from './get-info-from-card';
import { cardHttp } from '../api/card';
import INewCard from './interfaces';

export default function openNewCard(column: HTMLElement, cardData: INewCard) {
  const modalObject: CardModal = new CardModal({
    container: column,
    name: '',
    description: '',
    table: cardData.board,
    column: cardData.columnName,
    comments: [],
    users: [],
    creator: '',
  });
  const modalElement: HTMLElement = modalObject.render();

  modalElement.classList.remove('hidden');
  // const deleteCardButton: HTMLButtonElement = modalElement.querySelector('');

  modalElement.addEventListener('click', (event) => {
    const elements: NodeListOf<Element> | null = document.querySelectorAll('.overlay.absolute.top-0');
    elements.forEach((element) => {
      if (element === event.target) {
        modalElement.classList.add('hidden');
      }
    });
    if (event.target instanceof HTMLElement) {
      if (event.target.innerText === 'Save') {
        const values: string[] | null = getFromModal(modalElement);
        const userId: string | null = localStorage.getItem('id');
        if (values && userId) {
          modalObject.name = values[0];
          modalObject.description = values[1];
          new Card({
            container: column,
            name: values[0],
            description: values[1],
            table: cardData.board,
            column: cardData.columnName,
            comments: [],
            users: [],
            creator: userId,
          }).render();

          cardHttp.createCard({
            name: values[0],
            description: values[1],
            table: cardData.board,
            column: cardData.columnName,
            comments: [],
            users: [],
            creator: userId,
          });
        }
      }
      if (event.target.innerText === 'Discard') {
        modalElement.classList.add('hidden');
      }
    }
  });
}
