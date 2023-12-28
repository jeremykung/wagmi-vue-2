<script setup>
import { onMounted, ref } from 'vue'
import wagmi from '@/utils/wagmi'

const ethAmount = ref('0')
const addressToSend = ref('')

onMounted(async () => {
  const web3Config = wagmi.config()
  const web3Connector = wagmi.connector()
  // const web3Connect = await wagmi.connect()
  const web3FetchBalance = wagmi.fetchBalance()
  // const web3SendTransaction = wagmi.sendTransaction('0xf4A0E7c6C175697B52520Fdec26F8F7baC1F6503', 0.1)
  // const web3SignMessage = wagmi.signMessage('hello fools')
  // const web3Disconnect = wagmi.disconnect()
})
</script>

<template>
  <div>
    <h1>Wagmi</h1>
    <div>
      <button class="btn btn-primary" @click="wagmi.connect()">Connect</button>
    </div>
    <div>
      <h3>Send Eth</h3>
      <input type="text" v-model="addressToSend" placeholder="Address" />
      <input type="number" v-model="ethAmount" placeholder="Eth Amount" />
    </div>
    <button
      class="btn btn-outline"
      @click="wagmi.sendTransaction(addressToSend, ethAmount.toString())"
    >
      Send Ethereum
    </button>
    <button class="btn" @click="wagmi.signMessage('hello fools')">Sign Message</button>
  </div>
</template>
