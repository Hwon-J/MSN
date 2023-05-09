<template>
  <div class="menu-list">
    <p class="Choice">1. 음료를 고르세요.</p>
    <div class="color" v-for="(menu,index) in menuList" 
    :key="index" :class="{ isSelected : menu.selected}" @click="selectMenu(menu)">
      <MenuListItem :menu="menu"/>
    </div>
    
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem.vue'
export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
        return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu: function (menu) {
      this.menuList = this.menuList.map((item) => {
        if (item === menu) {
          item.selected = true
        } else {
          item.selected = false
        } 
        return item
      })
    },
  },
}
</script>

<style>
.Choice {
    margin: 30px 15px 10px ;
    text-align: left;
    font-size: 25px;
    font-weight: bold;
}
.isSelected{
    background-color: #198754;
    color: white;
}
.color{
  width: 95%;
  height: 70px;
  margin: 15px auto;
  border-radius: 10px;
}
</style>