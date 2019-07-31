## 王者荣耀移动端官网

该项目是一个王者荣耀的webappp项目

#### 运行项目
``` bash
# 克隆项目到本地并进入项目文件夹
$ git clone https://github.com/dongsanjin/king_web.git
$ cd king_web

# 启动服务器端服务
$ cd server
$ npm install
$ npm run serve

# 启动web端服务
$ cd ../web
$ npm install
$ npm run serve
```

admin中的代码是负责从后台界面添加数据的，如果需要进入后台，请输入以下代码
```

$ cd admin
$ npm install
$ npm run serve

```
<!-- 用户名为admin 密码为123456 -->

#### 文件目录

```
├── admin  // 后端管理界面文件夹
|  ├── babel.config.js 
|  ├── package-lock.json
|  ├── package.json
|  ├── public
|  ├── README.md
|  └── src  // 
|     ├── App.vue
|     ├── assets  
|     ├── components  
|     ├── http.js  // http方法封装
|     ├── main.js 
|     ├── plugins  
|     ├── publicStyle.css  // 公共样式
|     ├── router.js  // 后台管理界面路由
|     └── views  
├── package-lock.json
├── preview
├── README.md
├── server  // 服务器端
|  ├── index.js  
|  ├── middleware  // 中间件
|  ├── models  // 数据模型
|  ├── package-lock.json
|  ├── package.json
|  ├── plugins  
|  |  └── db.js  //mongoose插件
|  ├── routes
|  |  ├── admin  // 后台页面路由接口
|  |  └── web  //  前端页面路由接口
|  └── uploads  // 上传图片
└── web  // 前端
   ├── babel.config.js
   ├── package-lock.json
   ├── package.json
   ├── public
   ├── README.md
   ├── src
   |  ├── App.vue
   |  ├── assets
   |  |  ├── iconfont  // icon图标
   |  |  ├── images  // 图片
   |  |  └── scss  // 公共样式
   |  ├── components  // 公共组件
   |  ├── main.js
   |  ├── router.js
   |  └── views
   └── vue.config.js
```

##### 项目还不完整，会后续继续完善
