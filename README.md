# Bug Weight

## Установка для Google Chrome:
1. Скачать репозиторий
2. Открыть [chrome://extensions/]()
3. Включить режим разработчика
4. Нажать "Установить распакованное расширение"
5. Выбрать папку с приложением

## Как работает расчет веса ошибки?
Используется модель расстановки приоритетов 
[Weighted Shortest Job First (WSJF)](https://en.wikipedia.org/wiki/Shortest_job_next#Weighted_shortest_job_first)

Вес (приоритет) высчитывается по формуле: `mass * critical * block`, где:

#### Mass - насколько проблема массовая.
- 1 - единичные случаи воспроизведения ошибки
- 2 - затрагивает группу пользователей
- 3 - затрагивает большое количество пользователей

#### Critical - насколько критичная та область приложения, в которой нашли баг.
- 1 - не критична
- 2 - нормально
- 3 - критична

#### Block - насколько баг блокирует юзер флоу
- 1 - не блокирует
- 2 - блокирует, но есть обходное решение
- 3 - блокирует, нет обходного решения

Максимальный вес - 27, минимальный - 1
