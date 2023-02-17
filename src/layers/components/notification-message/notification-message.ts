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
    'fixed',
    'ease-in-out',
    'duration-1000',
    'z-100',
    'pointer-events-none',
    'hidden',
  ]);

  static render(container: HTMLElement) {
    NotificationMessage.messageWrapper.appendChild(NotificationMessage.message);
    container.appendChild(NotificationMessage.messageWrapper);
  }

  static showNotification(message: string) {
    NotificationMessage.message.textContent = message;
    NotificationMessage.messageWrapper.classList.remove('hidden');
    setTimeout(() => {
      NotificationMessage.messageWrapper.classList.add('hidden');
    }, 5000);
  }
}
