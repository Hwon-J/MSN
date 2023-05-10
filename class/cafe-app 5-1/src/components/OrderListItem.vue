<template>
  <li>
    <div class="OrderList">
      <div class="list">
        <img v-bind:src="order.menu.image" alt="">
        <div class="two">
          <p>{{ order.menu.title }}</p>
          <p>사이즈: {{ order.size.name }}</p>
        </div> 
      </div>
      <div class="pay">
        <p>가격: {{ totalPrice }}원</p>
        <p>샷 {{ optionCount.shot }}회 | 바닐라 시럽 {{ optionCount.vanilla }}회 | 카라멜 시럽 {{ optionCount.caramel }}회</p>
      </div>   
    </div>
    <hr>
  </li>  
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice: function () {
      return this.order.menu.price + this.order.size.price + this.optionCount.optioncost
    },
    optionCount: function() {
    let shotCount = 0
    let vanillaCount = 0
    let caramelCount = 0
    let optioncost = 0

    for (const option of this.order.options) {
      if (option.type === '샷') {
        shotCount = option.count
        optioncost += option.count*option.price
      } else if (option.type === '바닐라 시럽') {
        vanillaCount = option.count
        optioncost += option.count*option.price
      } else if (option.type === '카라멜 시럽') {
        caramelCount = option.count
        optioncost += option.count*option.price
      }
    }
    return {
      shot: shotCount,
      vanilla: vanillaCount,
      caramel: caramelCount,
      optioncost: optioncost
    };
  }
  },
}
</script>

<style>
hr{
  margin:0;
  
}
.OrderList {
  display: flex;
  justify-content: space-between;
}
.list {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.list img {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
}
.two {
  display: inline-block;
  margin-left: 10px;
  font-size: 13px;
}
.two p {
  margin: 0;
}
.pay{
  display: inline-block;
  font-size: 13px;
  margin-top: 25px;
  margin-right: 10px;
}
.pay p{
  margin: 0;
}
</style>