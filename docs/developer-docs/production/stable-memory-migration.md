# How to migrate data from Wasm to stable memory

A canister can store its data either in the Wasm memory or in the stable memory.
These memories differ in capacity, durability, and developer experiences:

- capacity: the Wasm memory is 32-bit and limited by 4GiB; the stable memory is 64-bit and can grow to hundreds of GiBs.
- durability: the Wasm memory is cleared on canister upgrades; the stable memory persists across upgrades. 
- developer experience: the Wasm memory is the native memory of the application, so using it is as easy as allocating and accessing regular objects and arrays; the stable memory can be accessed via its API or helper libraries such as stable-structures.

One of the best practices is to store user data in the stable memory for scalability and robustness.
This guide explains how developer can migrate their existing Rust canisters to use stable memory instead of the Wasm memory.

# Step 1: Ensure that upgrade and rollback tests are in place

Before starting migrating the production canister, it is a good idea to ensure that migration works well in local tests.
You can further increase safety by testing that rolling back the migration is possible if something goes wrong.
The recommended framework for testing canister upgrades and downgrades is [PocketIC](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/test/pocket-ic).
The tests should cover the following scenarios:

- Upgrading to the new Wasm binary and running data migration works.
- Downgrading to the old Wasm binary and reverting data changes works.
- Downgrading part way through the migration works.

# Step 2: Use stable-structures and its virtual memories

The recommended library for working with the stable memory in Rust canisters is [stable-structures](https://github.com/dfinity/stable-structures).
This library has a feature called virtual memories that allows the developer to create multiple virtual stable memories on top of one stable memory.
You can make the main migration safer by reserving one virtual memory to be use by the existing pre- and post-upgrade hooks for serializing and deserializing data.
That way if something goes wrong during the main migration, you would still have all the data in the reserved virtual memory.

# Step 3: Decide between atomic migration and incremental migration

If you canister does not have a lot of data and it is possible to complete all migration in the post-upgrade hook without exceeding the instruction limit, then that is the safest way to do the migration.
That's because if something goes wrong, then the system guarantees to roll back all state changes that happened during the upgrade.

If an atomic migration is not possible, then you need to prepare for an incremental migration, which happens in chunks after upgrading to the new Wasm binary.

# Step 4: Define a data storage trait (only for incremental migration)

You need to abstract away the data storage so that you can swap out one data storage for another. An example of such a trait in the NNS dapp: [code](https://github.com/dfinity/nns-dapp/blob/87df24860d5946de9117139c0b5515c77c754a12/rs/backend/src/accounts_store/schema.rs#L44).

# Step 5: Insert a proxy between the data storage and its consumers (only for incremental migration)

While the migration is in progress, you need some mechanism to decide where data is stored.
This can be achieved using a proxy that connects data storage with its consumers.
The proxy keeps track of the migration progress and knows where each piece of data is stored.
An example of a proxy in the NNS dapp: [code](https://github.com/dfinity/nns-dapp/blob/87df24860d5946de9117139c0b5515c77c754a12/rs/backend/src/accounts_store/schema/proxy.rs#L28).


# Step 6: Define the migration

Once all preparations are in place, the migration itself is easy: copy some values from the old storage to the new one, then update the migration pointer to know where to start the next step.
This logic can be implemented as a timer or a heartbeat task.
If there is nothing left to migrate, run sanity checks and complete the migration.
An example of migration in the NNS dapp: [code](https://github.com/dfinity/nns-dapp/blob/87df24860d5946de9117139c0b5515c77c754a12/rs/backend/src/accounts_store/schema/proxy/migration.rs#L66).

# Step 7: Define the trigger to start the migration

You can start the migration either in the post-upgrade hook or in a timer/heartbeat task or in an update endpoint.
The simplest approach is to start the migration in the post-upgrade hook.