<template>
  <div class="cartcontrol">
    <span class="fa fa-minus-circle"
          style="color:#b4b4b4;"
          v-show="food.count"
          @click.stop.prevent="decreaseCart"></span>
    <span class="cart-count"
          style="font-size:12px;"
          v-show="food.count">{{food.count}}</span>
    <span class="fa fa-plus-circle"
          style="color:#ffd161;"
          @click.stop.prevent="increaseCart"></span>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object,
      default: {}
    }
  },
  methods: {
    decreaseCart () {
      this.food.count--;
    },
    increaseCart () {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
      console.log(this.food.count);
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
/* @import url("../../common/css/font-awesome.css"); */
</style>
