import { IUserPayload } from '../../../api/interfaces';
import createElement from '../../../utils/create-element';
import BoardSVG from '../Board/Board-svg';
import SignModal from '../sign-modal/sign-modal';
import { boardHttp } from '../../../api/board';

export default class Workspace {
  container: HTMLElement;

  currentUser: IUserPayload;

  signupModal: SignModal;

  constructor(container: HTMLElement, currentUser: IUserPayload) {
    this.container = container;
    this.currentUser = currentUser;
    this.signupModal = new SignModal(this.container, 'up');
  }

  public render(): void {
    const workspaceWrapper = createElement('div', [
      'workspace',
      'flex',
      'justify-center',
      'h-fit',
      'w-full',
      'sm:px-[2vw]',
      'lg:px-[6vw]',
      'py-[4vh]',
    ]);

    const workspaceAside = createElement('div', [
      'workspace__aside',
      'flex',
      'flex-wrap',
      'w-[30%]',
    ]);

    const workspaceLinkBoards = createElement(
      'a',
      [
        'workspace__aside-item',
        'flex',
        'items-center',
        'w-full',
        'h-auto',
        'gap-2',
        'px-6',
        'py-2',
        'hover:bg-gray-100',
        'cursor-pointer',
      ],
      '',
      `${BoardSVG.Boards}<span>Boards</span>`,
    );

    const workspaceLinkTemplates = createElement(
      'a',
      [
        'workspace__aside-item',
        'flex',
        'items-center',
        'w-full',
        'h-auto',
        'gap-2',
        'px-6',
        'py-2',
        'hover:bg-gray-100',
        'cursor-pointer',
      ],
      '',
      `${BoardSVG.BoardsTemplates}<span>Templates</span>`,
    );

    workspaceAside.append(workspaceLinkBoards, workspaceLinkTemplates);

    const workspaceMain = createElement('ul', [
      'workspace__main',
      'flex',
      'w-[60%]',
      'pl-[3vw]',
    ]);

    const workspaceABoardsList = createElement('ul', [
      'workspace__boards-list',
      'flex',
      'flex-wrap',
      'gap-5',
    ]);

    this.currentUser.tables.forEach(async (boardId) => {
      const board = await boardHttp.getBoard(boardId);
      const workspaceBoard = createElement(
        'li',
        [
          'workspace__board',
          'flex',
          'justify-center',
          'items-center',
          'w-[200px]',
          'h-[100px]',
          'border',
          'border-indigo-200',
          'shadow-md',
          'hover:bg-gray-100',
          'cursor-pointer',
        ],
        '',
        `<div>${board.name}</div>`,
      );
      workspaceABoardsList.append(workspaceBoard);
    });

    workspaceMain.append(workspaceABoardsList);
    workspaceWrapper.append(workspaceAside, workspaceMain);

    this.container.append(workspaceWrapper);
  }
}
