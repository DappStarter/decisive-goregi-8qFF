require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain unknown include clinic surge gentle'; 
let testAccounts = [
"0x811569843b0c0ab4034ff6b38cb991f2eb6c0eebc700c909c90f4112ca90634a",
"0x75493ab60841a5764700795660015008f7e66dca5eeb7e8abf415753988f1573",
"0x559f104b9fe621bf1d0504b6b3400cd4ed95ab34d19ea34f4fcb80a6d876790e",
"0x12113cffa94c9c79096b8260b905c7822222ade42cc3504fa5f1782e4038e9aa",
"0x2d2bf818d7cf92a63a682ba436e9f22ad54e5c26faa6cc94172abe1b3e5154eb",
"0x08592ce1484d274e4bfefffcb29f66cfac0e9f4c5e3d00da0e04c2f479915351",
"0x9d83c73b9e751ca61570b30c31091913b9821c08b0fdea072445724edc259b58",
"0x3074227df1199924ab493f31507c62861d822a0ba44e78563d566713dd305627",
"0x1bd661dbc54a545b1692f5e10d44c24cb10076ec8e9fdb02d5e80cf3a0ce3802",
"0xeb4887329d5899ef094211ef59c8ea58cd4d7910d66f8d77415209e74f5f49db"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


