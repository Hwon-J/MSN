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
      return this.order.menu.price + this.order.size.price
    },
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
  margin-top: 20px;
  margin-right: 10px;
}
</style>