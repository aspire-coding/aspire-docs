# 开发规范

## :star::star::star: 开发命名规范

为了统一开发规范，文件以及文件夹命名统一，用'-'（横杠）的形式进行命名。
例如`custom-select.vue`的`.vue`文件 或者`custom-select`文件夹。路由名称也请使用`/select/custom-select`的形式命名。

## 代码规范

* `js`字符串用单引号，`html`属性用双引号
* 代码尽量往纵向发展，一行不要太长
* 不要在钩子函数中写大量业务代码
* 异步使用`aysnc await`语法

## 提交代码说明

[原文](https://ruby-china.org/topics/15737)

```
feat 新功能（feature）
fix 修补bug
docs 文档（documentation）
style 格式（不影响代码运行的变动）
refactor 重构（即不是新增功能，也不是修改bug的代码变动）
test 增加测试
chore 构建过程、辅助工具的变动
perf 提高性能
```

## 开发的一些约定和说明

* 代码规范，按照`eslint`的规则来，做到`no warning` 和`no error`
* `vue`单文件组件代码规范，`html`、`script`、`style`的位置顺序`html` > `script` > `style`
* 写业务代码的时候，好好想一下请求的数据是不是应该放store， 能少放就少放，避免store数据臃肿。

## 共有组件

共有组件统一在`components`文件家里面创建并全局调用


