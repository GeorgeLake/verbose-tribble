import React from 'react';
import styled from 'styled-components';

const Wrap=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`
 
const Primary=styled.div`
    max-width: 650px;
    margin: 0 auto;
    font-family: 'Sen', sans-serif;
`

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  word-wrap: break-word;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

const Init = () => (
    <Block>
      <h1>init</h1>
      <p>This is the first blog post of many (hopefully) where I will be recording my progress while taking the EntryLevel Virtual Work Experience under the program associated with Ren.</p>
      <p>I will to the best of my abilities record all my failures and successes, I hope this is a valuable resource for me to look back on and for others to get value from (I'm sure the people running this may appreciate the blog). This blog will also be a good source of accountability for me</p>
      <p>This is also my first ever time using yarn or react so if I do something dumb someone please tell me :)</p>
    </Block>
)

const Intro = () => (

  <Block>
    <h1>Intro</h1>
        <p>Articles:</p>
    <ul>
        <li><a href="https://medium.com/blockchain-at-berkeley/introduction-to-blockchain-through-cryptoeconomics-part-1-bitcoin-369f245067f9"></a><a href="https://medium.com/blockchain-at-berkeley/introduction-to-blockchain-through-cryptoeconomics-part-1-bitcoin-369f245067f9">https://medium.com/blockchain-at-berkeley/introduction-to-blockchain-through-cryptoeconomics-part-1-bitcoin-369f245067f9</a></li>
        <li><a href="https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/"></a><a href="https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/">https://bitsonblocks.net/2016/10/02/gentle-introduction-ethereum/</a></li>
    </ul>
    <h2>Bitcoin</h2>
    <p>Bitcoin as a economics experiment (game theory and economics):</p>
    <ul>
        <li>Related to fields of: cryptography, game theory, distributed systems, and microeconomics</li>
        <li>None of the tech was invented by Satoshi, they had existed decades prior to its protocol (protocol is a standard set of rules that allow electronic devices to communicate with each other)</li>
        <li>Unites Disparate (incomparable/unalike) actors<ol>
                <li>In trustless system</li>
                <li>Have incentive to steal from each other</li>
                <li>Some want to destroy the system</li>
            </ol>
        </li>
        <li>Aligns all these competing incentives to create a single, working, growing, indestructible ledger that remains open and transparent</li>
        <li>Study of the incentives that secure blockchain systems is known as cryptoeconomics</li>
    </ul>
    <p>Transactions and Fees</p>
    <ul>
        <li>we must log account balances and transactions (ledger)</li>
        <li>This database is distributed in a decentralised fashion (distributed ledger)</li>
        <li>Many computers owned by different parties all trying to come to consensus on the same version of the ledger</li>
        <li>Asymmetric Key Cryptography: Public (Username), Private (Password). Means owner of bank balance can transact their balance and their balance only</li>
        <li>Transactions are free but expensive for the network Asymmetry of cost problem: methods of aligning incentives discussed below vvvv</li>
    </ul>
    <p>DoS from Transactors</p>
    <ul>
        <li>People can flood network in a DoS(Denial of Service) attack by making lots of little purchases to process &rarr; Solution: make transaction fees which compensate the network</li>
    </ul>
    <p>Building Blocks</p>
    <ul>
        <li>Miners: Aggregate transactions and publish them to the blockchain, are compensated with bitcoin to do so from transaction fees and new Bitcoin minted and agreed to go to the miner</li>
        <li>new/minted bitcoin in coinbase transaction increases the BTC supply</li>
    </ul>
    <p>DoS from Miners</p>
    <ul>
        <li>Miner can mint infinite supply with phoney Sybil attack to own accounts</li>
        <li>equilibrium will be established where average transaction fee and the costs on the network (compute and electricity) will become equal</li>
        <li>Solution &rarr; make it difficult to include a new block: PoW = Proof of Work (algorithmic puzzles which make it cost to mint new coin) HashCash</li>
        <li>Solution &rarr; Create trust through severe punishments for misbehaviour and rewards for honest behaviour: Proof of Stake</li>
    </ul>
    <p>PoW: Slow down transaction speeds</p>
    <ul>
        <li>consensus is easier: limited number of blocks created they have sufficient time to propagate the network before the next is proposed (Bitcoin aims 10 mins)</li>
        <li>Attacks cost more (compute) than the gains an attacker could make.</li>
    </ul>
    <p>Game Theory of Longest Chain</p>
    <ul>
        <li>what if two miners solve PoW at the same time? How can everyone agree on same version of blockchain? If you receive a reward for proposing a new block why not ignore blocks found by other miners?</li>
        <li>Answer &rarr; Mine the longest chain in a majority vote system. It is the longest because it has more resources behind mining it. So if you want a new block reward it is optimal to mine at the top of the longest chain. (Nakamoto Consensus)</li>
        <li>Blockchain is subjective by nature, if an attacker wants to make a forked ledger they will need to play catch up as they waste compute trying to make the new longest chain, they need 51% of the networks total compute!<ul>
                <li>if detection of 51% attack happens then the value of currency will tank and the attacker will have control of a useless chain</li>
            </ul>
        </li>
    </ul>
    <h2>Ethereum</h2>
    <p>network of computers that ensures data and smart contracts are replicated and processed on all computers on network. Bitcoin + computation.</p>
    <p>Ethereum Client (geth, eth, pyethapp, mist (Graphical Interface))</p>
    <ul>
        <li>a node on network running eth virtual machine and behaves equivalently to all other nodes.</li>
        <li>Solidity: Smart contract functional smart contract scripting language</li>
    </ul>
    <p>PoW &rarr; PoS</p>
    <ul>
        <li>Casper (Serenity Release): more energy efficient, faster.</li>
    </ul>
    <p>Differences to bitcoin</p>
    <ul>
        <li>14 second block time (compared from 10 mins)</li>
        <li>block size is based on complexity of smart contracts, Gas limit per block which can vary</li>
        <li>Turing complete distributed decentralised virtual machine</li>
        <li>linear token issuance (bitcoin halves every 4 years = logarithmic)</li>
    </ul>
    <p>Total Supply of Eth:</p>
    <ul>
        <li>Pre-mine (crowd sale) + Block rewards (5eth per block mined) + Uncle rewards (block mined late can be referenced later blocks) + Uncle referencing rewards</li>
    </ul>
    <p>Gas</p>
    <ul>
        <li>pay for calculations done in smart contracts</li>
        <li>if you want to run contract you send small amount of eth Payment (in ETH) = Gas amount (in Gas) x Gas price (in ETH/Gas)</li>
        <li>more complex contract = needs more gas to run</li>
        <li>action for your contract to run on auction, higher gas you set the faster your contract will compute</li>
    </ul>
  </Block>
)

const SetUp = () => (
  <Block>
    <h1>Setup: Solidity and Smart Contracts</h1>
    <p>A Simple Solidity Program with setter, getter, and uint</p>
    <ol><pre><code class="language-jsx">
      {`// SPDX-License-Identifier: GPL-3.0`}<br/>
      {`pragma solidity >=0.4.16 <0.9.0; // compiler version`}<br/><br/>
      {`contract SimpleStorage {`}<br/>
      {`    uint storedData; // unsigned int 256 bits`}<br/><br/>
      {`    function set(uint x) public {`}<br/>
      {`        storedData = x;`}<br/>
      {`    }`}<br/><br/>
      {`    function get() public view returns (uint) {`}<br/>
      {`        return storedData;`}<br/><br/>
      {`}`}<br/>
    </code></pre></ol>
    <p>Data Storage on EVM (Eth Virtual Machine)</p>
    <ul>
        <li>storage; which is persistent between function calls and transactions. Costly to read, and even more to initialise and modify storage.</li>
        <li>memory; of which a contract obtains a freshly cleared instance for each message call. More costly the larger it grows (it scales quadratically).</li>
        <li>stack; EVM is not a register machine but a stack machine. It has a maximum size of 1024 elements and contains words of 256 bits.</li>
    </ul>
    <p>Useful:</p>
    <ul>
        <li><a href="https://remix.ethereum.org/"></a><a href="https://remix.ethereum.org/">https://remix.ethereum.org/</a>&nbsp; &nbsp;(quickly write solidity online)</li>
        <li><a href="https://ethereum.org/en/developers/docs/"></a><a href="https://ethereum.org/en/developers/docs/">https://ethereum.org/en/developers/docs/</a>&nbsp; &nbsp; (open source eth documentation)</li>
        <li><a href="https://docs.soliditylang.org/en/v0.8.1/solidity-by-example.html"></a><a href="https://docs.soliditylang.org/en/v0.8.1/solidity-by-example.html">https://docs.soliditylang.org/en/v0.8.1/solidity-by-example.html</a>&nbsp; &nbsp; (example solidity code)</li>
        <li><a href="https://docs.soliditylang.org/en/v0.8.1/index.html"></a><a href="https://docs.soliditylang.org/en/v0.8.1/index.html">https://docs.soliditylang.org/en/v0.8.1/index.html</a>&nbsp; &nbsp; (solidity documentation)</li>
        <li>commands:<ul>
                <li>docker run ethereum/solc:stable --help &nbsp; (create docker image, latest version for specific versions replace &quot;stable&quot; with version number)</li>
                <li>docker run -v /var/folders:/sources ethereum/solc:stable -o /sources/output --abi --bin /sources/Contract.sol &nbsp; &nbsp;(Docker image to compile Solidity files)</li>
            </ul>
        </li>
    </ul>
    <p>Musings</p>
    <ul>
        <li>resource given was for linux and found some errors, to install solidity use: <a href="https://docs.soliditylang.org/en/latest/installing-solidity.html#building-from-source"></a><a href="https://docs.soliditylang.org/en/latest/installing-solidity.html#building-from-source">https://docs.soliditylang.org/en/latest/installing-solidity.html#building-from-source</a></li>
    </ul>
  </Block>
)


const Deploying = () => (
  <Block>
    <h1>Deploying Smart Contracts</h1>
    <p>Thankfully I already had a metamask setup and just needed to connect to the Kovan network, unfortunately the icarus(SMS verification) faucet website was down so I send a request to the gitter faucet instead. While I wait to get Kovan I will use the Ropsten network instead.</p>
    <p>Reading data on the blockchain does not need any transactions (writing) or fees. Because only modifying the state of the blockchain requires to make a transaction</p>
    <p>to deploy to network, change environment to injected web3 from JavaScript VM</p>
    <ul>
        <li>First ever deployed contract: <a href="https://ropsten.etherscan.io/tx/0x232aaec34d3ba372226231e53abb3cba9f01082aa3d761d950b73e04b4a813b5"></a><a href="https://ropsten.etherscan.io/tx/0x232aaec34d3ba372226231e53abb3cba9f01082aa3d761d950b73e04b4a813b5">https://ropsten.etherscan.io/tx/0x232aaec34d3ba372226231e53abb3cba9f01082aa3d761d950b73e04b4a813b5</a></li>
        <li>Me modifying the contract: <a href="https://ropsten.etherscan.io/tx/0x96f76390478cf13316aa9b55c10bdfd12daaf1f863f790520f17ca97a0c129d9"></a><a href="https://ropsten.etherscan.io/tx/0x96f76390478cf13316aa9b55c10bdfd12daaf1f863f790520f17ca97a0c129d9">https://ropsten.etherscan.io/tx/0x96f76390478cf13316aa9b55c10bdfd12daaf1f863f790520f17ca97a0c129d9</a></li>
    </ul>
    <p>After looking at all the examples I want to write a smart contract that we can gamble our fake eth</p>
    <p>Useful:</p>
    <ul>
        <li><a href="https://kovan-testnet.github.io/website/"></a><a href="https://kovan-testnet.github.io/website/">https://kovan-testnet.github.io/website/</a> (testnet, many useful links including faucets)</li>
        <li><a href="https://ropsten.etherscan.io/"></a><a href="https://ropsten.etherscan.io/">https://ropsten.etherscan.io/</a>&nbsp; &nbsp; (etherscan in general will be super useful)</li>
    </ul>
  </Block>
)

const Casino = () => (
  <Block>
    <h1>CoinFlip Smart Contract with House Edge</h1>
    <p>Requirements:</p>
    <ol>
        <li>Only the address that deploys contract can withdraw money</li>
        <li>Be able to pseudorandomly generate a random number</li>
        <li>Send money to contract and have a chance to receive double (49%) or lose it all</li>
    </ol>
    <p>Making this contract I learnt about:</p>
    <ul>
        <li>how contracts can have balances and how to interact with sender and owner addresses</li>
        <li>getting and setting values</li>
        <li>solidity syntax (if, require, constructor, functions...)</li>
    </ul>
    <p>I have deployed my casino with 5eth on the Ropsten network here:</p>
    <p><a href="https://ropsten.etherscan.io/address/0x90313e55139affc3500279458427ca95cbed9edb"></a><a href="https://ropsten.etherscan.io/address/0x90313e55139affc3500279458427ca95cbed9edb">https://ropsten.etherscan.io/address/0x90313e55139affc3500279458427ca95cbed9edb</a></p>
    <p>See if you can beat the casino and drain the contract! (I&apos;ll add it to Kovan when I get some keth)</p>
    <img src="../assets/casino.jpg"></img>
  </Block>
)

function App() {
  return (
      <Wrap>
      <Primary>
        <Casino/>
        <Deploying/>
        <SetUp/> 
        <Intro/>
        <Init/>
      </Primary>
      </Wrap>      
  );
}

export default App;
