import { IUserPayload } from '../api/interfaces';
import { userHttp } from '../api/user';

async function getUserInfo(): Promise<IUserPayload> {
  let currentUser: IUserPayload;
  const userId: string | null = localStorage.getItem('id');
  if (userId) {
    const userInfo: IUserPayload = await userHttp.getUser(userId);
    currentUser = userInfo;
  } else {
    currentUser = {
      username: 'CURRENTUSER',
      password: '12345678',
      roles: ['admin'],
      tables: ['table1', 'table2'],
      cards: [],
    };
  }
  return currentUser;
}

export default getUserInfo;
