import i18next from 'i18next';

export default function changeLang(lang: string, ...buttons: HTMLElement[]) {
  buttons.forEach((e) => {
    if (e.id === `button-${lang}`) {
      e.classList.remove('hover:text-secondary-focus');
      e.classList.add('text-primary');
    } else {
      e.classList.add('hover:text-secondary-focus');
      e.classList.remove('text-primary');
    }
  });

  i18next.changeLanguage(lang);
}
