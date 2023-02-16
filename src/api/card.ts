import { baseURL, Path } from './variables';
import { ICardPayload, ICard, IMsg } from './interfaces';
// ICardPayload, ICard, IMsg

export class HttpCard {
  async createCard(payload: ICardPayload) {
    const response = await fetch(`${baseURL}${Path.cards}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IMsg;
    return data;
  }

  async updateCard(id: string, payload: ICardPayload) {
    const response = await fetch(`${baseURL}${Path.cards}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IMsg;
    return data;
  }

  async getCard(id: string) {
    const response = await fetch(`${baseURL}${Path.cards}${id}`, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as ICard;
    return data;
  }

  async getCards() {
    const response = await fetch(`${baseURL}${Path.cards}`, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as ICard[];
    return data;
  }

  // ломает сервер
  async deleteCard(id: string) {
    const response = await fetch(`${baseURL}${Path.cards}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    await response.json().catch((err: Error) => {
      throw err;
    }) as IMsg;
  }
}

export const cardHttp: HttpCard = new HttpCard();
