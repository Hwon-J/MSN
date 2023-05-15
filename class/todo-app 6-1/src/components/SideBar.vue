<template>
  <div class="side">
    <div class="inner">
      <router-link :to="{ name: 'AllTodoPage' }">모든</router-link> 
      <router-link :to="{ name: 'TodayTodoPage' }">오늘</router-link> 
      <router-link :to="{ name: 'ImportantTodoPage' }">중요</router-link> 
    </div>  
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  methods: {
  }
};
</script>

<style>
.side {
  width: 20%;
  height: 500px;
  border: 2px black solid;
  border-radius: 10px;
  text-align: center;
  margin-right: 15px;
}
.side a{
  font-size: 30px;
  text-decoration: none;
  color: black;
  display: block;
}
.side a:hover{
  color: black;
}
.inner{
  margin: 25px;
}
</style>