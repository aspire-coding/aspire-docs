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