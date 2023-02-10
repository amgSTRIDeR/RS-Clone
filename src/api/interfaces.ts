export interface IUser {
  id: string;
  username: string;
  password: string;
  roles: string[];
  tables: string[];
  cards: string[];
  __v: number;
  description?: string | null;
  name?: string;
}

export interface IUserPayload {
  username: string;
  password: string;
  roles: string[];
  tables: string[];
  cards: string[];
  description?: string | null;
  name?: string;
}

export interface IUserLogin {
  token: string;
}
