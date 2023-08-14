# education-platform--JFD

# PRODUCTION:

## 1. Создать volume для базы данных Postgres

    docker volume create db_volume

## 2. перейти в каталог Docker и запустить платформу    

    cd docker
    docker compose up -d

## 3. При изменении кода express api или react app

требуется пересоздать контейнеры: Для этого надо удалить соответствующий контейнер и image, например для бэкенда:

    docker rm api
    docker image rm docker-api

После этого повторить п.2
