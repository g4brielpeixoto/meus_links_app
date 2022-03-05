import { ActionTree } from 'vuex'

interface registerPayload {
  username: String,
  email: String,
  password: String,
  redirectUrl: String
}

export const state = () => ({})
type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ dispatch }) {
    dispatch('auth/update')
  },
  async register({ dispatch }, payload: registerPayload) {
    const user = await this.$axios.$post('/register', payload)
    if(user) {
        await dispatch('auth/login', { 
        username: payload.username, 
        password: payload.password
      })
      this.$router.push('/admin')
    }
  }
}