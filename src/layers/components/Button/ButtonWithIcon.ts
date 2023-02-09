import createElement from '../../../utils/createe-element';
import Button from './Button';
import { IButtonWithIconProps } from './Button.types';

export class ButtonWithIcon extends Button {
  svg: string;

  constructor({ value, className, onClick, svg }: IButtonWithIconProps) {
    super({ value, className, onClick });
    this.svg = svg ?? '';
  }

  render() {
    const ButtonInstance = createElement(
      'button',
      ['button', 'p-[3px]', 'h-[30px]', 'cursor-pointer', 'hover:fill-secondary-focus'],
      '',
      `${this.svg}`,
    );

    return ButtonInstance;
  }
}
