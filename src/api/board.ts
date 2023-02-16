import { baseURL, Path } from './variables';
import { IBoardPayload, IBoard, IMsg } from './interfaces';

export class HttpBoard {
  async createBoard(payload: IBoardPayload) {
    const response = await fetch(`${baseURL}${Path.tables}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IBoardPayload;
    return data;
  }

  async updateBoard(id: string, payload: IBoardPayload) {
    const response = await fetch(`${baseURL}${Path.tables}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IBoardPayload;
    return data;
  }

  // ломает сервер
  async deleteBoard(id: string) {
    const response = await fetch(`${baseURL}${Path.tables}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    await response.json().catch((err: Error) => {
      throw err;
    }) as IMsg;
  }

  async getBoard(id: string) {
    const response = await fetch(`${baseURL}${Path.tables}${id}`, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IBoard;
    return data;
  }

  async getBoards() {
    const response = await fetch(`${baseURL}${Path.tables}`, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IBoard[];
    return data;
  }
}

export const boardHttp: HttpBoard = new HttpBoard();
