import type { Project, Screenshot } from './types'

function shots(
  projectId: string,
  items: Array<{ file: string; alt: string; cover?: boolean }>,
): Screenshot[] {
  return items.map(({ file, alt, cover }) => ({
    src: `/projects/${projectId}/${file}`,
    alt,
    variant: 'desktop',
    ...(cover ? { cover: true } : {}),
  }))
}

export const featuredProjects: Project[] = [
  {
    id: 'freelance-concert',
    title: 'Сайт концерта с магазином',
    shortDescription: 'Коммерческий фриланс: оплата, админка, API и деплой в прод',
    fullDescription:
      'Коммерческий проект для музыкального артиста — интерактивный сайт в пиксель-арт стилистике с магазином мерча и билетами на концерт. Разработал публичную часть: главный экран с диалоговой системой, разделы Shop и Tickets, встроенный плеер, сценарий оформления заказа с выбором ПВЗ СДЭК, количеством товара и переходом к оплате. После покупки пользователь видит номер заказа прямо в интерфейсе. Отдельно собрал админ-панель: сводка по заказам, поиск и фильтры, смена статуса отправки, экспорт, детальная карточка с контактами покупателя и составом заказа. Реализовал светлую и тёмную тему в админке и адаптив для мобильных. Работал один — от вёрстки и клиентской логики до интеграции оплаты и выкладки в прод.',
    category: 'commercial',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Vite', 'SCSS'],
    highlights: [],
    screenshots: shots('freelance-concert', [
      {
        file: 'cover.png',
        alt: 'Главный экран — пиксель-арт лавка и диалог с персонажем',
        cover: true,
      },
      {
        file: '1.png',
        alt: 'Оформление заказа — форма с ПВЗ СДЭК и переходом к оплате',
      },
      {
        file: '2.png',
        alt: 'Подтверждение покупки с номером заказа в диалоге',
      },
      {
        file: '3.png',
        alt: 'Админ-панель — таблица заказов в тёмной теме',
      },
      {
        file: '4.png',
        alt: 'Админ-панель — таблица заказов в светлой теме',
      },
      {
        file: '5.png',
        alt: 'Карточка заказа — покупатель, доставка и смена статуса',
      },
    ]),
    period: 'Апрель — Июнь 2026',
    role: 'Frontend-разработчик — публичная часть, магазин, оплата, админ-панель',
  },
  {
    id: 'skillswap',
    title: 'SkillSwap',
    shortDescription: 'Сервис обмена навыками: каталог, профили и страницы навыков',
    fullDescription:
      'Командный дипломный проект Яндекс Практикума — сервис, где люди обмениваются навыками: один учит, другой учится. Участвовал в разработке интерфейса по Feature-Sliced Design: главная с каталогом и фильтрами по категориям, полу и городу, карточки пользователей с навыками «может научить» и «хочет научиться», пошаговая регистрация из трёх экранов с загрузкой фото навыка и модальным предпросмотром. Настраивал Storybook для переиспользуемых компонентов, интегрировал react-datepicker и Swiper, верстал формы, дропдауны и модальные окна. Работал через pull request\'ы и код-ревью в команде из нескольких разработчиков.',
    category: 'team',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Vite', 'SCSS', 'Storybook'],
    highlights: [],
    screenshots: shots('skillswap', [
      {
        file: 'cover.png',
        alt: 'Каталог — карточки пользователей и фильтры по навыкам',
        cover: true,
      },
      {
        file: '1.png',
        alt: 'Регистрация — шаг 1, вход через email или соцсети',
      },
      {
        file: '2.png',
        alt: 'Регистрация — шаг 2, профиль и категории навыков',
      },
      {
        file: '3.png',
        alt: 'Регистрация — выбор даты рождения в календаре',
      },
      {
        file: '4.png',
        alt: 'Регистрация — шаг 3, описание навыка и загрузка фото',
      },
      {
        file: '5.png',
        alt: 'Предпросмотр предложения перед публикацией',
      },
    ]),
    githubUrl: 'https://github.com/timrad05/SkillSwap_44_4',
    role: 'Frontend-разработчик — UI-компоненты, Storybook, интеграции',
  },
  {
    id: 'stellar-burgers',
    title: 'Stellar Burgers',
    shortDescription: 'SPA с защищённым роутингом, Redux и лентой заказов',
    fullDescription:
      'Финальный проект курса по React — SPA космической бургерной. Реализовал конструктор бургера с подсчётом стоимости и правилами сборки, ленту заказов с обновлением в реальном времени, полный цикл авторизации и защищённые маршруты личного кабинета. Настроил модальные окна поверх текущей страницы — детали ингредиента, оформление и подтверждение заказа, информация о заказе в ленте. Сделал профиль с инлайн-редактированием полей и историю заказов. Состояние конструктора, заказов и пользователя — в Redux Toolkit; редьюсеры покрыл unit-тестами Jest, ключевые сценарии — E2E на Cypress.',
    category: 'pet',
    stack: ['React', 'Redux', 'TypeScript', 'Webpack', 'Jest', 'Cypress'],
    highlights: [],
    screenshots: shots('stellar-burgers', [
      {
        file: 'cover.png',
        alt: 'Конструктор бургера — выбор ингредиентов и оформление',
        cover: true,
      },
      {
        file: '1.png',
        alt: 'Оформление заказа — модальное окно загрузки',
      },
      {
        file: '2.png',
        alt: 'Подтверждение заказа с номером',
      },
      {
        file: '3.png',
        alt: 'Лента заказов и статистика выполненных',
      },
      {
        file: '4.png',
        alt: 'Личный кабинет — редактирование профиля',
      },
      {
        file: '5.png',
        alt: 'Модалка с составом и статусом заказа',
      },
      {
        file: '6.png',
        alt: 'Страница входа в аккаунт',
      },
      {
        file: '7.png',
        alt: 'История заказов пользователя',
      },
    ]),
    githubUrl: 'https://github.com/timrad05/stellar-burgers',
    role: 'Frontend-разработчик — SPA, Redux, тестирование',
  },
  {
    id: 'weblarek',
    title: 'WebLarek',
    shortDescription: 'Интернет-магазин на MVP-архитектуре с интеграцией API',
    fullDescription:
      'Учебный интернет-магазин «Web-Larёk» на архитектуре MVP. Спроектировал модели каталога и покупателя, связал View и Presenter через EventEmitter — модели и представления не знают друг о друге напрямую. Реализовал витрину товаров с категориями, модальные окна карточки товара и корзины с пересчётом суммы, двухшаговое оформление: способ оплаты, адрес доставки, контакты и отправка заказа на API. Обработал товары «Бесценно» без цены, валидацию форм и экран успешной покупки с очисткой корзины. Вёрстка на SCSS, логика на TypeScript, сборка Webpack.',
    category: 'pet',
    stack: ['TypeScript', 'Webpack', 'SCSS', 'HTML'],
    highlights: [],
    screenshots: shots('weblarek', [
      {
        file: 'cover.png',
        alt: 'Витрина магазина — каталог товаров',
        cover: true,
      },
      {
        file: '1.png',
        alt: 'Модалка товара — описание и добавление в корзину',
      },
      {
        file: '2.png',
        alt: 'Корзина — список товаров и оформление',
      },
      {
        file: '3.png',
        alt: 'Оформление — способ оплаты и адрес доставки',
      },
      {
        file: '4.png',
        alt: 'Оформление — контакты и оплата',
      },
      {
        file: '5.png',
        alt: 'Успешный заказ — подтверждение и списание синапсов',
      },
    ]),
    githubUrl: 'https://github.com/timrad05/weblarek',
    role: 'Frontend-разработчик — MVP-архитектура, API',
  },
]

export const secondaryProjects: Project[] = [
  {
    id: 'blog-customizer',
    title: 'Blog Customizer',
    shortDescription: 'Панель кастомизации шрифтов, цветов и тем через CSS-переменные',
    fullDescription: '',
    category: 'pet',
    stack: ['React', 'TypeScript'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/blog-customizer',
  },
  {
    id: 'mesto',
    title: 'Mesto',
    shortDescription: 'CRUD карточек и профиля с API и валидацией форм',
    fullDescription: '',
    category: 'pet',
    stack: ['JavaScript', 'Webpack'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/mesto-project-ff',
  },
]

export const learningProjects: Project[] = [
  {
    id: 'ono-tebe-nado',
    title: 'Оно тебе надо',
    shortDescription: 'Лендинг аукциона: вёрстка по макету, сетка и адаптив',
    fullDescription: '',
    category: 'learning',
    stack: ['HTML', 'CSS'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/ono-tebe-nado-fd',
  },
  {
    id: 'slozhno-sosredotochitsya',
    title: 'Сложно сосредоточиться',
    shortDescription: 'Адаптивная вёрстка с CSS-темами и кастомными элементами',
    fullDescription: '',
    category: 'learning',
    stack: ['HTML', 'CSS'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/slozhno-sosredotochitsya-fd',
  },
  {
    id: 'posmotri-v-okno',
    title: 'Посмотри в окно',
    shortDescription: 'Учебный лендинг: формы, валидация и доступность',
    fullDescription: '',
    category: 'learning',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/posmotri-v-okno-fd',
  },
]

/** Все проекты из резюме — для раскрывающегося списка (порядок как в CV) */
const featuredById = Object.fromEntries(
  featuredProjects.map((project) => [project.id, project]),
) as Record<string, Project>

export const portfolioProjects: Project[] = [
  featuredById['freelance-concert'],
  featuredById['skillswap'],
  featuredById['weblarek'],
  featuredById['stellar-burgers'],
  ...secondaryProjects,
  ...learningProjects,
]
