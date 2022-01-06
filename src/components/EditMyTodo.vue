<template>
  <li>
    <span>{{ todo.text }}</span>
    <el-input v-model="edittodo" v-if="todoEdit" v-on:keyup.enter="updateTodo(edittodo)"/>
    <button type="button" v-if="!todo.isEdit" v-bind:id="index" v-bind:data="todoEdit" v-on:click="editTodo">
        <i class="fas fa-edit"></i>
    </button>
    <button type="button" v-on:click="removeTodo(index)">
        <i class="fas fa-trash-alt"></i>
    </button>
  </li>
</template>

<script>
export default {
  name: "EditMyTodo",
  props: ['todo', 'index', 'todoEdit'],
  methods: {
    // editTodo(){
    //   console.log(this.index, this.todo, this.todoEdit);
    //   // let index = event.currentTarget.id;
    //   // let span = event.currentTarget.parentNode.firstElementChild;
    //   // let firebase_key = this.todokeys[index];
    //   // let firebase_value = this.todos[index];
    //   //todo.isEdit = true;

    //   //span.remove();
    //   //li.append(EditMyTodo)
    //   // console.log("EditMyTodo:", EditMyTodo);
    // },
  }
};
</script>

<style scoped lang="scss">
</style>
