import { IBoard } from '../../../api/interfaces';
import createElement from '../../../utils/create-element';
import BoardSVG from '../Board/Board-svg';
import { boardHttp } from '../../../api/board';
import Board from '../Board/Board';
import getUserInfo from '../../../utils/get-user-info';
import LoadingModal from '../loading-modal/loading-modal';
import NotificationMessage from '../notification-message/notification-message';

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
          'relative',
          'group',
        ],
        '',
        `<div class="rounded p-[5px] text-primary bg-base-100 bg-opacity-70">${board.name}</div>
         <svg class="opacity-0 group-hover:opacity-100 bg-base-100 rounded-full hover:scale-150 absolute top-2 right-2 cursor-pointer fill-primary" style="width: 1em; height: 1em;vertical-align: middle; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" title="Delete board"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/></svg>`,
      );

      if (board.imageURL) {
        workspaceBoard.style.backgroundImage = `url(${board.imageURL})`;
      }

      workspaceBoard.addEventListener('click', async (e) => {
        if (e.target instanceof HTMLElement) {
          const newBoard: Board = new Board(this.container, board);
          this.container.innerHTML = '';
          newBoard.render();
        }
        if (e.target instanceof SVGElement) {
          LoadingModal.show();
          await boardHttp
            // eslint-disable-next-line no-underscore-dangle
            .deleteBoard(`${board._id}`)
            .then((resp) => {
              NotificationMessage.showNotification(`Board '${board.name}' - ${Object.values(resp)}`);
              window.location.hash = 'board';
            })
            .catch((err) => {
              NotificationMessage.showNotification(`${Object.values(err)}: ${Object.values(err)}`);
            })
            .finally(() => {
              LoadingModal.hide();
            });
        }
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
