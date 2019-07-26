# 王者荣耀移动端官网

> 该项目是一个王者荣耀的webappp项目

### 运行项目
``` bash
# 克隆项目到本地
$ git clone https://github.com/dongsanjin/king_web.git

# 安装项目依赖
$ cd king_web
$ npm install

# 启动服务器端服务
$ cd server
$ npm run serve

# 启动web端服务
$ cd ../web
$ npm run serve
```

### 效果预览图
项目功能有首页、新闻详情页、英雄详情页
![image](https://github.com/dongsanjin/king_web/preview/articleDetail.png)
![image](https://github.com/dongsanjin/king_web/preview/heroDetail.png)
---

### 文件目录

```
├── admin
|  ├── babel.config.js
|  ├── package-lock.json
|  ├── package.json
|  ├── public
|  ├── README.md
|  └── src
|     ├── App.vue
|     ├── assets
|     ├── components
|     ├── http.js
|     ├── main.js
|     ├── plugins
|     ├── publicStyle.css
|     ├── router.js
|     └── views
├── package-lock.json
├── preview
├── README.md
├── server
|  ├── index.js
|  ├── middleware
|  ├── models
|  ├── package-lock.json
|  ├── package.json
|  ├── plugins
|  |  └── db.js
|  ├── routes
|  |  ├── admin
|  |  └── web
|  └── uploads
└── web
   ├── babel.config.js
   ├── package-lock.json
   ├── package.json
   ├── public
   ├── README.md
   ├── src
   |  ├── App.vue
   |  ├── assets
   |  |  ├── iconfont
   |  |  ├── images
   |  |  └── scss
   |  ├── components
   |  ├── main.js
   |  ├── router.js
   |  └── views
   └── vue.config.js
```

### 项目后续会继续完善，谢谢大家的支持
