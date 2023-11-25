import { defineStore } from 'pinia'

const getLocalStorageColor = (): string => {
  const color = localStorage.getItem('color')
  return color ? color : 'hsl(0 0% 100% / 1)'
}
const getLocalStorageSize = (): string => {
  const size = localStorage.getItem('size')
  return size ? size : '15'
}

export const useConfigureStore = defineStore('configure', {
  state: () => ({
    color: getLocalStorageColor(),
    size: getLocalStorageSize()
  }),
  getters: {
    getColor(state) {
      return state.color
    },
    getSize(state) {
      return state.size
    }
  },
  actions: {
    setColor(color: string) {
      localStorage.setItem('color', color)
      this.color = color
    },
    setSize(size: string) {
      localStorage.setItem('size', size)
      this.size = size
    }
  }
})
