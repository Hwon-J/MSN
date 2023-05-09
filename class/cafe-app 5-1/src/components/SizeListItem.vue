<template>
  <div class="sizebox">
    <div class="inner">
    <span>{{ size.name }}</span>
    </div>
    <div class="inner">
    <span>{{ size.price }}원</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
}
</script>

<style>
.sizebox{
    width: 100%;
    height: 70px;
    border: 2px black solid;
    border-radius: 10px;
    text-align: center;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    line-height: 50px 
}
.sizebox .inner {
    margin: 8px 15px;
    font-weight:bold
}
</style>