# timrad.tech

Сайт-визитка и портфолио.

**Статус:** в разработке  
**Сайт:** [timrad.tech](https://timrad.tech)

## Стек

React, TypeScript, Vite, SCSS Modules

## Запуск

```bash
npm install
npm run dev
```

## Структура (FSD-lite)

Каждый слайс — папка с `index.ts` (публичный API) и сегментами:

```
slice/
├── index.ts      # что можно импортировать снаружи
├── ui/           # компоненты
├── model/        # данные, хуки, контекст
└── lib/          # чистые хелперы
```

Слои (сверху вниз — только импорты вниз):

| Слой | Назначение | UI |
|------|------------|-----|
| `app` | точка входа, глобальные стили | нет |
| `pages` | сборка страниц из виджетов | `pages/*/ui/` |
| `widgets` | секции сайта (hero, header…) | `widgets/*/ui/` |
| `features` | интерактив (тема, модалка проекта) | `features/*/ui/` |
| `entities` | доменные сущности (проект, скилл) | `entities/*/ui/` |
| `shared` | **только** общий UI-kit без бизнес-логики | `shared/ui/` |

**Важно:** не весь UI лежит в `shared`. Кнопка — в `shared`, карточка проекта — в `entities/project/ui`, модалка — в `features/project-modal/ui`. Это нормальная FSD-логика.

Импорты снаружи слайса — только через `@/widgets/header`, `@/entities/project`, не через глубокие пути.
