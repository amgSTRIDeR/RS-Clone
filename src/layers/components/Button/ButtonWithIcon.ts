import createElement from '../../../utils/createe-element';
import Button from './Button';
import { IButtonWithIconProps } from './Button.types';

export default class ButtonWithIcon extends Button {
  svg?: string;

  constructor({
    value,
    className,
    onClick,
    svg,
  }: IButtonWithIconProps) {
    super({ value, className, onClick });
    this.svg = svg;
  }

  render() {
    const ButtonInstance = createElement(
      'button',
      [
        'button',
        'flex',
        'items-center',
        'gap-2',
        'w-[100px]',
        'h-[30px]',
        'p-[3px]',
        'rounded',
        'border-primary',
        'text-primary',
        'border-2',
        'hover:text-secondary-focus',
        'hover:border-primary-focus',
        'hover:bg-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
        `${this.className[0]}`,
      ],
      '',
      `${this.svg} <span>${this.value}</span>`,
    );
    return ButtonInstance;
  }
}