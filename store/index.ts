import { ActionTree } from 'vuex'

export const state = () => ({})
type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ dispatch }) {
    dispatch('auth/update')
  }
}