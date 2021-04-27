<template>
<div id="app" class="container">
    <h1>Todo List</h1>

    <!-- <input type="text" v-model="todo">
    <input type="submit" value="Add" @click="storeTodo">

    
    <div v-for="(todo, index) in todos" :key="index">
      <input type="text" v-bind:value="todo" ref="content">
      <button @click="updateTodo(index)">Edit</button>
      <button @click="removeTodo(index)">Delete</button>
    </div> -->

    <div v-if="!isEditing">
        <input type="text" v-model="todo">
        <input type="submit" value="Add" @click="storeTodo">
    </div>
    <div v-else>
        <input type="text" v-model="todo">
        <input type="submit" value="Update" @click="updateTodo">
    </div>

    <ol>
        <li v-for="(todo, index) in todos"  :key="index">
            {{ todo }}
            <button @click="editTodo(index, todo)">Edit</button>
            <button @click="removeTodo(index)">Delete</button>
        </li>
    </ol>

</div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      todo: '',
      todos: [],
      selectedTodo: null
    }
  },
  methods: {
      storeTodo() {
          this.todos.push(this.todo)
          this.todo = ''
          console.log(this.todos);
      },

      removeTodo(index) {
          this.todos.splice(index, 1)
      },

      updateTodo() {
          this.todos.splice(this.selectedIndex, 1, this.todo)
          this.todo = ''
          this.isEditing = false
      },

      editTodo(index, todo) {
          this.isEditing = true
          this.todo = todo
          this.selectedIndex = index
      }

      // updateTodo(index) {          
      //     this.todos[index] = this.$refs.content;
      //     console.log(this.todos);
      // }

      // editTodo(index, todo) {
      //     this.isEditing = true
      //     this.todo = todo
      //     this.selectedIndex = index
      // }
  }
  }
</script>

