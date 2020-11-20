<template>
  <div id="app">
    <!-- 头部 -->
    <app-header :poiInfo="poiInfo"></app-header>
    <!-- 导航 -->
    <app-nav :commentNum="commentNum"></app-nav>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/header/header'
import Nav from './components/nav/nav'
import axios from 'axios'
export default {
  components: {
    "app-header": Header,
    "app-nav": Nav,
  },
  data () {
    return {
      poiInfo: {},
      commentNum: 0
    }
  },
  created () {
    axios.get('/api/goods').then((res) => {
      this.poiInfo = res.data.data.poi_info;
      // console.log(this.poiInfo);
    }),
      axios.get('/api/ratings').then((res) => {
        this.commentNum = res.data.data.comment_num
        // console.log(this.poiInfo);
      })
  }
}
</script>

<style src="./common/css/font-awesome.css"></style>
<style src="../static/css/reset.css"></style>
<style>
</style>
