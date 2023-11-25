import { defineStore } from 'pinia'
import axios from 'axios'
import type { User } from 'src/types/Users'

const getLocalStorageUser = (): [User] | [] => {
  const users = localStorage.getItem('users')
  return users ? JSON.parse(users) : []
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: getLocalStorageUser(),
    loading: <Boolean>false
  }),
  getters: {
    getUsers(state) {
      return state.users
    },
    getLoading(state) {
      return state.loading
    }
  },
  actions: {
    async fetchUsers() {
      this.loading = true
      try {
        const data = await axios.get<[User]>('https://random-data-api.com/api/v2/users?size=4')
        localStorage.setItem('users', JSON.stringify(data.data))
        this.users = data.data
        this.loading = false
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})
