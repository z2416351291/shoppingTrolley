<template>
  <div class="nav">
    <router-link to="/goods"
                 class="nav-item">
      商品
      <i class="line"></i>
    </router-link>
    <router-link to="/ratings"
                 class="nav-item">
      评价({{commentNum}})
      <i class="line"></i>

    </router-link>
    <router-link to="/seller"
                 class="nav-item">
      商家
      <i class="line"></i>

    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    commentNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.nav-item {
  flex: 1;
  text-align: center;
  font-size: 13px;
  text-decoration: none;
  color: #666;
  position: relative;
  top: 0px;
  border-bottom: 1px solid #e4e4e4;
}
/* 选中的样式 */
.nav .active {
  color: #ffbb22;
}
.nav .active .line {
  width: 20px;
  height: 2px;
  display: inline-block;
  background-color: #ffbb22;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -10px;
}
</style>
