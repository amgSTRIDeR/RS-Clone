import createElement from '../../../utils/create-element';
// import testCLick from '../../../utils/test-click';
import Button from '../Button/Button';
import ButtonWithIcon from '../Button/ButtonWithIcon';
import BoardSVG from './Board-svg';

export default class BoardHeader {
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  render() {
    const header = createElement('div', [
      'board__header',
      'flex',
      'items-center',
      'w-full',
      'gap-4',
    ]);
    const boardName = createElement('h1', ['board__heading'], '', 'Board name');
    const boardHeaderCol = createElement('div', [
      'board__header-col',
      'flex',
      'flex-auto',
      'gap-4',
    ]);

    const ButtonStar = new Button({
      value: BoardSVG.Star,
      className: [],
      // onClick: testCLick,
    });

    const ButtonFilter = new ButtonWithIcon({
      value: 'Filter',
      className: [],
      // onClick: testCLick,
      svg: BoardSVG.Filter,
    });

    const ButtonDots = new Button({
      value: BoardSVG.Dots,
      className: [],
      // onClick: testCLick,
    });

    boardHeaderCol.append(ButtonStar.render(), ButtonFilter.render());
    header.append(boardName, boardHeaderCol, ButtonDots.render());
    this.container.append(header);
  }
}
