<template>
  <div class="form">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="Enter title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.description"
          placeholder="Enter description"
          rows="6"
          no-resize
          required
        ></b-form-textarea>
      </b-form-group>

      <!-- TODO: OPTION SELECTOR: URGENT -->

      <!-- TODO: DATE PICKER -->

      <b-button type="submit" variant="outline-primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoForm',

  data() {
    return {
      form: {
        title: '',
        description: '',
        urgent: false,
      },
    }
  },

  methods: {
    ...mapActions(['addTodo']),

    //
    onSubmit(event) {
      event.preventDefault()
      // alert(JSON.stringify(this.form))

      this.addTodo({
        title: this.form.title,
        description: this.form.description,
        urgent: this.form.urgent,
      })

      this.form.title = ''
      this.form.description = ''
    },
  },
}
</script>
