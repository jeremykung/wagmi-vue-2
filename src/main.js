import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import wagmi from '@/utils/wagmi'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// const web3Config = wagmi.config()
// const web3Connector = wagmi.connector()
// const web3Connect = await wagmi.connect()
// const web3FetchBalance = wagmi.fetchBalance()
// const web3Disconnect = wagmi.wagmiDisconnect()

app.use(createPinia())
app.use(router)

app.mount('#app')
