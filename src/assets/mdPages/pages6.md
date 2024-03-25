# axios和ajax

### ajax、axios原理

### axios二次封装

1. .
2. .

```javascript
import axios from 'axios'

const instance = axios.create({
    baseURL:'localhost',
    timeout:500,
    headers:{
        'Content-Type':'application/json'
    }
})

//请求前
instance.interceptors.request.use(
    config => {   
    },
    error => {
        return Promise.reject(error)
    }
)
//相应后
instance.interceptors.response.use(
    response =>{
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance
```