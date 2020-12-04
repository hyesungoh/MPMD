# MPMD

###### Most Popular Movies and Drama

#### react + django with IMDB api

---

## Setting

```terminal
pip install djangorestframework
```

```python
# settings.py
INSTALLED_APPS = [
    ...
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ]
}
```

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
