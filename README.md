# vue3.0

> 启动

###### 方法1

```
npm init vite-app 项目名
cd 项目名
npm run dev
```
> > 优点：快！

> >  缺点：需要自行安装vue-router vuex，容易出错 不稳定的感觉
###### 方法2

```
npm install -g @vue/cli
vue create 项目名
vue add vue-next //重点 执行这行,会把2.0代码改为3.0的, vue-router, vuex会变成4.0的
cd 项目名
npm run serve
```
> > 老司机轻车熟路


---

> 方法二 走一个

1. vue create appname「<---项目名称」

```
?  Your connection to the default npm registry seems to be slow.
   Use https://registry.npm.taobao.org for faster installation? Yes
```
> 是否选择用淘宝镜像 下载速度更快？可以自行选择

2.  配置方式
```
Vue CLI v4.4.6
? Please pick a preset: (Use arrow keys)
❯ default (babel, eslint) 
  Manually select features 
```
> 配置默认or手动选择，这里我选择手动配置一下

3. 配置选择
```
Vue CLI v4.4.6
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to t
oggle all, <i> to invert selection)
❯◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```
> 空格选择 上下移动
```
     ◯ Babel //转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。 
     ◯ TypeScript// TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行，官网：https://www.tslang.cn/
     ◯ Progressive Web App (PWA) Support// 渐进式Web应用程序
     ◯ Router // vue-router（vue路由）
     ◯ Vuex // vuex（vue的状态管理模式）
     ◯ CSS Pre-processors // CSS 预处理器（如：less、sass）
     ◯ Linter / Formatter // 代码风格检查和格式化（如：ESlint）
     ◯ Unit Testing // 单元测试（unit tests）
     ◯ E2E Testing // e2e（end to end） 测试
```
4. some选择 
```
? Use history mode for router? (Requires proper server setup for index fallback 
in production) (Y/n) 「是否使用历史路由」
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported 
by default): Less
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated confi
g files
? Save this as a preset for future projects? Yes
? Save preset as: 「这里不多啰嗦了」
```
4.启动
```
 $ cd vue3.0
 $ npm run serve
 「进入目录 run起来」
 ···
 DONE  Compiled successfully in 51ms
 App running at:
 - Local:   http://localhost:8080/ 
 - Network: http://10.4.86.217:8080/
 「启动成功」
```
