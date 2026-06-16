import type { ContactLink, Project, Skill } from './types'

export const featuredProjects: Project[] = [
  {
    id: 'freelance-concert',
    title: 'Концерт и мерч-магазин',
    shortDescription: 'Коммерческий фриланс: лендинг концерта и магазин мерча с оплатой',
    fullDescription: '',
    category: 'commercial',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Vite', 'SCSS'],
    highlights: [],
    screenshots: [],
    period: 'Апрель — Июнь 2026',
    role: 'Frontend-разработчик',
  },
  {
    id: 'skillswap',
    title: 'SkillSwap',
    shortDescription: 'Сервис обмена навыками: каталог, профили и страницы навыков',
    fullDescription: '',
    category: 'team',
    stack: ['React', 'TypeScript', 'Storybook'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/SkillSwap_44_4',
    role: 'Frontend-разработчик',
  },
  {
    id: 'stellar-burgers',
    title: 'Stellar Burgers',
    shortDescription: 'SPA с защищённым роутингом, Redux и лентой заказов',
    fullDescription: '',
    category: 'pet',
    stack: ['React', 'Redux', 'TypeScript', 'Jest', 'Cypress'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/stellar-burgers',
    role: 'Frontend-разработчик',
  },
  {
    id: 'weblarek',
    title: 'WebLarek',
    shortDescription: 'Интернет-магазин на MVP-архитектуре с интеграцией API',
    fullDescription: '',
    category: 'pet',
    stack: ['TypeScript', 'Webpack'],
    highlights: [],
    screenshots: [],
    githubUrl: 'https://github.com/timrad05/weblarek',
    role: 'Frontend-разработчик',
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

export const skills: Skill[] = [
  { id: 'react', name: 'React', icon: 'react' },
  { id: 'typescript', name: 'TypeScript', icon: 'typescript' },
  { id: 'redux', name: 'Redux', icon: 'redux' },
  { id: 'vite', name: 'Vite', icon: 'vite' },
  { id: 'scss', name: 'SCSS', icon: 'scss' },
  { id: 'git', name: 'Git', icon: 'git' },
]

export const contacts: ContactLink[] = [
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/d2IIy',
    type: 'telegram',
  },
  {
    id: 'email',
    label: 'timrad05@mail.ru',
    href: 'mailto:timrad05@mail.ru',
    type: 'email',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/timrad05',
    type: 'github',
  },
]
