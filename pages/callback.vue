<template lang="pug">
  .row
    .col.s8.offset-s2
      .card.hoverable
        .card-content
          h3.cursive(v-if="loading") Cargando
          div.center-align(v-if="!loading")
            img.circle(:src="profile_picture")
            h3.cursive {{full_name}}
            h6(v-if="!registered") Regístrate en Vangoghgram para convertir tus fotos en obras de arte
            h6(v-if="registered") Inicia sesión de nuevo para que conviertas tus últimas imagenes en obras de arte
            .row
              .input-field.col.s12
                input(type="text" v-model="email")
                label Email
              .input-field.col.s12
                input(type="password" v-model="password")
                label Constraseña
            button.btn(v-on:click="register" v-if="!registered") Registrate
            button.btn(v-on:click="login" v-if="registered") Inicia Sesión
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
        password:'',
        auth_token:''
      }
    },
    mounted(){
      this.auth_token = this.$route.hash.replace('#access_token=','')
      axios.post('http://127.0.0.1:8000/api/user/instagram/',{
        access_token: this.auth_token
      }).then(response=>{
        const data = response.data.data.data
        this.setData(data, this.auth_token)
        this.loading = false
        this.registered = response.data.registered
      })
    },
    methods:{
      setData(data, access_token){this.$store.commit('getUserData', data, access_token)},
      register(){
        axios.post('http://localhost:8000/api/user/',{
          email:this.email,
          instagram_auth:this.$route.hash.replace('#access_token=',''),
          profile_picture:this.profile_picture,
          password:this.password,
          instagram_id:this.user_id,
          name:this.full_name
        }).then(response=>{
          Materialize.toast('¡Te has registrado con éxito!', 4000)
          this.login()
        }).catch(response=>{
          console.log(response)
          Materialize.toast('No te pudiste registrar', 4000)
        })
      },
      login(){
        axios.post('http://localhost:8000/api/auth/',{
          email:this.email,
          password:this.password
        }).then(response=>{
          Materialize.toast('Iniciaste sesión exitosamente', 4000)
          this.$router.replace({ path: 'photos' })
        }).catch(error=>{
          console.log(error)
          Materialize.toast('No pudiste inicar sesión', 4000)
        })
      }
    }
  }
</script>
<style>
.row {
  margin:20px 0;
}
</style>

