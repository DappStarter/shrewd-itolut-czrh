require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift regret spider unique install pave army gentle'; 
let testAccounts = [
"0xacb74d071763107b0fc0121b58df9e12db78b27b9714d8e0c6c16c1f3389a804",
"0x5029d995f9aeef7dfc1c1b57e06046f95dae6a90f71b34893ae77f28f3f8eb31",
"0x77540ed61024811d58fd679128cb0e98b9cd36e00c0e099c92087f8ab874f834",
"0xdd4d56b6f9582f996c7d9d7bb455d1f32591c848a032cbb694221690889b9f5c",
"0x8ddf24503414ca14cab6f6a04ea289e958fdaa305a72a9f3f107e157f6cd84ad",
"0x4acfefd2d2bf6d982292ccc4dcd890413cd77804ff05873f89659ff9c4ae3d89",
"0x8aca729a32f35e2d8dc90b775f780d982ccae3382913764f6673ab637f173c70",
"0x6e2356a84078308166c726935c76e70695c8f41ea5cc640ad314ec2503c01184",
"0x5b596bb2a47b0fd4c36ffc3d1d96ef40cafbc9a99ff4d63c2ed62a3ebd406ac7",
"0xa0cfedf6006829fd51b974d12cd063289fa9df135761b2e8258f7622debf1e0f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

