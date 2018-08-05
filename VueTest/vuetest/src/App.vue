<template>
  <div>
    <div :class="music_btn" id="audioBtn" @click="backyinyaoClick" ></div>
    <audio src="../static/sucai/backyinyao.mp3" id="musicPlay" autoplay="" loop=""></audio>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view  ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      music_btn: 'audioon'
    }
  },
  methods: {
    backyinyaoClick: function () {
      let audio = document.querySelector('#musicPlay')
      if (this.music_btn === 'audioon') {
        this.music_btn = 'audioff'
        audio.pause()
      } else {
        this.music_btn = 'audioon'
        audio.play()
      }
    }
  }
}

</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
#audioBtn {
  position: absolute;
  background-size: 100%;
  width: 0.6rem;
  height: 0.6rem;
  top: 1%;
  right: 1%;
  z-index: 99;
  animation: xuanzhuan 1s infinite linear;
}
.audioon{
  background: url("../static/sucai/on.png") no-repeat;
}
.audioff{
  background: url("../static/sucai/off.png") no-repeat;
}
@keyframes xuanzhuan {
 from{
    transform: rotate(0deg);
 }
 to{
    transform: rotate(360deg);
  }
}
</style>
