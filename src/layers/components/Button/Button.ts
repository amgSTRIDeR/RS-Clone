import createElement from '../../../utils/createe-element';
import { IButtonProps } from './Button.types';

export default class Button {
  value: string = '';

  className: string[] = [''];

  onClick: Function | null;

  constructor({ value, className, onClick }: IButtonProps) {
    this.value = value ?? '';
    this.className = className ?? [''];
    this.onClick = onClick ?? null;
  }

  render() {
    const ButtonInstance = createElement(
      'button',
      [
        'button',
        'w-[30px]',
        'h-[30px]',
        'p-[3px]',
        'rounded',
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

    ButtonInstance.addEventListener('click', () => this.onClick);

    return ButtonInstance;
  }

  onClickHandle = () => this.onClick;
}
