<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Update Category</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Title</label>
                  <input type="text" class="form-control" v-model="user.name">
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Description</label>
                  <input type="text" class="form-control" v-model="user.email">
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"update-user",
  data(){
    return {
      user:{
        name:"",
        email:"",
        phone:"",
        password:"",
        _method:"patch"
      }
    }
  },
  mounted(){
    this.showUser()
  },
  methods:{
    async showUser(){
      await this.axios.get(`https://testformir.herokuapp.com/api/users/${this.$route.params.id}`).then(response=>{
        const { name, email, phone, password } = response.data
        this.user.title = name
        this.user.description = email
        this.user.phone = phone
        this.user.password = password
      }).catch(error=>{
        console.log(error)
      })
    },
    async update(){
      await this.axios.post(`https://testformir.herokuapp.com/api/users/${this.$route.params.id}`,this.user).then(response=>{
        this.$router.push({name:"userList"})
      }).catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>