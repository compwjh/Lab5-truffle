const CompCoin = artifacts.require('CompCoin')

module.exports = async function (deployer) {
  await deployer.deploy(CompCoin)
}
