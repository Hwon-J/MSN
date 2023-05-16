<template>
  <div class="contentbox">
    <div class="inner">
      <h1>모든 할일</h1>
      <hr>
      <p v-for="(todo, index) in todosList" :key="index">
        <label :for="'check_test_box_'+index" class="todo-checkbox">
          <input :id="'check_test_box_'+index" type="checkbox" v-model="todo.done" style="display: none;">
          <i :class="[todo.done ? 'bi bi-check-circle' : 'bi bi-circle']"></i>
        </label>
        <span class="todo-content" @click="toggleTodoDone(todo)">{{ todo.content }}</span>
        <i :class="[todo.isImportant ? 'bi bi-star-fill' : 'bi bi-star']" @click="toggleTodoImportant(todo)"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllTodoPage',
  computed: {
    todosList() {
      return this.$store.state.todos.list;
    }
  },
  methods: {
    toggleTodoDone(todo) {
      todo.done = !todo.done;
    },
    toggleTodoImportant(todo) {
      todo.isImportant = !todo.isImportant;
    }
  }
}
</script>

<style>
.contentbox {
  width: 80%;
  height: 500px;
  border: 2px black solid;
  border-radius: 10px;
}

.inner p {
  height: 50px;
  border: 1px rgb(202, 196, 196) solid;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* 체크박스에 적용할 스타일 */
input[type="checkbox"] {
  display: none;
}

.todo-checkbox {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  margin-left: 5px;
}

label:before {
  font-family: "bootstrap-icons";
  display: inline-block;
  content: "\f058";
  margin-right: 5px;
  font-weight: bold;
  color: #777777;
}
.bi-check-circle{
  color: #39b54a;
}

input[type="checkbox"]:checked + label:before {
  content: "\f05d";
  color: #39b54a;
}

.bi-star-fill {
  color:#fdd835;
  margin-left: auto;
  margin-right: 15px;
}
.bi-star {
  color:#fdd835;
  margin-left: auto;
  margin-right: 15px;
}
</style>
