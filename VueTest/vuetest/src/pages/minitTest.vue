<template>
    <div>
      <mt-button type="default" @click.native="handleClick" >default</mt-button>
      <img src='../../static/img/logo.png' />
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  name: 'minitTest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClick: function () {
      MessageBox('提示', '操作成功')
    }
  }
}
</script>
