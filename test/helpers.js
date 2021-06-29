export const ETHER_ADDRESS = '0x6cB7eC889E7B71D587C8BB287Fc78209C46896F8'
export const EVM_REVERT = 'VM Exception while processing transaction: revert'

export const ether = n => {
  return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  )
}

// Same as ether
export const tokens = n => ether(n)

export const wait = s => {
  const milliseconds = s * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}