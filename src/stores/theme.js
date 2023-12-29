import { ref } from 'vue'
import { defineStore } from 'pinia'

export const themeStore = defineStore('theme', () => {
  const theme = ref('seafoam')
  function toggleTheme() {
    if ((theme.value = 'seafoam')) {
      theme.value = 'vintageSeafoam'
    } else {
      theme.value = 'seafoam'
    }
  }

  return { theme, toggleTheme }
})
