1. vue脚手架项目
2. node环境+webpack+淘宝镜像
3. 安装vue-cli
4. 用脚手架初始化 vue create 项目名
    app
    - public：静态文件
    - node-moudle
    - src   
        - assets文件夹:静态文件，其他组件共用的静态文件
        - components：通用组件，全局组件
        - App.vue :跟组件
        - main.js 入口文件
5. 项目配置
    - 启动自动在浏览器打开
        "scripts": {
            "serve": "vue-cli-service serve --open",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint"
          },
    - 关闭eslint(语法校验工具)
        在根目录中新建 vue.config.js
        配置如下
         lintOnSave:false
    - src目录简写的方式
        在根目录下创建jsconfig.json
            "paths": {
                  "@/*": [
                    "src/*"
                  ]
                },
6. 路由分析
    vue-router
    拆分组件
    结构+样式（less样式）+静态资源
    创建路由组件
    路由组件和非路由组件的区别
        1. 路由组件一般放在views|pages文件夹下，非路由组件放在components
        2. 路由组件放在router-view中展示，非路由组件作为组件使用
        3. $route(用于访问路由的信息)，$router(一般用于编程时路由跳转，push replace go)
7. 组件的显示和隐藏
    1. v-if
     <Footer v-show="$route.path!='/login'"></Footer>
    2. 路由元信息
        {   path:"/home",
            component:Home,
            meta:{footShow:true}
        }
       <Footer v-show="$route.meta.footShow"></Footer> 
8. 路由跳转
    1. 声明式导航
    2. 编程时跳转
    3. 参数传递：显示传参 query，隐式传参 params。 隐式变为显示需要配置路由参数占位符
      this.$router.push("/search/"+this.key+"?a=1&b=2");
      this.$router.push(`/search/${this.key}?a=2&b=3`)
      this.$router.push({name:"search",params:{key:this.key},query:{a:1,b:2}})
    
