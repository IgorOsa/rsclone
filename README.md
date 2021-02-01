# RS Clone App - Memorio

Memorio App - приложение-клон Memrise.com для финального проекта RS School Clone Wars. Построено с использованием React, NodeJS + Express и Typescript.

Проект был сгенерирован с использованием [Nx](https://nx.dev) в виде моно-репо (фронт и бэк в одном репозицтории). Поэтому в ветке `master` находится `initial commit`, созданный указанным инструментом. Текуща рабочая версия приложения размещена в ветке `develop`.

Демо текущей рабочей версии доступно по ссылке - <https://memorio.ml>

## Как запустить приложение локально

1.Склонировать репозиторий командой:

`git clone -b develop https://github.com/IgorOsa/rsclone`

2.Зайти в директорию приложения:

`cd rsclone`

3.Убедиться что текущая ветка `develop`

`git status`

```
On branch develop
Your branch is up to date with 'origin/develop'.
```

4.Установить зависимости:

`npm i`

5.Запустить бэкэнд сервер:

`npm run api`

6.В отдельном терминале запустить сервер разработки для фронт-приложения:

`npm run dev`

7.Открыть браузер по ссылке <http://localhost:4200/>

## Запуск unit тестов

Для запуска unit tests через [Jest](https://jestjs.io) выполните комманду:

`nx test memorio`
