import createElement from '../../../utils/create-element';

export default class NotificationMessage {
  static message = createElement('p', ['font-medium']);

  static messageWrapper = createElement('div', [
    'top-20',
    'right-20',
    'bg-secondary/50',
    'rounded',
    'text-primary-focus',
    'px-[100px]',
    'py-[50px]',
    'absolute',
    'z-100',
    'opacity-0',
    'ease-in-out',
    'duration-1000',
    'z-20',
  ]);

  static render(container: HTMLElement) {
    NotificationMessage.messageWrapper.appendChild(NotificationMessage.message);
    container.appendChild(NotificationMessage.messageWrapper);
  }

  static showNotification(message: string) {
    NotificationMessage.message.textContent = message;
    NotificationMessage.messageWrapper.classList.remove('opacity-0');
    setTimeout(() => {
      NotificationMessage.messageWrapper.classList.add('opacity-0');
    }, 5000);
  }
}
