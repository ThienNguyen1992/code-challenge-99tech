# Guide to improve source code

# 1.

    - Avoid redundant declarations. Use "extends" to reuse declared interfaces
    - Add a blockchain field to WalletBalance:
        +  blockchain: SupportedBlockchain

# 2. BoxProps

    - BoxProps is not defined. Provide type for BoxProps
    - Props extends BoxProps and Explicitly add "children" props

# 3. getPriority

    - Add a type for blockchain
    - Use a type for the input of the "getPriority" function
    - Define the blockchain values as BLOCKCHAINS
    - Define the corresponding values for the blockchain as BLOCKCHAINS_VALUES
    - Refactor the "getPriority" function

# 4.

    - Add type for balances variable: WalletBalance[]

# Refactor : sortedBalances

    - Improve way to filter
    - Improve way to sort
    - Remove prices from dependency

# 6. Create Wallet
