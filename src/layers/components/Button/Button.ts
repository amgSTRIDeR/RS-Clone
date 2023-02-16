import createElement from '../../../utils/create-element';
import { IButtonProps } from './Button.types';

export default class Button {
  value: string = '';

  className: string[] = [''];

  onClick: Function;

  constructor({ value, className, onClick }: IButtonProps) {
    this.value = value ?? '';
    this.className = className ?? [''];
    this.onClick = onClick;
  }

  render() {
    const ButtonInstance = createElement(
      'button',
      [
        'button',
        'flex',
        'justify-center',
        'items-center',
        'min-w-[100px]',
        'w-auto',
        'h-[30px]',
        'p-[3px]',
        'rounded',
        'text-center',
        'text-primary',
        'border-2',
        'border-primary',
        'hover:text-secondary-focus',
        'hover:border-primary-focus',
        'hover:bg-primary-focus',
        'transition',
        'ease-in-out',
        'delay-50',
      ],
      '',
      `${this.value}`,
    );

    ButtonInstance.addEventListener('click', () => {
      this.onClick();
    });

    return ButtonInstance;
  }
}
