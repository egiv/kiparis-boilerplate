# Кипарисс-боейлерплейт

Простой бойлейрплейт для старта проекта на стеке React с рабочим названием Кипарисс (React, Jest, Webpack, CSS-module)

## Быстрый старт

Для локального запуска и разработки:

-   Склонировать репозиторий
    ```bash
    git clone https://gitlab.com/egiv/kipariss-boilerplate.git
    ```

Для работы с проектом необходим Node.js версии >= 12 и npm. Используем пакетный менеджер npm:

Установка зависимостей:

```sh
npm i && husky install
```

Старт проекта в режиме разработки:

```sh
npm run dev
```

## Доступные скрипты

В дериктории проекта вы можете запустить следующие команды:

-   запустить все тесты

    ```sh
    npm run test
    ```

-   линтеры (prettier, eslint, style)

    ```sh
    npm run check
    ```

-   запуск staged-хука (настроены: test, check, pre-push, также выполняется при коммитах)

    ```sh
    npm run lint-staged
    ```

-   запуск build-сборки в папку dist

    ```sh
    npm run build
    ```

## Особенности

-   алиасы вида: `import TestComponent from "components/test-component"`
-   минимальный набор для старта фронтенд-разработки и тестирования на jest
-   настроены пре-коммит хук lint-stages и commit-msg (в директории .husky)

### Базовая структура:

-   `assets`: медиа-файлы
-   `components`: компоненты
-   `pages`: странички
-   `routes`: пути
-   `styles`: глобальные стили, подключение шрифтов
-   в корне находятся минимальные и достаточные конфиги для проекта.

Во время добавления путей, родублировать их в файлах: .eslintrc.json, tsconfig.json (поле paths), и webpack.common.ts

Egor Ivanov [Telegram Channel](https://t.me/egoriv).
