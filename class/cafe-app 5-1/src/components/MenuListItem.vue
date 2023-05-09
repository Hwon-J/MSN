<template>
  <div class="menubox">
    <div class="inner" >
    <img v-bind:src="menu.image" alt="">
    </div>
    <div class="inner">
    <span>{{ menu.title }}</span>
    </div>
    <div class="inner">
    <span>{{ menu.price }}원</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
}
</script>

<style>
.menubox{
    width: 100%;
    height: 70px;
    border: 2px black solid;
    border-radius: 10px;
    text-align: center;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    line-height: 48px;
}
.menubox img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
}
.inner {
    margin: 8px;
    font-weight:bold
}
</style>