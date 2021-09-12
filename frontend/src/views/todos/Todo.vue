<template>
  <div
    @dblclick="$emit('switchUrgent', todoItem)"
    :class="[todoItem.urgent ? 'urgent' : '', 'todo']"
  >
    <h4>
      {{ todoItem.title }}
      <i @click="$emit('deleteTodo', todoItem._id)" class="fas fa-times"></i>
    </h4>
    <p>{{ todoItem.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Todo',

  props: {
    todoItem: Object,
  },
}
</script>

<style scoped>
.todo {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.todo.urgent {
  border-left: 5px solid red;
}

.todo h4 {
  display: flex;
  text-align: left;
  justify-content: space-between;
}

.todo p {
  text-align: left;
}

i {
  margin-left: 5px;
}
</style>
