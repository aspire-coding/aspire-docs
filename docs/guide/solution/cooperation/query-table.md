# 关于query-table 可搜索表格组件的前后端同学协作

## 请求字段

* 当前页： `page_no`
* 页数： `page_size`
* 排序字段： `prop`
* 排序方式： `order`

例：

```js
{
  page_no: 1,
  page_size: 20,
  prop: 'created_at',
  order: 'ascending'  // ascending or descending
}
```

**温馨提示：当前`order` 为 `null` 时则表示按默认排序方式。**

## 响应字段

* 总条数： `count`
* 表格数组：`result`

例：

```js
{
  count: 1041, // 总条数
  result: []
}
```