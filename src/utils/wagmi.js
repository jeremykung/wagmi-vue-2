import {
  createConfig,
  configureChains,
  connect,
  disconnect,
  fetchBalance,
  sendTransaction,
  signMessage,
  InjectedConnector,
  mainnet,
  sepolia,
  getAccount
} from '@wagmi/core'
import { parseEther } from 'viem'
import { publicProvider } from '@wagmi/core/providers/public'

const wagmi = {
  config() {
    const { chains, publicClient, webSocketPublicClient } = configureChains(
      [mainnet, sepolia],
      [publicProvider()]
    )

    const config = createConfig({
      chains,
      publicClient,
      webSocketPublicClient
    })

    console.log('wagmi config:', config)
    return config
  },
  connector() {
    const connector = new InjectedConnector({
      chains: [mainnet, sepolia]
    })
    console.log('wagmi connector:', connector)
  },
  async connect() {
    const result = await connect({ connector: new InjectedConnector() })
    console.log('wagmi connect:', result)
  },
  async disconnect() {
    const result = await disconnect()
    console.log('wagmi disconnect:', result)
  },
  async fetchBalance() {
    const account = getAccount()
    console.log('account for fetchBalance:', account)
    const result = await fetchBalance({
      address: account.address
    })
    console.log('wagmi fetchBalance:', result)
  },
  async sendTransaction(toAddress, ethAmount) {
    const result = await sendTransaction({
      to: toAddress,
      value: parseEther(ethAmount)
    })
    console.log('wagmi send transaction:', result)
  },
  async signMessage(message) {
    const signature = await signMessage({
      message: message,
    })
    console.log('wagmi sign message:', signature)
  }
}

export default wagmi

// export function wagmiConfig() {
//   const { chains, publicClient, webSocketPublicClient } = configureChains(
//     [mainnet, sepolia],
//     [publicProvider()]
//   )

//   const config = createConfig({
//     chains,
//     publicClient,
//     webSocketPublicClient
//   })

//   console.log('wagmi config:', config)
//   return config
// }

// export function wagmiConnector() {
//   const connector = new InjectedConnector({
//     chains: [mainnet, sepolia]
//   })
//   console.log('wagmi connector:', connector)
// }

// export function wagmiConnect() {
//   const result = connect({})
//   console.log('wagmi connect:', connect)
// }

// module.exports = {
//   wagmiConfig,
//   wagmiConnector,
//   wagmiConnect
// }
