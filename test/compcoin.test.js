const CompCoin = artifacts.require('CompCoin')

contract('CompCoin', accounts => {
  it('Token can be deployed successfully', async () => {
    const instance = await CompCoin.deployed()
    console.log(instance.address)
  })
})