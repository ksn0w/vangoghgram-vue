import Vuex from 'vuex'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user_id:'',
      profile_picture:'',
      full_name:'',
      token:'',
      auth_token:''
    },
    mutations
  })
}

export default createStore