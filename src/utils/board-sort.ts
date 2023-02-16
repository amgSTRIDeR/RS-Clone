import { boardHttp } from '../api/board';
import { IBoard } from '../api/interfaces';

export default async function boardSort() {
  const response: IBoard[] = await boardHttp.getBoards();
  const arrStarred: IBoard[] = [];
  const arrNotStarred: IBoard[] = [];
  response.forEach((table) => {
    if (table.starred) {
      arrStarred.push(table);
    } else {
      arrNotStarred.push(table);
    }
  });
  const finalResp: IBoard[] = [...arrStarred.sort(), ...arrNotStarred.sort()];
  return finalResp;
}
