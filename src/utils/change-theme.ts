export default function changeTheme(
  theme: string,
  bodyElement: HTMLElement,
  ...buttons: HTMLElement[]
) {
  bodyElement.setAttribute('data-theme', theme);

  buttons[0].classList.add('fill-primary');
  buttons[0].classList.remove('hover:fill-secondary-focus');

  for (let i = 1; i < buttons.length; i += 1) {
    buttons[i].classList.remove('fill-primary');
    buttons[i].classList.add('hover:fill-secondary-focus');
  }
}
