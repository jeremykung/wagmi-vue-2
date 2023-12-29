import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', () => {
  const account = ref(null)
  const address = ref(null)
  function setAddress(address) {
    console.log('setting address to:', address)
    address.value = address
  }

  return { account, address, setAddress }
})
