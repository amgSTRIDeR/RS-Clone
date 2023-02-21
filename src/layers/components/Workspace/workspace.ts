import { IBoard, IUserPayload } from '../../../api/interfaces';
import createElement from '../../../utils/create-element';
import BoardSVG from '../Board/Board-svg';
import SignModal from '../sign-modal/sign-modal';
import { boardHttp } from '../../../api/board';
import Board from '../Board/Board';

export default class Workspace {
  container: HTMLElement;

  currentUser: IUserPayload;

  signupModal: SignModal;

  constructor(container: HTMLElement, currentUser: IUserPayload) {
    this.container = container;
    this.currentUser = currentUser;
    this.signupModal = new SignModal(this.container, 'up');
  }

  public async render() {
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
      'w-[30%]',
    ]);

    const workspaceLinkBoards = createElement(
      'a',
      [
        'workspace__aside-item',
        'flex',
        'items-center',
        'w-full',
        'h-[70px]',
        'gap-2',
        'px-6',
        'py-2',
        'hover:bg-basic-3',
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
        'h-[70px]',
        'gap-2',
        'px-6',
        'py-2',
        'fill-secondary',
        'hover:bg-basic-3',
        'cursor-pointer',
      ],
      '',
      `${BoardSVG.BoardsTemplates}<span>Templates</span>`,
    );

    workspaceAside.append(workspaceLinkBoards, workspaceLinkTemplates);

    const workspaceMain = createElement('ul', [
      'workspace__main',
      'flex',
      'flex-col',
      'gap-8',
      'w-[60%]',
      'pl-[3vw]',
    ]);

    const workspaceBoardsList = createElement('ul', [
      'workspace__boards-list',
      'flex',
      'flex-wrap',
      'gap-5',
    ]);

    const workspaceBoardsTitle = createElement(
      'h3',
      ['w-full', 'uppercase', 'font-medium', 'contrast-title'],
      '',
      'Your boards',
    );
    workspaceBoardsList.append(workspaceBoardsTitle);

    const workspaceStarredList = createElement('ul', [
      'workspace__starred-list',
      'flex',
      'flex-wrap',
      'gap-5',
    ]);

    const workspaceStarredTitle = createElement(
      'h3',
      ['w-full', 'uppercase', 'font-medium', 'contrast-title'],
      '',
      'Your starred boards',
    );

    workspaceStarredList.append(workspaceStarredTitle);

    this.currentUser.tables.forEach(async (boardId) => {
      const board: IBoard = await boardHttp.getBoard(boardId);
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
          'contrast-border',
          'shadow-md',
          'hover:bg-basic-3',
          'cursor-pointer',
        ],
        '',
        `<div>${board.name}</div>`,
      );
      workspaceBoard.addEventListener('click', () => {
        const newBoard: Board = new Board(this.container, board);
        this.container.innerHTML = '';
        newBoard.render();
      });
      workspaceBoardsList.append(workspaceBoard);
    });

    this.currentUser.tables.forEach(async (boardId) => {
      const board = await boardHttp.getBoard(boardId);
      if (board.starred) {
        const workspaceStarred = createElement(
          'li',
          [
            'workspace__board',
            'flex',
            'justify-center',
            'items-center',
            'w-[200px]',
            'h-[100px]',
            'border',
            'contrast-border',
            'shadow-md',
            'hover:bg-basic-3',
            'cursor-pointer',
          ],
          '',
          `<div>${board.name}</div>`,
        );
        workspaceStarred.addEventListener('click', () => {
          const newBoard: Board = new Board(this.container, board);
          this.container.innerHTML = '';
          newBoard.render();
        });
        workspaceStarredList.append(workspaceStarred);
      }
    });

    workspaceMain.append(workspaceBoardsList, workspaceStarredList);
    workspaceWrapper.append(workspaceAside, workspaceMain);

    this.container.append(workspaceWrapper);
  }
}
