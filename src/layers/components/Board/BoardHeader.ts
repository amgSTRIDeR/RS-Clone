import createElement from '../../../utils/create-element';
import testCLick from '../../../utils/test-click';
import ButtonTextWithIcon from '../Button/ButtonTextWithIcon';
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
      'pt-3',
      'pb-5',
    ]);
    const boardName = createElement('h1', ['board__heading'], '', 'Board name');
    const boardHeaderCol = createElement('div', [
      'board__header-col',
      'flex',
      'flex-auto',
      'gap-4',
    ]);

    const ButtonStar = new ButtonWithIcon({
      className: [],
      onClick: testCLick,
      svg: BoardSVG.Star,
    });

    const ButtonFilter = new ButtonTextWithIcon({
      value: 'Filter',
      className: [],
      // onClick: testCLick,
      svg: BoardSVG.Filter,
    });

    const ButtonDots = new ButtonWithIcon({
      className: [],
      onClick: testCLick,
      svg: BoardSVG.Dots,
    });

    boardHeaderCol.append(ButtonStar.render(), ButtonFilter.render());
    header.append(boardName, boardHeaderCol, ButtonDots.render());
    this.container.append(header);

    return header;
  }
}
