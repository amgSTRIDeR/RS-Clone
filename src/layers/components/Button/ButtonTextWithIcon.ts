import createElement from '../../../utils/create-element';
import Button from './Button';
import { IButtonTextWithIconProps } from './Button.types';

export default class ButtonTextWithIcon extends Button {
  svg?: string;

  constructor({
    value,
    className,
    onClick,
    svg,
  }: IButtonTextWithIconProps) {
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
        'w-max',
        'h-[30px]',
        'p-[3px]',
        'pr-[5px]',
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

    ButtonInstance.addEventListener('click', () => {
      this.onClick();
    });

    return ButtonInstance;
  }
}
