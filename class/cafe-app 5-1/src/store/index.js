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
    totalPrice(state) {
      let total = 0
      state.orderList.forEach((order) => {
        let menuPrice = order.menu.price
        let sizePrice = order.size.price
        let optionPrice = 0
        order.options.forEach((option) => {
          optionPrice += option.price * option.count
        })
        total += (menuPrice + sizePrice + optionPrice)
      })
      return total
    }
  },
  mutations: {
    ADD_ORDER: function (state) {
      const menu = state.menuList.find((menu) => menu.selected)
      const size = state.sizeList.find((size) => size.selected)
      const options = JSON.parse(JSON.stringify(state.optionList.filter((option) => option.count > 0)));
      const order = { menu, size, options }
      state.orderList.push(order)
      state.optionList.forEach((option) => option.count = 0)
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
    updateOptionList: function (state, newOption) {
      let optionToUpdate = state.optionList.find((option) => option.type === newOption.type)
      if (optionToUpdate) {
        optionToUpdate.count += newOption.count
        if (optionToUpdate.count <= 0) {
          state.optionList = state.optionList.filter((option) => option !== optionToUpdate)
        }
      } else if (newOption.count > 0) {
        state.optionList.push(newOption)
      }
    },
    LOAD_ORDERS(state) {
      const localStorageOrders = localStorage.getItem('orders')
      const parsedOrders = JSON.parse(localStorageOrders)
      state.orderList = parsedOrders
    }
  },
  actions: {
    addOrder(context){
      context.commit('ADD_ORDER')
      context.dispatch('saveOrdersToLocalStorage')
    },
    increaseOptionList(context, option){
      const newOption = {
        type: option.type,
        price: option.price,
        count: 1
      }
      context.commit('updateOptionList', newOption)
      context.dispatch('saveOrdersToLocalStorage')
    },
    decreaseOptionList(context, option){
      const newOption = {
        type: option.type,
        price: option.price,
        count: -1
      }
      context.commit('updateOptionList', newOption)
      context.dispatch('saveOrdersToLocalStorage')
    },
    saveOrdersToLocalStorage(context) {
      const jsonOrders = JSON.stringify(context.state.orderList)
      localStorage.setItem('orders', jsonOrders)
    },
    loadOrders(context) {
      context.commit('LOAD_ORDERS')
    }
  },
  modules: {
  }
})