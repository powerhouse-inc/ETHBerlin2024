# Behavior based reputation building for DAO contributors

## ETHBerlin2024 Project submission

## Powerohuse x Ubiquity DAO

Despite exciting developments, the true potential of reputation systems in web3 remains untapped due to insufficient on-chain activity data and contextual information. 

We present an example use case with the Powerhouse decentralized operations toolkit that shows how systematically capturing DAO data can elevate reputation systems to the next level.

### Problem

Reputation systems in web3 today remain largely ineffective because they are based on a very limited set of behavioral data available on-chain. 

POAPs, financial transactions and NFT ownership lack the necessary context and depth to serve as a reliable basis for reputation building.

The true potential of pseudonymous, reputation-based systems can only be unlocked by not just capturing all relevant activity in the network, but by making it readily available for reputation building.

### Solution

Powerhouse is developing a decentralized operations toolkit that can capture any social signal based on the contribution behaviors of DAO participants.

These social signals are contextualized by the specific identity behaviors and the peer/social context in which they occur.

By using distributed document models, our system converts all contributor activity into events that can be published on-chain. We then attach a user's decentralized identifier (DID) to the captured behavior, linking it to their pseudonymous reputation.

### New Possibilities Arise

With this behavior & social signaling system in place we can unlock new verifiable identity opportunities, such as:

Retroactively reward a contributor, once a project gets traction, is released or goes viral based on their contribution activity.
Implement social validation & approval systems of peers or DAO’s to recognise & verify your contributions once they are delivered
Bridge your contributions and experience points from DAO 1 to DAO 2 and make them count across networks.
Allow communities to decide on which social signals are most supportive to the community’s purpose and set up customisable reputation scores.

### Demo Scenario

For our hackathon project we chose to demonstrate the following scenario in collaboration with Ubiquity DAO:

Sign up as an anonymous contributor & set up your contributor profile. 
Browse through the roadmaps that DAO governance have approved and find deliverables to work on.
Complete the work in a familiar Github environment and get paid after an automated code review, without KYC/AML for small contributions.
See your contributions get recognised and picked up by the system
See your pseudonymous skill set, identity & reputation grow within a relevant context!

### Challenges we ran into

Building & implementing the scope of work document model with its reducers. Setting up API listeners for the connection between Powerhouse & Ubiquity.

### Technology used in chronological order

1. Figma Prototyping for design concept of profile creation. 
2. Powerhouse Renown Login Flow making use of Decentralised Identifiers &   Verifiable credentials + Ceramic Network for verifiable Data Storage
3. Powerhouse Connect & document model editor to build the scope of work document model reducers (deliverables list)
4. React component testing with storybook. 
5. Powerhouse Synchronisation protocol to synchronise the document model with the remote server node on switchboard
6. Switchboard to establish a connection with github API
7. Ubiquity DevPool flow to complete Github issue & payment of the contributor
8. Figma Prototyping for the design concept of profile growth.