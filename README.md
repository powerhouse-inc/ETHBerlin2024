# ETHBerlin2024 Project submission

## Project Name: Powerhouse x Ubiquity DAO

### Problem

Web3 identities are not that valuable in their current shape & form. Because we are unable to DO much with them after creation.

What do we unlock with our identity?
What do we gain with our identity?
How do we grow our identity?
Where is the utility of my identity?


Identities only become valuable INSIDE a specific context. Especially in Web3, where Identity is in the eye of the beholder. (Giga brains vs. Degens)

Solution
We’ve built a decentralized operations toolkit that allows us to pick up any type of social signals based on the contribution behaviour of the DAO participants.

By running our system on document models which turn any action into a historic document event (FLUX/event sourcing) we can attach a user’s Decentralised Identifier to the executed operations.

### This allows us to:

Verify who changed what & when and use this as source data for attestations or verifiable credentials.
Keep track of the historic changes in documents or project initiatives and deliverables
Calculates someone’s contribution efforts and progress across time.
Reach eventual consistencies across all clients & devices subscribed to the network.

### New Possibilities Arise

With this behavior & social signaling system in place we can unlock new verifiable identity opportunities, such as:

Retroactively reward a contributor, once a project gets traction, is released or goes viral based on their contribution details.
Implement social validation & approval systems of peers or DAO’s to recognise & verify your contributions once they are delivered
Bridge your contributions and experience points from DAO 1 to DAO 2 and make them count across networks.
Allow communities to decide on which social signals are most supportive to the communities purpose and set up customisable reputation scores.

### Demo Scenario

For our hackathon project we chose to demonstrate the following scenario.

As DAO’s get onboarded to the Powerhouse Platform, work, opportunities & relevant contexts will emerge in which a decentralized pseudonymous identity becomes valuable & gains actual utility. By keeping track of behavioral & social signals we can unlock a decentralized identity that is valuable within a context that is alive. It’s in these contexts that your ‘Pro-Sona’ will start to gather reputation across different organizations.

Sign up as an anonymous contributor & setup your ‘Pro-Sona’ character with Renown. 
Use this character to access new work opportunities for DAO’s.
Find a Scope of work document and a deliverable to work on.
Complete the work in Github & get paid after an automated code review without KYC or AML.
See your contributions get recognised and picked up by the system
See your pseudonymous ‘pro-sona’ skill set, identity & reputation grow within a relevant context!
Challenges we ran into
Building & implementing the scope of work document model with it’s reducers. Setting up API listeners for the connection between Powerhouse & Ubiquity.

Technology used in chronologic order
Renown Login Flow making use of Decentralised Identifiers & Verifiable credentials + Ceramic Network for verifiable Data Storage
Powerhouse Connect & Document model editor to build the scope of work document model reducers 
React component testing with storybook. 
Powerhouse Synchronisation protocol to synchronise the document model with the remote server node on switchboard
Switchboard to establish a connection with github API
Ubiquity DevPool flow to complete Github issue & payment of the contributor
Figma Prototyping for design concept of pro-sona creation. 
