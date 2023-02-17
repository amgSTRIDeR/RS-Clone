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
          workspaces: 'Workspaces',
          starred: 'Starred',
          create: 'Create',
          search: 'Search',
          accountInfo: 'Account info',
          lightTheme: 'Light theme',
          darkTheme: 'Autumn theme',
          blackTheme: 'Night theme',
          startHeader: 'Trello brings all your tasks, teammates, and tools together',
          startText: 'Keep everything in the same place - even if your team isn’t.',
          signupButton: 'Sign Up',
          videoButton: 'Watch video',
          rsschoolLogo: "Visit RSSchool's page",
          githubAleksei: "Visit Aleksei's GitHub",
          githubAnastasia: "Visit Anastasiya's GitHub",
          githubValeria: "Visit Valeria's GitHub",
          loading: 'Loading...',
          sign_name: 'Account name',
          sign_password: 'Password',
          sign_in_header: 'Sign in to your account',
          sign_in: 'Sign in',
          sign_in_redirect: 'Don\'t have an account yet?',
          sign_up_header: 'Create an account',
          sign_up: 'Create',
          sign_up_redirect: 'Already have an account?',
          password_error: 'Error',
          usernameHint: 'must consist Latin alphabet, 3 to 20 characters',
          passwordHint: 'must be between 8 and 15 characters',
        },
      },
      ru: {
        translation: {
          navIcon: 'Показать/Скрыть меню',
          logo: 'На главную',
          login: 'Войти',
          workspaces: 'Рабочие области',
          starred: 'Избранное',
          create: 'Создать',
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
          loading: 'Загрузка...',
          sign_name: 'Имя аккаунта',
          sign_password: 'Пароль',
          sign_in_header: 'Вход в аккаунт',
          sign_in: 'Войти',
          sign_in_redirect: 'Ещё нет аккаунта?',
          sign_up_header: 'Создание аккаунта',
          sign_up: 'Создать',
          sign_up_redirect: 'Уже есть аккаунт?',
          usernameHint: 'должно состоять из латиницы, от 3 до 20 символов',
          passwordHint: 'должен содержать от 8 до 15 символов',
        },
      },
      uk: {
        translation: {
          navIcon: 'Показати/Сховати меню',
          logo: 'На головну',
          login: 'Логін',
          workspaces: 'Робочі областіи',
          starred: 'Вибране',
          create: 'Створити',
          search: 'Пошук',
          accountInfo: 'Iнформація про обліковий запис',
          lightTheme: 'Світла тема',
          darkTheme: 'Осіння тема',
          blackTheme: 'Нічна тема',
          startHeader: 'Trello об’єднує всі ваші завдання, товаришів по команді та інструменти',
          startText:
            'Зберігайте все в одному місці - навіть якщо ваша команда не знаходиться поряд.',
          signupButton: 'Приєднатися',
          videoButton: 'Подивитись відео',
          rsschoolLogo: 'Відвідати сторінку RSSchool',
          githubAleksei: 'Відвідати GitHub Олексія',
          githubAnastasia: 'Відвідати GitHub Анастасії',
          githubValeria: 'Відвідати GitHub Валерії',
          loading: 'Завантаження...',
          sign_name: 'Ім\'я облікового запису',
          sign_password: 'Пароль',
          sign_in_header: ' Увійти до свого облікового запису',
          sign_in: ' Увійти',
          sign_in_redirect: 'Ще немає облікового запису?',
          sign_up_header: 'Створення облікового запису',
          sign_up: 'Створити',
          sign_up_redirect: 'Вже є обліковий запис?',
          usernameHint: 'користувача має складатися з латини, від 3 до 20 символів',
          passwordHint: 'має містити від 8 до 15 символів',
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
