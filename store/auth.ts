import { ActionTree } from 'vuex'

type Token = string | null
interface User  {
  username: string,
  password: string
}

export const state = () => ({
  token: null as Token
})

export const mutations = {
  UPDATE(state: { token: Token }, newToken: Token) {
    state.token = newToken
  },
  DESTROY(state: { token: Token }) {
    state.token = null
  }
}

type RootState = ReturnType<typeof state>
export const actions: ActionTree<RootState, RootState> = {
  update({ commit }) {
    const token = this.$cookies.get('token') as Token
    commit('UPDATE', token)
  },

  async login({ commit }, user: User) {
    const { token } = await this.$axios.$post('/auth', user)
    this.$cookies.set('token', token)
    commit('UPDATE', token) 
  },

  async logout({ commit }) {
    await this.$axios.$delete('/auth', {
      headers: {'Authorization': `bearer ${this.$cookies.get('token')}`}
    })
    this.$cookies.remove('token')
    commit('DESTROY')
  }
}

export const getters = {
  $token(state: { token: Token }) {
    return state.token
  }
}
