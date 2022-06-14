// https://eth-rinkeby.alchemyapi.io/v2/aeLFOstRE_QWCZDndAqg5ffGVDf7Ah1P

require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/aeLFOstRE_QWCZDndAqg5ffGVDf7Ah1P',
      accounts: [ '93ee81ef6908135a86f2d638fff0fbee448a174161dda9e83f75f05239f30621' ]
    }
  }
}