# MPMD

###### IMDB API 기준 인기있는 영화, 드라마 상위 100개를 보여주는 Web

#### react + django with IMDB api

-   ##### Backend
-   ##### Frontend
-   ##### Setting

---

## 완성본

#### navigation, route with animation

![nav_gif](https://user-images.githubusercontent.com/26461307/101295447-1b8ada80-3861-11eb-9c8f-4dde5b4c78b6.gif)

#### card with animation

![card_gif](https://user-images.githubusercontent.com/26461307/101295449-1d549e00-3861-11eb-80fb-815dd21d97c9.gif)

#### modal with animation, link trailer

![modal_gif](https://user-images.githubusercontent.com/26461307/101295452-1e85cb00-3861-11eb-81d4-23699a31fda2.gif)

## React + Django Setting

-   Django REST

```terminal
pip install djangorestframework
```

```python
# settings.py
INSTALLED_APPS = [
    ...
    'rest_framework',
]

# 추가
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ]
}
```

-   HTTP 접근제어 규약(CORS : Cross-Origin Resource Sharing)

```terminal
pip install django-cors-headers
```

```python
# settings.py
INSTALLED_APPS = [
    ...
    'corsheaders',
]
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
]

# 추가
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://localhost:8000',
]
```

## Selenium

-   [IMDB](https://www.imdb.com/) api는 영화에 대한 정보가 아닌 IMDB url을 제공하여 데이터 가공

```terminal
pip install selenium
```

```python
from selenium import webdriver

driver = webdriver.Chrome('chromedriver')
driver.get(URL)
...

driver.close()
```

-   Selenium을 이용하여 JS를 이용하여 비동기적이거나 늦게 불러와지는 데이터를 BeautifulSoup를 이용하여 Parsing

```python
# driver.close() 전에
page_source = driver.page_source

html = BeautifulSoup(page_source, "html.parser")
# 이후 데이터 가공하여 해당 Model에 저장
```

## Celery + Redis

-   ##### [본인 repo 참조](https://github.com/hyesungoh/Django_Asynchronous_with_Celery_Redis)

-   schedule을 이용하여 12시간마다 영화와 드라마들을 Refresh하게 구현

```python
app.conf.beat_schedule = {
    'refresh_movies_every_12hours': {
        'task': 'task_refresh_movies',
        'schedule': 43200.0,  # 12시간
    },

    'refresh_dramas_every_12hours': {
        'task': 'task_refresh_dramas',
        'schedule': 43200.0,  # 12시간
    },
}
```

## Issue

##### react config 폴더 보이게 하는 법

```terminal
npm eject
```

##### 아래 부분이 잘못됐다는 에러

```terminal
react var type = mime.lookup(path)
```

해결 방법

```terminal
npm install mime-types
```

```js
// node_modules/send/index.js 상단 부분 수정
var mime = require("mime-types");
```

##### serializer의 fields를 못찾는 에러

```terminal
Original exception text was: 'QuerySet' object has no attribute 'field_name'.
```

해결 방법

```python
# many=True 속성을 추가
serializer = MovieSerializer(movies, many=True)
```
