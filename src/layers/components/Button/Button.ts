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
      ['button', 'p-[3px]', 'h-[30px]', 'cursor-pointer', 'hover:fill-secondary-focus'],
      '',
      `${this.value}`,
    );

    return ButtonInstance;
  }

  handleClick() {
    return this.onClick;
  }
}
