<template>
  <div>
    <p class="Choice">3. 옵션을 고르세요.</p>
    <div v-for="(option, index) in optionList" :key="index" class="option-list">
      <OptionListItem :option="option"/>
    </div>
  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem.vue'
export default {
  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList: function () {
      return this.$store.state.optionList
    },
  // methods: {
  //   increase: function () {
  //   },
  //   decrease: function () {
  //   },
  // },
  }
}
</script>

<style>
</style>