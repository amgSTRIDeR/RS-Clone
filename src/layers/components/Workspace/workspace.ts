import { IBoard } from '../../../api/interfaces';
import createElement from '../../../utils/create-element';
import BoardSVG from '../Board/Board-svg';
import { boardHttp } from '../../../api/board';
import Board from '../Board/Board';
import getUserInfo from '../../../utils/get-user-info';
import LoadingModal from '../loading-modal/loading-modal';

export default class Workspace {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public async render() {
    LoadingModal.show();
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

    const workspaceAside = createElement('div', ['workspace__aside', 'w-[30%]']);

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
      `${BoardSVG.Boards}<span data-i18n="boards">Boards</span>`,
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
      `${BoardSVG.BoardsTemplates}<span data-i18n="templates">Templates</span>`,
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

    const workspaceBoardsTitle = createElement('h3', [
      'w-full',
      'uppercase',
      'font-medium',
      'contrast-title',
    ]);
    workspaceBoardsTitle.setAttribute('data-i18n', 'yourBoards');
    workspaceBoardsList.append(workspaceBoardsTitle);

    const workspaceStarredList = createElement('ul', [
      'workspace__starred-list',
      'flex',
      'flex-wrap',
      'gap-5',
    ]);

    const workspaceStarredTitle = createElement('h3', [
      'w-full',
      'uppercase',
      'font-medium',
      'contrast-title',
    ]);
    workspaceStarredTitle.setAttribute('data-i18n', 'starredBoards');
    workspaceStarredList.append(workspaceStarredTitle);
    const currentUser = await getUserInfo();
    currentUser.tables.forEach(async (boardId) => {
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
          'hover:scale-105',
          'cursor-pointer',
          'bg-cover',
          'bg-center',
        ],
        '',
        `<div class="rounded p-[5px] text-primary bg-base-100 bg-opacity-70">${board.name}</div>`,
      );

      if (board.imageURL) {
        workspaceBoard.style.backgroundImage = `url(${board.imageURL})`;
      }

      workspaceBoard.addEventListener('click', () => {
        const newBoard: Board = new Board(this.container, board);
        this.container.innerHTML = '';
        newBoard.render();
      });
      workspaceBoardsList.append(workspaceBoard);
    });

    currentUser.tables.forEach(async (boardId) => {
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
    LoadingModal.hide();
  }
}
