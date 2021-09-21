<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.password }}</td>
    <td>
      <button class="mini ui blue button" @click="onEdit">Edit</button>
      <button class="mini ui red button" @click="onDelete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object
    }
  },
  methods: {
    onDelete() {
      this.$emit("onDelete", this.user.id);
    },
    onEdit() {
      this.$emit("onEdit", this.user);
    }
  }
};
</script>

<style scoped></style>
