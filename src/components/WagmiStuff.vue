<script setup>
import { onMounted, ref } from 'vue'
import wagmi from '@/utils/wagmi'

// import { useAccountStore } from '@/stores/accountStore'
// const accountStore = useAccountStore()

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
    <h3>Connected Account: {{ web3Account }}</h3>
    <div>
      <button class="btn btn-primary" @click="wagmi.connect()">Connect</button>
      <button class="btn btn-accent" @click="wagmi.disconnect()">Disconnect</button>
      <button class="btn btn-secondary" @click="wagmi.switchNetwork(11155111)">
        Switch Network (Sepolia)
      </button>
    </div>

    <div>
      <h3>Send Eth</h3>
      <input
        class="input input-bordered"
        type="text"
        v-model="addressToSend"
        placeholder="Address"
      />
      <input
        class="input input-bordered"
        type="number"
        v-model="ethAmount"
        placeholder="Eth Amount"
      />
      <button
        class="btn btn-outline"
        @click="wagmi.sendTransaction(addressToSend, ethAmount.toString())"
      >
        Send Ethereum
      </button>
    </div>
    <button class="btn" @click="wagmi.signMessage('hello fools')">Sign Message</button>
  </div>
</template>
