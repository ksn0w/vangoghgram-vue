<template lang="pug">
  .row
    h1 Aquí van las fotos
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  
  computed: mapState([
    'user_id',
    'full_name',
    'profile_picture',
    'acces_token'
  ]),
  data(){
    return{
      loading:true,
      registered:false,
      email:'',
      password:''
    }
  },
  mounted(){
    axios.get('http://127.0.0.1:8000/api/user/instagram/',{
      params:{
        access_token:this.$route.hash.replace('#access_token=','')
      }
    }).then(response=>{
      const data = response.data.data.data
      this.setData(data)
      this.loading = false
      this.registered = response.data.registered
    })
  }
}
</script>
