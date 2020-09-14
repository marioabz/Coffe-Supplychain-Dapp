const HDWallet = require("@truffle/hdwallet-provider");
const fs = require('fs');


const infuraKey = "49aac1c07d7d47d8af5631f4859a4e4e";
const mnemonic = fs.readFileSync(".secret").toString().trim();
console.log(mnemonic)

module.exports = {
  networks: {
    //development: {
    //  host: "127.0.0.1",
    //  port: 8545,
    //  network_id: "*" // Match any network id
    //},
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
       network_id: 4,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
    solc: {
       version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};