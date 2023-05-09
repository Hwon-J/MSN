<template>
  <div>
    <p class="Choice">2. 사이즈를 고르세요.</p>
    <div class="color" v-for="(size,index) in sizeList" 
    :key="index"  :class="{ isSelected : size.selected}" @click="onSelectMenu(size)">
      <SizeListItem :size="size"/>
    </div>  
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem.vue'
export default {
  name: 'SizeList',
  components: {
    SizeListItem
  },
  methods: {
    onSelectMenu: function (size) {
      this.sizeList = this.sizeList.map((item) => {
        if (item === size) {
          item.selected = true
        } else {
          item.selected = false
        } 
        return item
      })
    },
  },
  computed: {
    sizeList: function () {
        return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>