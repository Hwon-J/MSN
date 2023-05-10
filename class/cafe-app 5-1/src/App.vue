<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div class="cont">
      <div class="part bg-light">
        <div class="box"><MenuList /></div>
        <div class="box"><SizeList /></div>
        <div class="box"><OptionList /></div>
      </div>
      <button type="button" class="btn btn-success" @click="cart">장바구니 담기</button>
      <div class="section bg-light">
        <div><OrderList /></div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList.vue'
import SizeList from '@/components/SizeList.vue'
import OrderList from '@/components/OrderList.vue'
import OptionList from '@/components/OptionList.vue'
export default {
  name: 'App',
  components: {
    MenuList, 
    SizeList,
    OrderList,
    OptionList,
  },
  methods:{
    cart(){
      this.$store.dispatch('addOrder')
    }
  },
  created() {
    this.$store.dispatch('loadOrders')
  },
}
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

h1{
  text-align: center;
}
ul {
  margin: 10px 10px 10px 20px !important ;
  padding: 0 !important;
  list-style: none;
}

.cont{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.part {
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 80%;
  margin: 20px 0px;
  border-radius: 10px;

}
.box{
  width: 31%;
  background-color: white;
  border-radius: 10px;
  margin: 13px 0px;
}

button{
  width: 80%;
}
.section{
  width: 80%;
  border-radius: 10px;
  margin: 20px auto;
}
</style>
