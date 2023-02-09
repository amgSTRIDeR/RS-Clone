import i18next from 'i18next';

export default function initI18next() {
  i18next.init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          navIcon: 'Show/Hide menu',
          logo: 'To main',
          login: 'Log In',
          starred: 'Starred',
          workspaces: 'Workspaces',
          search: 'Search',
          accountInfo: 'Account info',
          lightTheme: 'Light theme',
          darkTheme: 'Autumn theme',
          blackTheme: 'Night theme',
          startHeader: 'Trello brings all your tasks, teammates, and tools together',
          startText: 'Keep everything in the same place - even if your team isn’t.',
          signupButton: 'Sign Up',
          videoButton: 'Watch video',
          rsschoolLogo: 'Visit RSSchool\'s page',
          githubAleksei: 'Visit Aleksei\'s GitHub',
          githubAnastasia: 'Visit Anastasiya\'s GitHub',
          githubValeria: 'Visit Valeria\'s GitHub',
        },
      },
      ru: {
        translation: {
          navIcon: 'Показать/Скрыть меню',
          logo: 'На главную',
          login: 'Войти',
          starred: 'Отмеченные',
          workspaces: 'Рабочие области',
          search: 'Поиск',
          accountInfo: 'Информация о аккаунте',
          lightTheme: 'Светлая тема',
          darkTheme: 'Осенняя тема',
          blackTheme: 'Ночная тема',
          startHeader: 'Trello объединяет все ваши задачи, товарищей по команде и инструменты.',
          startText: 'Храните все в одном месте - даже если ваша команда не находится рядом.',
          signupButton: 'Присоединиться',
          videoButton: 'Посмотреть видео',
          rsschoolLogo: 'Посетить страницу RSSchool',
          githubAleksei: 'Посетить GitHub Алексея',
          githubAnastasia: 'Посетить GitHub Анастасии',
          githubValeria: 'Посетить GitHub Валерии',
        },
      },
      uk: {
        translation: {
          navIcon: 'Показати/Сховати меню',
          logo: 'На головну',
          login: 'Логін',
          starred: 'Відзначені',
          workspaces: 'Робочі областіи',
          search: 'Пошук',
          accountInfo: 'Iнформація про обліковий запис',
          lightTheme: 'Світла тема',
          darkTheme: 'Осіння тема',
          blackTheme: 'Нічна тема',
          startHeader: 'Trello об’єднує всі ваші завдання, товаришів по команді та інструменти',
          startText: 'Зберігайте все в одному місці - навіть якщо ваша команда не знаходиться поряд.',
          signupButton: 'Приєднатися',
          videoButton: 'Подивитись відео',
          rsschoolLogo: 'Відвідати сторінку RSSchool',
          githubAleksei: 'Відвідати GitHub Олексія',
          githubAnastasia: 'Відвідати GitHub Анастасії',
          githubValeria: 'Відвідати GitHub Валерії',
        },
      },
    },
  });

  i18next.on('languageChanged', () => {
    document.querySelectorAll('[data-i18n]').forEach((e) => {
      e.innerHTML = i18next.t(`${e.getAttribute('data-i18n')}`);
    });
    document.querySelectorAll('[data-i18n-title]').forEach((e) => {
      e.setAttribute('title', i18next.t(`${e.getAttribute('data-i18n-title')}`));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((e) => {
      e.setAttribute('placeholder', i18next.t(`${e.getAttribute('data-i18n-placeholder')}`));
    });
  });
}
