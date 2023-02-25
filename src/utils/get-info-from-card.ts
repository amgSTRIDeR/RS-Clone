export default function getFromModal(modalCard: HTMLElement): string[] | null {
  const cardName: HTMLInputElement | null = modalCard.querySelector('.card-modal__title');
  const cardDescription: HTMLInputElement | null = modalCard.querySelector('.board__desc-text');
  if (cardName && cardDescription) {
    return [cardName.value, cardDescription.value];
  }
  return null;
}
