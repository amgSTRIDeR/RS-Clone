// import Card from '../Card/Card';
import CardModal from '../layers/components/CardModal/CardModal';
import getFromModal from './get-info-from-card';

export default function openNewCard(column: HTMLElement, columnName: string) {
  const modalObject: CardModal = new CardModal({
    container: column,
    name: '',
    description: '',
    table: '',
    column: columnName,
    comments: [],
    users: [],
    creator: '',
  });
  const modalElement: HTMLElement = modalObject.render();

  modalElement.classList.remove('hidden');

  modalElement.addEventListener('click', (event) => {
    const elements: NodeListOf<Element> | null = document.querySelectorAll('.overlay.absolute.top-0');
    elements.forEach((element) => {
      if (element === event.target) {
        modalElement.classList.add('hidden');
      }
    });
    if (event.target instanceof HTMLElement) {
      if (event.target.innerText === 'Save') {
        // взять всю информацию
        // добавить ее в объект окна
        // добавить ее в объект карточки
        getFromModal(modalElement);

        // const newCard: HTMLElement = new Card({
        //     container: column,
        //     name: '',
        //     description: card.description,
        //     table: this.board.name,
        //     column: columnName,
        //     comments: [...card.comments],
        //     users: cardUserList,
        //     creator: creatorUser,
        //   }).render();
      }
    }
  });
}
