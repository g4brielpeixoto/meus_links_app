import { ActionTree } from 'vuex'
import { $cookies } from '@/utils/nuxt-instance'
import { User } from '@/Models'

export interface RegisterPayload {
  username: String,
  email: String,
  password: String,
  redirectUrl: String
}

export const state = () => ({
  user: {} as User
})
type RootState = ReturnType<typeof state>

export const mutations = {
  SET_USER(state: { user: User }, payload: User) {
    state.user = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ dispatch }) {
    dispatch('auth/update')
  },

  async register({ dispatch }, payload: RegisterPayload) {
    const user = await this.$axios.$post('/register', payload)
    if(user) {
        await dispatch('auth/login', { 
        username: payload.username, 
        password: payload.password
      })
    }
  },

  async getUser() {
    const user = await this.$axios.$get('/register', {
      headers: {'Authorization': `bearer ${$cookies.get('token')}`}
    })
    if (user) this.commit('SET_USER', user)
  }
  
}

export const getters = {
  $user(state: { user: User }) {
    return state.user
  }
}