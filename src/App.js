import { ConnectButton, useAccount } from '@web3modal/react';

function App() {
  const { connected, address } = useAccount()
  console.log('address', address)

  return connected ? (
    <>
      <h1>{address ? address : 'none'} </h1>
    </>
  ) : (
    <ConnectButton />
  )
}

export default App;
