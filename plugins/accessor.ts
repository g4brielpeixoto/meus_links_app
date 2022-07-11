import { Plugin } from '@nuxt/types'
import { initializeCookies } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $cookies }) => {
  initializeCookies($cookies)
}

export default accessor