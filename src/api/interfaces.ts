export interface IUserPayload {
  username: string;
  password: string;
  roles: string[];
  tables: string[];
  cards: string[];
  description?: string | null;
  name?: string;
}

export interface IUser extends IUserPayload {
  id: string;
  __v: number;
}

export interface IUserLogin {
  token: string;
}

export interface IBoardPayload {
  name: string,
  description: string,
  cards: string[],
  date: Date,
  imageURL: string,
  creator: string,
  members: string[],
  columns: string[]
}

export interface IBoard extends IBoardPayload {
  id: string;
  __v: number;
}

export interface ICardPayload {
  name: string,
  description: string,
  table: string,
  column: string,
  comments: string[],
  users: string[],
  creator: string,
}

export interface ICard extends ICardPayload {
  id: string;
  __v: number;
}

export interface IMsg {
  msg: string;
}