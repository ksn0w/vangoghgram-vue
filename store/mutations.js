const mutations = {
  getUserData(state, data, auth_token){
    state.user_id = data.id
    state.profile_picture = data.profile_picture
    state.full_name = data.full_name
    state.auth_token = auth_token
  }
}

export default mutations