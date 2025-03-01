# 0.3 Developer environment setup

<iframe width="560" height="315" src="https://www.youtube.com/embed/fDMHUdo7m-k?si=FM4z1NwVGYUUyH1t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Overview

Before you can begin our developer journey, you need to set up our developer environment. A developer environment consists of tools and packages that are required to develop code projects. Usually, developer environments are stored and hosted on your local computer, but there are some situations where a virtual, web-based development environment exists. 

An example of this is the [Motoko Playground](https://m7sm4-2iaaa-aaaab-qabra-cai.ic0.app/), which is a web-based, virtual developer environment that can be used by developers without having to set up a local environment. The Motoko Playground has several restrictions, however, and it isn't recommended to be used for workflows other than simple, small-scale testing. 

## Setting up your developer environment

### Confirm you have a connection to the internet

To follow along with the developer journey and develop on the Internet Computer, you will need a connection to the internet. 

#### Why does this matter?

You will need an internet connection to download a few different tools and packages, as described further in this document. You will also need an internet connection whenever you plan to deploy your canister to the mainnet. You do not need an internet connection to deploy your canister to your local execution environment.

### Confirm you have access to a command line interface (CLI) on your local macOS or Linux computer

Open a command line interface (CLI) window. This may be referred to as 'Terminal' or 'Shell' depending on your computer's operating system. In this documentation, this is often referred to as the 'terminal window'. 

#### Why does this matter?

You will primarily be using CLI-based tools, such as `dfx` and `git`, in this developer journey. 

#### Options for Windows users

`dfx` is not natively supported on Windows. To download `dfx` on Windows, you will need to download the Windows Subsystem for Linux. You can learn more [here](/docs/developer-docs/setup/install/index.mdx).

### Download and install the IC SDK

To download and install the IC SDK, first open a terminal window. Then, run the following command in that window:

```
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

This command will prompt you to read and accept the license agreement before the install begins. Type `y`, then press `Return` to accept the agreement and begin the installation. 

:::info
If you are using a machine running Apple silicon, you will need to have Rosetta installed. You can install [Rosetta](https://support.apple.com/en-us/HT211861) by running `softwareupdate --install-rosetta` in your terminal.
:::

Then, to verify that the IC SDK is ready to use, run the following command:

```
dfx --version
```

This command should output information about the latest version of `dfx`. This output indicates that the installation has been successful, and that `dfx` is ready to use. 

#### Why does this matter?

The IC SDK is composed of several components that are required for developing on the Internet Computer. These components are:

- `dfx`: The CLI tool used to interact with and develop canisters on ICP. Motoko is included in the installation of dfx. 
- `moc`: The Motoko runtime compiler. 
- `replica`: The Internet Computer's local network binary. 

### Download and install a code editor

To write and edit code, you will need a code editor. macOS and Linux systems come with some basic editors, such as `vi` or `nano`, but these have very limited functionality and can be hard to use. 

It is recommended that you use [Visual Studio Code](https://code.visualstudio.com/download), as it is a popular choice and there is a [Motoko extension](https://github.com/dfinity/vscode-motoko) that provides additional tools for Motoko development. 

#### Why does this matter?

Code editors are a core component to writing and developing code. 

### Download and install git

Download and install [git](https://git-scm.com/downloads). 

#### Why does this matter?

Many of the DFINITY public repositories are hosted on Github, such as our `examples` repository. You will be using code from this repository later in the developer journey, so it is important to install `git` to assure that you can download the sample code pieces and follow along with the later tutorials. 

### Download and install Node.js

Download and install [node.js](https://nodejs.org/en).

#### Why does this matter?

Node.js is used by `dfx` to generate frontend code and dependencies. It is not required for dapps that do not contain a frontend interface, though it is required for you to follow along with this developer journey series, since you will explore frontend canisters in a later tutorial. 

### Assure all packages and tools are updated to the latest release versions

If you have followed this guide and installed each of these tools for the first time, you will have the most recent release versions installed.

If you previously had installed any of these tools, be sure to check the most recent release version and update them if needed. 
#### Why does this matter?

Having the latest release version assures that you have all of the newest features and bug fixes for each tool to assure for the most seamless developer experience. 

### Create a working directory

The last step in setting up our developer environment is to create a new directory for you to build in. You can create a new directory with the command:

```
mkdir developer_journey
```

In future modules, you'll refer to this directory as the **working directory**. Each project that you create will be a *sub-directory* of this working directory.

#### Why does this matter?

You'll use this working directory to contain the projects that you build throughout your developer journey. This will help keep things organized in our local file structure. 

## Need help?

Did you get stuck somewhere in this tutorial, or feel like you need additional help understanding some of the concepts? The ICP community has several resources available for developers, like working groups and bootcamps, along with our Discord community, forum, and events such as hackathons. Here are a few to check out:

- [Developer Discord community](https://discord.com/invite/cA7y6ezyE2), which is a large chatroom for ICP developers to ask questions, get help, or chat with other developers asynchronously via text chat. 

- [Developer journey forum discussion](https://forum.dfinity.org/t/developer-journey-feedback-and-discussion/23893).

- [Developer tooling working group](https://www.google.com/calendar/event?eid=MHY0cjBubmlnYXY1cTkzZzVzcmozb3ZjZm5fMjAyMzEwMDVUMTcwMDAwWiBjX2Nnb2VxOTE3cnBlYXA3dnNlM2lzMWhsMzEwQGc&ctz=Europe/Zurich).

- [Motoko Bootcamp - The DAO Adventure](https://github.com/motoko-bootcamp/dao-adventure) - Discover the Motoko language in this 7 day adventure and learn to build a DAO on the Internet Computer.

- [Motoko Bootcamp - Discord community](https://discord.gg/YbksCUxdzk) - A community for and by Motoko developers to ask for advice, showcase projects and participate in collaborative events.

- [Motoko developer working group](https://www.google.com/calendar/event?eid=ZWVnb2luaHU0ZjduMTNpZHI3MWJkcWVwNWdfMjAyMzEwMTJUMTUwMDAwWiBjX2Nnb2VxOTE3cnBlYXA3dnNlM2lzMWhsMzEwQGc&ctz=Europe/Zurich).

- [Upcoming events and conferences](https://dfinity.org/events-and-news/).

- [Upcoming hackathons](https://dfinity.org/hackathons/).

- [Weekly developer office hours](https://discord.gg/4a7SZzRk?event=1164114241893187655) to ask questions, get clarification, and chat with other developers live via voice chat. This is hosted on our [developer Discord](https://discord.com/invite/cA7y6ezyE2) group.

- Submit your feedback to the [ICP Developer feedback board](http://dx.internetcomputer.org).

## Next steps

- [0.4 Introduction to canisters](04-intro-canisters.md).
