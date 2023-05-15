<template>
  <div id="app">
    <div class="contain">
      <SideBar/>
      <router-view/>
    </div>  
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
    name: 'App',
    components:{
      SideBar,
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;

}
.contain {
  display: flex;
  width: 80%;
  margin: 0 auto;

}
.contain a.router-link-exact-active {
  color: #42b983;
}
a:hover{
  color:black
}
</style>
