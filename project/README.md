## MDMP Back-end

#### route

##### /api = none

##### /api/movies get = [ {movie_data} * 100 ]

##### /api/dramas get = [ {drama_data} * 100 ]

##### /api/actor post = [ {actor_data} * 5 ]

---

### 배운 점

-   django를 이용하여 REST API를 구현 및 사용하는 방법

-   selenium을 이용하여 동적 크롤링하는 방법

-   celery와 redis를 이용하여 비동기 큐를 사용하는 데 조금 더 편해짐

-   CBV를 조금이나마 더 다룰 수 있게 됨

-   React의 form 값을 사용 할 수 있게 됨

```python
def post(self, request):
    value = request.data.get("input_name")
    ...
```

-   CSRF 토큰을 React에서 사용 할 수 있게 됨

```jsx
import axios from "axios";
import React from "react";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].replace(" ", "");
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}

const CSRFToken = () => {
    const csrftoken = getCookie("csrftoken");
    return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};
export default CSRFToken;
```

---

### 부족한 점

-   CBV의 개념과 사용 방법의 이해와 적용이 부족함

---

### 자랑할 점
