/* eslint-disable class-methods-use-this */
import { baseURL, Path } from './variables';
import { IUser, IUserLogin, IUserPayload } from './interfaces';

export class HttpUser {
  async getUser(id: string) {
    const response = await fetch(`${baseURL}${Path.users}${id}`, {
      headers: {
      },
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IUser;
    return data;
  }

  async createUser(username: string, password: string) {
    const response = await fetch(`${baseURL}${Path.userRegistratin}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    return {
      status: response.status,
      data,
    };
  }

  async getUserToken(username: string, password: string) {
    const response = await fetch(`${baseURL}${Path.userLogin}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json().catch((err: Error) => {
      throw err;
    }) as IUserLogin;
    return data;
  }

  // ломает сервер
  async deleteUser(id: string) {
    const response = await fetch(`${baseURL}${Path.users}${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    await response.json().catch((err: Error) => {
      throw err;
    });
  }

  async updateUser(id: string, payload: IUserPayload) {
    const response = await fetch(`${baseURL}${Path.users}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    await response.json().catch((err: Error) => {
      throw err;
    });
  }
}

export const userHttp: HttpUser = new HttpUser();
