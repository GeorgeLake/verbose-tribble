(this["webpackJsonpblog-basic"]=this["webpackJsonpblog-basic"]||[]).push([[0],{15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n,l,r,i=a(0),o=a.n(i),c=a(5),s=a.n(c),m=(a(15),a(1)),u=a(2),d=a.p+"static/media/AMMCurve.f21c42ee.png",h=a.p+"static/media/casino.ca96f96e.jpg",p=a.p+"static/media/anatomy.356cde3d.jpg",f=a.p+"static/media/trade.3a76b395.jpg",E=u.a.div(n||(n=Object(m.a)(["\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 1em;\n"]))),b=u.a.div(l||(l=Object(m.a)(["\n    max-width: 650px;\n    margin: 0 auto;\n    font-family: 'Sen', sans-serif;\n"]))),g=u.a.div(r||(r=Object(m.a)(["\n  cursor: pointer;\n  background: transparent;\n  font-size: 16px;\n  border-radius: 3px;\n  border: 2px solid darkgray;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n  margin-bottom: 3vh;\n  margin-top: 1vh;\n  word-wrap: break-word;\n  transition: 0.5s all ease-out;\n  &:hover {\n    background-color: darkgray;\n    color: white;\n  }\n"]))),y=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"init"),o.a.createElement("p",null,"This is the first blog post of many (hopefully) where I will be recording my progress while taking the EntryLevel Virtual Work Experience under the program associated with Ren."),o.a.createElement("p",null,"I will to the best of my abilities record all my failures and successes, I hope this is a valuable resource for me to look back on and for others to get value from (I'm sure the people running this may appreciate the blog). This blog will also be a good source of accountability for me"),o.a.createElement("p",null,"This is also my first ever time using yarn or react so if I do something dumb someone please tell me :)"))},w=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"Intro"),o.a.createElement("p",null,"Articles:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://medium.com/blockchain-at-berkeley/introduction-to-blockchain-through-cryptoeconomics-part-1-bitcoin-369f245067f9"}),o.a.createElement("a",{href:"https://medium.com/blockchain-at-berkeley/introduction-to-blockchain-through-cryptoeconomics-part-1-bitcoin-369f245067f9"},"https://medium.com/blockchain-at-berkeley/introduction-to-blockchain-through-cryptoeconomics-part-1-bitcoin-369f245067f9")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/"}),o.a.createElement("a",{href:"https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/"},"https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/"))),o.a.createElement("h2",null,"Bitcoin"),o.a.createElement("p",null,"Bitcoin as a economics experiment (game theory and economics):"),o.a.createElement("ul",null,o.a.createElement("li",null,"Related to fields of: cryptography, game theory, distributed systems, and microeconomics"),o.a.createElement("li",null,"None of the tech was invented by Satoshi, they had existed decades prior to its protocol (protocol is a standard set of rules that allow electronic devices to communicate with each other)"),o.a.createElement("li",null,"Unites Disparate (incomparable/unalike) actors",o.a.createElement("ol",null,o.a.createElement("li",null,"In trustless system"),o.a.createElement("li",null,"Have incentive to steal from each other"),o.a.createElement("li",null,"Some want to destroy the system"))),o.a.createElement("li",null,"Aligns all these competing incentives to create a single, working, growing, indestructible ledger that remains open and transparent"),o.a.createElement("li",null,"Study of the incentives that secure blockchain systems is known as cryptoeconomics")),o.a.createElement("p",null,"Transactions and Fees"),o.a.createElement("ul",null,o.a.createElement("li",null,"we must log account balances and transactions (ledger)"),o.a.createElement("li",null,"This database is distributed in a decentralised fashion (distributed ledger)"),o.a.createElement("li",null,"Many computers owned by different parties all trying to come to consensus on the same version of the ledger"),o.a.createElement("li",null,"Asymmetric Key Cryptography: Public (Username), Private (Password). Means owner of bank balance can transact their balance and their balance only"),o.a.createElement("li",null,"Transactions are free but expensive for the network Asymmetry of cost problem: methods of aligning incentives discussed below vvvv")),o.a.createElement("p",null,"DoS from Transactors"),o.a.createElement("ul",null,o.a.createElement("li",null,"People can flood network in a DoS(Denial of Service) attack by making lots of little purchases to process \u2192 Solution: make transaction fees which compensate the network")),o.a.createElement("p",null,"Building Blocks"),o.a.createElement("ul",null,o.a.createElement("li",null,"Miners: Aggregate transactions and publish them to the blockchain, are compensated with bitcoin to do so from transaction fees and new Bitcoin minted and agreed to go to the miner"),o.a.createElement("li",null,"new/minted bitcoin in coinbase transaction increases the BTC supply")),o.a.createElement("p",null,"DoS from Miners"),o.a.createElement("ul",null,o.a.createElement("li",null,"Miner can mint infinite supply with phoney Sybil attack to own accounts"),o.a.createElement("li",null,"equilibrium will be established where average transaction fee and the costs on the network (compute and electricity) will become equal"),o.a.createElement("li",null,"Solution \u2192 make it difficult to include a new block: PoW = Proof of Work (algorithmic puzzles which make it cost to mint new coin) HashCash"),o.a.createElement("li",null,"Solution \u2192 Create trust through severe punishments for misbehaviour and rewards for honest behaviour: Proof of Stake")),o.a.createElement("p",null,"PoW: Slow down transaction speeds"),o.a.createElement("ul",null,o.a.createElement("li",null,"consensus is easier: limited number of blocks created they have sufficient time to propagate the network before the next is proposed (Bitcoin aims 10 mins)"),o.a.createElement("li",null,"Attacks cost more (compute) than the gains an attacker could make.")),o.a.createElement("p",null,"Game Theory of Longest Chain"),o.a.createElement("ul",null,o.a.createElement("li",null,"what if two miners solve PoW at the same time? How can everyone agree on same version of blockchain? If you receive a reward for proposing a new block why not ignore blocks found by other miners?"),o.a.createElement("li",null,"Answer \u2192 Mine the longest chain in a majority vote system. It is the longest because it has more resources behind mining it. So if you want a new block reward it is optimal to mine at the top of the longest chain. (Nakamoto Consensus)"),o.a.createElement("li",null,"Blockchain is subjective by nature, if an attacker wants to make a forked ledger they will need to play catch up as they waste compute trying to make the new longest chain, they need 51% of the networks total compute!",o.a.createElement("ul",null,o.a.createElement("li",null,"if detection of 51% attack happens then the value of currency will tank and the attacker will have control of a useless chain")))),o.a.createElement("h2",null,"Ethereum"),o.a.createElement("p",null,"network of computers that ensures data and smart contracts are replicated and processed on all computers on network. Bitcoin + computation."),o.a.createElement("p",null,"Ethereum Client (geth, eth, pyethapp, mist (Graphical Interface))"),o.a.createElement("ul",null,o.a.createElement("li",null,"a node on network running eth virtual machine and behaves equivalently to all other nodes."),o.a.createElement("li",null,"Solidity: Smart contract functional smart contract scripting language")),o.a.createElement("p",null,"PoW \u2192 PoS"),o.a.createElement("ul",null,o.a.createElement("li",null,"Casper (Serenity Release): more energy efficient, faster.")),o.a.createElement("p",null,"Differences to bitcoin"),o.a.createElement("ul",null,o.a.createElement("li",null,"14 second block time (compared from 10 mins)"),o.a.createElement("li",null,"block size is based on complexity of smart contracts, Gas limit per block which can vary"),o.a.createElement("li",null,"Turing complete distributed decentralised virtual machine"),o.a.createElement("li",null,"linear token issuance (bitcoin halves every 4 years = logarithmic)")),o.a.createElement("p",null,"Total Supply of Eth:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Pre-mine (crowd sale) + Block rewards (5eth per block mined) + Uncle rewards (block mined late can be referenced later blocks) + Uncle referencing rewards")),o.a.createElement("p",null,"Gas"),o.a.createElement("ul",null,o.a.createElement("li",null,"pay for calculations done in smart contracts"),o.a.createElement("li",null,"if you want to run contract you send small amount of eth Payment (in ETH) = Gas amount (in Gas) x Gas price (in ETH/Gas)"),o.a.createElement("li",null,"more complex contract = needs more gas to run"),o.a.createElement("li",null,"action for your contract to run on auction, higher gas you set the faster your contract will compute")))},k=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"Setup: Solidity and Smart Contracts"),o.a.createElement("p",null,"A Simple Solidity Program with setter, getter, and uint"),o.a.createElement("ol",null,o.a.createElement("pre",null,o.a.createElement("code",{class:"language-jsx"},"// SPDX-License-Identifier: GPL-3.0",o.a.createElement("br",null),"pragma solidity >=0.4.16 <0.9.0; // compiler version",o.a.createElement("br",null),o.a.createElement("br",null),"contract SimpleStorage {",o.a.createElement("br",null),"    uint storedData; // unsigned int 256 bits",o.a.createElement("br",null),o.a.createElement("br",null),"    function set(uint x) public {",o.a.createElement("br",null),"        storedData = x;",o.a.createElement("br",null),"    }",o.a.createElement("br",null),o.a.createElement("br",null),"    function get() public view returns (uint) {",o.a.createElement("br",null),"        return storedData;",o.a.createElement("br",null),o.a.createElement("br",null),"}",o.a.createElement("br",null)))),o.a.createElement("p",null,"Data Storage on EVM (Eth Virtual Machine)"),o.a.createElement("ul",null,o.a.createElement("li",null,"storage; which is persistent between function calls and transactions. Costly to read, and even more to initialise and modify storage."),o.a.createElement("li",null,"memory; of which a contract obtains a freshly cleared instance for each message call. More costly the larger it grows (it scales quadratically)."),o.a.createElement("li",null,"stack; EVM is not a register machine but a stack machine. It has a maximum size of 1024 elements and contains words of 256 bits.")),o.a.createElement("p",null,"Useful:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://remix.ethereum.org/"}),o.a.createElement("a",{href:"https://remix.ethereum.org/"},"https://remix.ethereum.org/"),"\xa0 \xa0(quickly write solidity online)"),o.a.createElement("li",null,o.a.createElement("a",{href:"https://ethereum.org/en/developers/docs/"}),o.a.createElement("a",{href:"https://ethereum.org/en/developers/docs/"},"https://ethereum.org/en/developers/docs/"),"\xa0 \xa0 (open source eth documentation)"),o.a.createElement("li",null,o.a.createElement("a",{href:"https://docs.soliditylang.org/en/v0.8.1/solidity-by-example.html"}),o.a.createElement("a",{href:"https://docs.soliditylang.org/en/v0.8.1/solidity-by-example.html"},"https://docs.soliditylang.org/en/v0.8.1/solidity-by-example.html"),"\xa0 \xa0 (example solidity code)"),o.a.createElement("li",null,o.a.createElement("a",{href:"https://docs.soliditylang.org/en/v0.8.1/index.html"}),o.a.createElement("a",{href:"https://docs.soliditylang.org/en/v0.8.1/index.html"},"https://docs.soliditylang.org/en/v0.8.1/index.html"),"\xa0 \xa0 (solidity documentation)"),o.a.createElement("li",null,"commands:",o.a.createElement("ul",null,o.a.createElement("li",null,'docker run ethereum/solc:stable --help \xa0 (create docker image, latest version for specific versions replace "stable" with version number)'),o.a.createElement("li",null,"docker run -v /var/folders:/sources ethereum/solc:stable -o /sources/output --abi --bin /sources/Contract.sol \xa0 \xa0(Docker image to compile Solidity files)")))),o.a.createElement("p",null,"Musings"),o.a.createElement("ul",null,o.a.createElement("li",null,"resource given was for linux and found some errors, to install solidity use: ",o.a.createElement("a",{href:"https://docs.soliditylang.org/en/latest/installing-solidity.html#building-from-source"}),o.a.createElement("a",{href:"https://docs.soliditylang.org/en/latest/installing-solidity.html#building-from-source"},"https://docs.soliditylang.org/en/latest/installing-solidity.html#building-from-source"))))},v=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"Deploying Smart Contracts"),o.a.createElement("p",null,"Thankfully I already had a metamask setup and just needed to connect to the Kovan network, unfortunately the icarus(SMS verification) faucet website was down so I send a request to the gitter faucet instead. While I wait to get Kovan I will use the Ropsten network instead."),o.a.createElement("p",null,"Reading data on the blockchain does not need any transactions (writing) or fees. Because only modifying the state of the blockchain requires to make a transaction"),o.a.createElement("p",null,"to deploy to network, change environment to injected web3 from JavaScript VM"),o.a.createElement("ul",null,o.a.createElement("li",null,"First ever deployed contract: ",o.a.createElement("a",{href:"https://ropsten.etherscan.io/tx/0x232aaec34d3ba372226231e53abb3cba9f01082aa3d761d950b73e04b4a813b5"}),o.a.createElement("a",{href:"https://ropsten.etherscan.io/tx/0x232aaec34d3ba372226231e53abb3cba9f01082aa3d761d950b73e04b4a813b5"},"https://ropsten.etherscan.io/tx/0x232aaec34d3ba372226231e53abb3cba9f01082aa3d761d950b73e04b4a813b5")),o.a.createElement("li",null,"Me modifying the contract: ",o.a.createElement("a",{href:"https://ropsten.etherscan.io/tx/0x96f76390478cf13316aa9b55c10bdfd12daaf1f863f790520f17ca97a0c129d9"}),o.a.createElement("a",{href:"https://ropsten.etherscan.io/tx/0x96f76390478cf13316aa9b55c10bdfd12daaf1f863f790520f17ca97a0c129d9"},"https://ropsten.etherscan.io/tx/0x96f76390478cf13316aa9b55c10bdfd12daaf1f863f790520f17ca97a0c129d9"))),o.a.createElement("p",null,"After looking at all the examples I want to write a smart contract that we can gamble our fake eth"),o.a.createElement("p",null,"Useful:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://kovan-testnet.github.io/website/"}),o.a.createElement("a",{href:"https://kovan-testnet.github.io/website/"},"https://kovan-testnet.github.io/website/")," (testnet, many useful links including faucets)"),o.a.createElement("li",null,o.a.createElement("a",{href:"https://ropsten.etherscan.io/"}),o.a.createElement("a",{href:"https://ropsten.etherscan.io/"},"https://ropsten.etherscan.io/"),"\xa0 \xa0 (etherscan in general will be super useful)")))},x=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"CoinFlip Smart Contract with House Edge"),o.a.createElement("p",null,"Requirements:"),o.a.createElement("ol",null,o.a.createElement("li",null,"Only the address that deploys contract can withdraw money"),o.a.createElement("li",null,"Be able to pseudorandomly generate a random number"),o.a.createElement("li",null,"Send money to contract and have a chance to receive double (49%) or lose it all")),o.a.createElement("p",null,"Making this contract I learnt about:"),o.a.createElement("ul",null,o.a.createElement("li",null,"how contracts can have balances and how to interact with sender and owner addresses"),o.a.createElement("li",null,"getting and setting values"),o.a.createElement("li",null,"solidity syntax (if, require, constructor, functions...)")),o.a.createElement("p",null,"I have deployed my casino with 5eth on the Ropsten network here:"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://ropsten.etherscan.io/address/0x90313e55139affc3500279458427ca95cbed9edb"}),o.a.createElement("a",{href:"https://ropsten.etherscan.io/address/0x90313e55139affc3500279458427ca95cbed9edb"},"https://ropsten.etherscan.io/address/0x90313e55139affc3500279458427ca95cbed9edb")),o.a.createElement("p",null,"See if you can beat the casino and drain the contract! (I'll add it to Kovan when I get some keth)"),o.a.createElement("img",{style:{flex:1,width:"100%",height:"100%"},src:h}))},S=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"Preparing Developer Environment"),o.a.createElement("p",null,"Advantages of being in more focussed environment and be able to make unit tests on own machine. Learn ",o.a.createElement("strong",null,"Truffle (manage development process) and Ganache (local simulated eth environment)")),o.a.createElement("p",null,"Truffle:"),o.a.createElement("ul",null,o.a.createElement("li",null,"truffle init (starts empty truffle project)"),o.a.createElement("li",null,"truffle compile (compile smart contracts)"),o.a.createElement("li",null,"remember: to edit the config uncomment the defaults \ud83e\udd26\u200d\u2642\ufe0f"),o.a.createElement("li",null,"truffle console (interact with smart contract within terminal)"),o.a.createElement("li",null,"truffle migrate (compile and deploy to network (ganache default))"),o.a.createElement("li",null,"truffle exec scripts/nameOfMyScript.js (write scripts in scripts folder to execute)"),o.a.createElement("li",null,"truffle create <artifact_type> <Name>",o.a.createElement("ul",null,o.a.createElement("li",null,"artifact_type = (contract|migration|test)")))),o.a.createElement("p",null,"Ganache:"),o.a.createElement("ul",null,o.a.createElement("li",null,"make sure to quickstart the network"),o.a.createElement("li",null,"explore blocks in the local network")))},T=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"Automatic Market Makers XY=k"),o.a.createElement("p",null,"Concept behind popular DeFI application Uniswap"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers"}),o.a.createElement("a",{href:"https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers"},"https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers")),o.a.createElement("p",null,"What are Automated Market Makers (AMM)?"),o.a.createElement("ul",null,o.a.createElement("li",null,"digital assets traded in permissionless and automatic (DeFi) way by using liquidity pools rather than a traditional market of buyers and sellers"),o.a.createElement("li",null,"no one entity controls, open participation, build onto of another"),o.a.createElement("li",null,"algorithmic market not inefficient human one (slow price updates and linear space)")),o.a.createElement("p",null,"Liquidity Pools and Liquidity Providers"),o.a.createElement("ul",null,o.a.createElement("li",null,"liquidity is how easy you can convert asset into another asset."),o.a.createElement("li",null,"liquidity problem: number of buyers and sellers can be small, difficult to find people to trade on regular basis"),o.a.createElement("li",null,"more assets in a pool and the more liquidity the pool has, the easier trading becomes"),o.a.createElement("li",null,"instead of trading between buyers and sellers (traditional), users trade against a pool of tokens \u2014 a liquidity pool (shared pot of tokens)",o.a.createElement("ul",null,o.a.createElement("li",null,"Traditional: Buyer bids MAX price to buy for, Seller asks for MIN price to sell for. Trade happens when bids > min asks"))),o.a.createElement("li",null,"Supply liquidity t pools with tokens and price of token is determined by mathematical formula, different formulas for different purposes"),o.a.createElement("li",null,"Liquidity providers earn a fee for providing tokens paid by traders who interact with pool, can also earn yield (yield farming)")),o.a.createElement("p",null,"Constant Product Formula"),o.a.createElement("ul",null,o.a.createElement("li",null,"Mathematical formula for AMM can take multiple forms, one proposed by Vitalik is: tokenA_balance(p) * tokenB_balance(p) = k \xa0 \xa0also written as: x * y = k (curve of uniswap)"),o.a.createElement("li",null,"k is constant so there is a constant balance of assets that determines the price of tokens in a liquidity pool",o.a.createElement("ul",null,o.a.createElement("li",null,"simple microeconomics: high demand = less supply = higher price of asset (inverse is true)"))),o.a.createElement("li",null,"there will eventually be a return to a state of balance that reflects a relatively accurate market price (no matter volatility)"),o.a.createElement("li",null,"arbitrage opportunities will ensure market price across exchanges is also accurate")),o.a.createElement("p",null,"Variations in AMM"),o.a.createElement("ul",null,o.a.createElement("li",null,"Uniswap (Standard): Pair ERC-20 tokens with 50/50 ratio"),o.a.createElement("li",null,"Curve (Specialised): liquidity pools of similar assets (e.g. stablecoins), as a result offers low rates and efficient trades"),o.a.createElement("li",null,"Balancer (Flexible): Expand on Uniswap allowing users to create dynamic liquidity pools of up to 8 assets in any ratio")),o.a.createElement("p",null,o.a.createElement("a",{href:"https://web.stanford.edu/~guillean/talks/defi-2020.pdf"}),o.a.createElement("a",{href:"https://web.stanford.edu/~guillean/talks/defi-2020.pdf"},"https://web.stanford.edu/~guillean/talks/defi-2020.pdf")),o.a.createElement("p",null,"Trading Set"),o.a.createElement("ul",null,o.a.createElement("li",null,"constant price markets (Uniswap) have concave hyperbola of reserves possible (our set)"),o.a.createElement("li",null,"no rational trader would trade to the right of the set, many trade functions reveal same set"),o.a.createElement("li",null,"makes arbitrage easy and therefore prices are more accurate externally")),o.a.createElement("p",null,o.a.createElement("a",{href:"https://uniswap.org/whitepaper.pdf"}),o.a.createElement("a",{href:"https://uniswap.org/whitepaper.pdf"},"https://uniswap.org/whitepaper.pdf")),o.a.createElement("p",null,"UniSwap WhitePaper"),o.a.createElement("ul",null,o.a.createElement("li",null,"v1: ETH is bridge currency, every pair includes ETH as an asset, makes routing simpler."),o.a.createElement("li",null,"All liquidity providers therefore have exposure to ETH and suffer loss based on changes of other assets relative to ETH"),o.a.createElement("li",null,"v1: using ETH as a bridge means that traders have to pay twice gas fees as they would to go from ABC/XYZ pair. (ABC/ETH \u2192 ETH/XYZ) also suffer slippage twice"),o.a.createElement("li",null,"v2: create any pair of ERC-20, routing can be handled at higher layer"),o.a.createElement("li",null,"ETH is different from standard interface for interacting with ERC-20 tokens, as result many other protocols on Ethereum don't support ETH instead using canonical Wrapped ETH token WETH.",o.a.createElement("ul",null,o.a.createElement("li",null,"ETH must be wrapped into WETH before it can be traded on v2")))),o.a.createElement("img",{src:d}))},M=function(){return o.a.createElement(g,null,o.a.createElement("h1",null,"UniSwap"),o.a.createElement("p",null,"These images were very useful for my understanding (ontop of playing with the interface):"),o.a.createElement("img",{style:{flex:1,width:"100%",height:"100%"},src:p}),o.a.createElement("img",{style:{flex:1,width:"100%",height:"100%"},src:f}))};var I=function(){return o.a.createElement(E,null,o.a.createElement(b,null,o.a.createElement(M,null),o.a.createElement(T,null),o.a.createElement(S,null),o.a.createElement(x,null),o.a.createElement(v,null),o.a.createElement(k,null),o.a.createElement(w,null),o.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.620f4e5a.chunk.js.map