# Creating a developer account

On ICP developers accounts, or **identities**, use a private/public key pair for authentication. Accounts are identified by a **principal** which is a generic identifier value that is used for users, canisters, and potentially other future concepts. Each developer account's principal value is derived from the account's public key from the private/public key pair. 

ICP developer accounts can be compared to a Bitcoin or Ethereum wallet address. One primary difference, however, is that ICP accounts do not have an initial balance. 

## ICP identity terms

Other ICP identity-related terms you may come across include:

- Ledger account identifier: The identifier associated with your ICP ledger account.

- Wallets: Used to store forms of currency. Developers primarily use a cycles wallet to send cycles to and from canisters.

- Internet Identity: ICP's native authentication service. Internet Identity doesn't use usernames and passwords; instead it uses a passkey that is stored in your local device's hardware.

## Creating your account

To create a new developer account, use the [IC SDK](install/index.mdx) tool dfx:

```
dfx identity new <identity_name>
```

Identities created with dfx are global; they are not confined to a specific project's context. Identity names must use the characters `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.-_@0123456789`.

### Storing the account's keys

When a new identity is created with dfx, the private key is stored in the `~/.config/dfx/identity/<identity_name>/identity.pem` file. This file should be backed up to a secure location.

The `--storage-mode` flag is available, which can be used to create a password-protected or plaintext PEM file instead. These flags can be used such as:

```
dfx identity new <identity_name> --storage-mode password-protected
```

or:

```
dfx identity new <identity_name> --storage-mode plaintext
```

## Getting your account principal

To obtain the principal identifier for your account, use the commands:

```
dfx identity use <identity_name>
dfx identity get-principal
```

## Import an existing account

To import an existing PEM file to be used for your identity, use the command:

```
dfx identity import <identity_name> pem_file-name
```

This command supports the `--storage-mode` flag as well, allowing for importing password-protected or plaintext PEM files.

## How to top up the ICP balance of your account

Once you have a developer account, you will need to top up the account with ICP. First, get your account's ledger account id:

```
dfx identity use <identity_name>
dfx ledger account-id
```

This will return your account number on the ICP ledger:

```
e213184a548871a47fb526f3cba24e2ee2fbbc8129c4ab497ef2ce535130a0a4
```

This account id is where you will need to send ICP tokens. To obtain ICP tokens, you can use several methods:

- Purchase ICP tokens directly through an exchange.

- Receive tokens as rewards for participating in the governance of the Internet Computer.

- Receive a grant of tokens through the Internet Computer Association (ICA) or the DFINITY Foundation.

- Receive tokens as remuneration for providing computing capacity as a node provider.


Once you have received ICP tokens into your account, you can see the balance using this command:

```
dfx ledger --network ic balance
```

This will output something like this:

```
19.420000 ICP
```

## Next steps 

Next, learn about [cycles and how to acquire them](./cycles/cycles-faucet.md).