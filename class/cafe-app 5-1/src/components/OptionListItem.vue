<template>
  <div class = "optionbox">
    <div class="inner">
      {{ option.type }}
    </div>
    <div class="another">
      <div class="but" @click="decrease">-</div>
      <div class="deco">{{ option.count }}</div>
      <div class="but" @click="increase">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.commit('updateOptionList', 'increase')
    },
    // decrease() {
    //   if (option.count > 0) {
    //     option.count--
    //   }
    // },
  },
}
</script>

<style>
.optionbox{
    width: 95%;
    height: 70px;
    border: 2px black solid;
    border-radius: 10px;
    text-align: center;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
}
.optionbox .inner {
  line-height: 50px 
}
.another {
  display: flex;
  align-items: center;
  margin: 8px 15px;
  
}
.deco{
  font-size: 20px;
  margin: 0 10px;
}
.but {
  position: relative;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color:rgb(232, 227, 227);
  border: 1px black solid;
}
</style>