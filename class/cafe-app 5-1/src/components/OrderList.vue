<template>
  <div>
    <div class="order">주문 내역</div>
    <p class="total">총 {{ totalOrderCount }}건: {{ totalOrderPrice }}원</p>
    <ul><OrderListItem v-for="(order,index) in orderList" :key="index" :order="order"/></ul>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem.vue'
export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList  
    },
    totalOrderCount: function () {
      return this.$store.state.orderList.length
    },
    totalOrderPrice: function () {
      return this.$store.getters.totalPrice
    },
  },
}

</script>

<style>
.order{
  font-size: 25px;
  font-weight: bold;
  margin: 40px 10px 10px 20px;
  text-align: left;
}
.total{
  font-weight: bold;
  margin: 10px 10px 10px 20px;
}
</style>