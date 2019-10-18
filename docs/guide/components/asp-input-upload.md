# asp-input-upload  上传文本框
一个文本样式的上传组件，**用于单文件的上传**，适配基本表单样式的简单组件，一般用于表单附件上传功能，也可单独使用
### 样例视图
![效果图](../images/input-upload/input-upload1.png)

![效果图](../images/input-upload/input-upload2.png)

### 使用案例

```vue
<template>
  <asp-input-upload v-model="form.fileName"
    placeholder="请上传文件"
    url="/v1/KnowledgeManage/upload"
    Size=20
    button="上传"
    tips="自动上传"
    @response="getRes"
    @onSuccess="onSuccess"
    @onError="onError">
  </asp-input-upload>
</template>
<script>
export default {
  mixins: [common],
  props: ['dialogData'],
  data () {
    return {
      form: {
        fileName: '',
        file: ''
      }
    }
  },
  methods: {
    getRes (res) {
      console.log(res)
      this.form.file = res
    },
    onSuccess (params) {
      console.log(params)
    },
    onError (params) {
      console.log(params)
    }
  }
}
</script>
```

  ### Attributes
  参数|说明|类型|默认值
  --|:--:|:--:|--:
  placeholder|文本框默认值|String|多文件请上传压缩包
  url|上传地址|String|null
  accept|允许上传文件类型|Array|null
  Size|最大上传文件大小(M)|Number|30
  button|按钮缺省文字|String|点击上传
  tips|提示文字，为空不显示|String|null

  ### Methods
  绑定方法名|说明|类型
  --|:--:|:--:
  v-model|绑定文件名，可自定义上传文件名称|text|function(fileName)
  response|获取文件上传后的返回结果，一般用于接收文件上传路径，也可获取其他结果后进行后续操作|function(res)
  onSuccess|成功回调|function(fileParams)
  onError|失败回调|function（fileParams）
