<template>
  <!-- if the title and content is too long it will be out of the box. -->
  <div
    @dblclick="$emit('switchFlag', todoItem)"
    :class="[todoItem.flag ? 'flag' : '', 'todo-card']"
  >
    <h4>
      {{ todoItem.title }}
    </h4>
    <!-- TODO: icon instead of button with 'x' -->
    <button id="delete-button" @click="$emit('deleteTodo', todoItem._id)">
      X
    </button>
    <p>{{ todoItem.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoCard',

  props: {
    todoItem: Object,
  },
}
</script>

<style scoped>
.todo-card {
  background: #e9e9e9;
  margin: 5px auto;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  width: 80%;
}

.todo-card.flag {
  border-left: 5px solid red;
}

.todo-card h4 {
  text-align: left;
  width: 80%;
}

#delete-button {
  position: absolute;
  right: 3%;
  top: 10%;
  padding: 0 3px 0 3px;
}

.todo-card p {
  text-align: left;
  font-size: 14px;
}
</style>
