<template>
    <div class='wenjuan' >
      <div style="height:10rem;width:100%;display:flex; flex-direction: row;justify-content:center;">
        <transition name="showimg">
            <img v-show="loadimg" class="mainimg showimg-enter-active" :src="'../../static/img/'+imgsrc" />
        </transition>
      </div>
    <div  style="height:2rem;display:flex; flex-direction: row; align-items:center;">
      <span>问题:谁是最帅的人?</span>
    </div>
    <div class="xuxian"></div>
    <div style="display:flex; flex-direction: row;justify-content:center;flex-wrap:wrap;" >
      <mt-button type="primary" class="xuanxiang" @click.native="handleClick" ><div class="xuanxiangText">选项A:猛哥</div></mt-button>
 <mt-button type="primary" class="xuanxiang" @click.native="handleClick" ><div class="xuanxiangText">选项B:大猛哥</div></mt-button>
  <mt-button type="primary" class="xuanxiang" @click.native="handleClick" ><div class="xuanxiangText">选项C:张猛</div></mt-button>
    </div>
      <div class="xuxian" style="margin-top: 1rem;" ></div>
    </div>
</template>

<script>
// import { MessageBox } from 'mint-ui'
export default {
  name: 'minitTest',
  data () {
    return {
      loadimg: true,
      imgsrc: 'sjw.png'
    }
  },
  methods: {
    handleClick: function () {
      this.loadimg = !this.loadimg
      this.imgsrc = 'sjw.png'
      let vm = this
      setTimeout(function () { vm.loadimg = true }, 1000)
      // MessageBox('提示', '操作成功')
    }
  }
}
</script>

<style>
.mainimg{
  margin: 0px auto;
  height:10rem;
}
.xuxian{
  border-bottom: blue 3px dashed;
}
.wenjuan{
  font-size:0.7rem;
  font-weight: bold;
  color:blue;
}
.xuanxiang{
  margin-top: 0.1rem;
  color: #fff;
  width:98%;
}
.xuanxiangText{
  text-align: left;
}
.showimg-enter-active {
  animation: bounce-in 1s ease-out;
}
.showimg-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform-origin: top left;
    transform: rotate(-180deg);
  }
  100% {
    transform-origin: top left;
    transform: rotate(3deg);
  }
}
</style>
