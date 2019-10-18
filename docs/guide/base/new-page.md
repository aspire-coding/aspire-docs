# 新增页面

新增页面没什么复杂的，在新增`.vue`视图文件的时候，对应的`@/router/`文件中新增对应的路由即可。

## 模块

理论上建议每一个小模块建立一个一级模块文件夹，然后子模块在一级模块文件夹中建立

例子：

```json
...

- src
  - pages
    - report
      - report-1
        - index.vue
        - add.vue
        - edit.vue
        - show.vue
      - report-2
      - report-3
...
```

**如上，建议文件夹名尽量语义化，通俗易懂。**

## 新增 api

在`@/api`文件夹下创建模块对应的`api`服务

## 新增组件

共有组件放在`@/components`文件夹中。如果是某个模块内可公用的业务组件，可根据实际情况在模块文件夹中创建`components`文件夹。

## 样式

每一个`views`组件的样式都是局部的，请加上`scoped`属性，避免造成全局的样式污染。

```css
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
.xxx-container{
  /* name scoped */
  xxx
}
</style>
```