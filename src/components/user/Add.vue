<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Add Category</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="create">
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
                <button type="submit" class="btn btn-primary">Save</button>
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
  name:"add-user",
  data(){
    return {
      user:{
        name:"",
        email:"",
        password:"",
        phone:"",
      }
    }
  },
  methods:{
    async create(){
      await this.axios.post('https://testformir.herokuapp.com/api/users',this.user).then(response=>{
        this.$router.push({name:"userList"})
      }).catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>