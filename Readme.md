# How to test your Solidity contracts on Godwoken v1

You can deploy in the localhost network following these steps:

1. Start Godwoken devnet_v1 through [Godwoken-Kicker](https://github.com/RetricSu/godwoken-kicker/tree/compatibility-changes)

```sh
# see: https://github.com/RetricSu/godwoken-kicker/blob/952123c3577c46f3efda0e1e7e3aa9fa1b18f8aa/README.md#getting-started
# git clone -b compatibility-changes --depth=1 https://github.com/RetricSu/godwoken-kicker.git kicker
cd kicker
make start
```


2. Run tests
```sh
# pwd = contracts
npm install
npm run test
```

As general rule, you can target any network configured in the hardhat.config.js
```sh
npx hardhat run --network <your-network> scripts/deploy.js
```

## Todo

### type && event && event index
- bool
- int8
- int16
- int24
- ...
- int256
- uint
- uin8
- uin16
- uint24
- ...
- uint256
- address
- bytes1
- ...
- bytes32
- string
- enum
- arrays
- struct
### hardhat config - json-rpc config
- url
- chainId
- from
- gas
- gasPrice
- gasMultiplier
### plugin 
- Debugging
- Mining modes
- Mainnet forking
- Logging
- 