import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      { 
        title: '아메리카노',
        price: 3000,
        selected: true, //초기값
        image: 'https://source.unsplash.com/featured/?americano'
      },
      { 
        title: '라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte',
      },
      { 
        title: '카푸치노',
        price: 4500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?capucchino',
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: true, // 초기값 설정
      },
      {
        name: 'medium',
        price: 500,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      },
    ],
    optionList: [
      {
        type: '샷',
        price: 500,
        count: 0
      },
      {
        type: '바닐라 시럽',
        price: 500,
        count: 0
      },
      {
        type: '카라멜 시럽',
        price: 500,
        count: 0
      },
    ],
  },
  getters: {
  },
  mutations: {
    ADD_ORDER:function (state) {
      const menu = state.menuList.find((menu) => menu.selected)
      const size = state.sizeList.find((size) => size.selected)
      const order = { menu, size }
      state.orderList.push(order)
      console.log(state.orderList)
    },
    updateMenuList: function (state, selectedMenu) {
      state.menuList =  state.menuList.map((menu) => {
        if (menu.title === selectedMenu.title) {
          menu.selected = true
        } 
        else {
          menu.selected = false
        }
        return menu
      })
    },
    updateSizeList:function (state, selectedSize) {
      state.sizeList = state.sizeList.map((size) => {
        if (size.name === selectedSize.name) {
          size.selected = true
        } 
        else {
          size.selected = false
        }
        return size
      })
    },
    // updateOptionList: function (state, newOption) {
    // }
  },
  actions: {
    addOrder(context){
      context.commit('ADD_ORDER')
    }
  },
  modules: {
  }
})