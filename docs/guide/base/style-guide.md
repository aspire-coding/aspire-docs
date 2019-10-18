# 风格指南

本项目的风格指南主要是参照`vue`官方的风格指南。在真正开始使用该项目之前建议先阅读一遍指南，这能帮助让你写出更规范和统一的代码。

当然也有一些特殊的规范，是不能被 eslint 校验的。需要人为的自己注意，并且来遵循。

## Component

所有的共有组件都放在`@/components`文件夹中，都是以`asp-`开头的,除了`query-table`。

例子：

* `@/components/asp-tabs`
* `@/components/query-table`

## Js

所有的`.js`文件都遵循横线连接 `(kebab-case)`。

例子：

* `@/utils/sort-menu.js`

## Views

所有的文件夹名、文件名(包含`.vue`文件)都请遵循横线连接 `(kebab-case)`。

例子：

* `@/pages/big-screen`

使用横线连接 `(kebab-case)`来命名`views`主要是出于以下几个考虑。

* 横线连接 `(kebab-case)` 也是官方推荐的命名规范之一 [文档](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
* `views`下的`.vue`文件代表的是一个路由，所以它需要和`component`进行区分(`component` 都是大写开头)
* 页面的`url`也都是横线连接的，比如`https://www.xxx.admin/export-excel`，所以路由对应的view应该要保持统一
* 没有大小写敏感问题