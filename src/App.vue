<template>
  <div id="app">
    <div class="ui fixed inverted menu vue-color">
      <div class="ui container">
        <a href="#" class="header item">Vue JS CRUD with Laravel API</a>
      </div>
    </div>

    <div class="ui main container">
      <MyForm :form="form" @onFormSubmit="onFormSubmit" />
      <Loader v-if="loader" />
      <UserList
        :users="users"
        @onDelete="onDelete"
        @onEdit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MyForm from "./components/MyForm";
import UserList from "./components/UserList";
import Loader from "./components/Loader";

export default {
  name: "App",
  components: {
    MyForm,
    UserList,
    Loader
  },
  data() {
    return {
      url: "https://testformir.herokuapp.com/api/users",
      users: [],
      form: { name: "", email: "", phone: "", password: "", isEdit: false },
      loader: false
    };
  },
  methods: {
    getUsers() {
      this.loader = true;

      axios.get(this.url).then(data => {
        this.users = data.data.data;
        this.loader = false;
      });
    },
    deleteUser(id) {
      this.loader = true;

      axios
        .delete(`${this.url}/${id}`)
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert(e);
        });
    },
    createUser(data) {
      this.loader = true;

      axios
        .post(this.url, {
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password
        })
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert(e);
          this.loader = false;
        });
    },
    editUser(data) {
      this.loader = true;

      axios
        .put(`${this.url}/${data.id}`, {
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password
        })
        .then(() => {
          this.getUsers();
        })
        .catch(e => {
          alert(e);
          this.loader = false;
          this.getUsers();
        });
    },
    onDelete(id) {

      this.deleteUser(id);
    },
    onEdit(data) {

      this.form = data;
      this.form.isEdit = true;
    },
    onFormSubmit(data) {
      if (data.isEdit) {
        this.editUser(data);
      } else {
        this.createUser(data);
      }
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style>
.vue-color {
  background: #41b883 !important;
}

.main.container {
  margin-top: 60px;
}

.submit-button {
  margin-top: 24px !important;
  float: right;
}

.data {
  margin-top: 15px;
}

thead tr th {
  background: #e0e0e0 !important;
}

.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>
