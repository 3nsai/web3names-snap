# @3nsai/web3names-snap

This repository demonstrates how to develop a snap with TypeScript. For detailed instructions, see [the MetaMask documentation](https://docs.metamask.io/guide/snaps.html#serving-a-snap-to-your-local-environment).

MetaMask Snaps is a system that allows anyone to safely expand the capabilities of MetaMask. A _snap_ is a program that runs in an isolated environment and can customize the wallet experience.

## Snaps is pre-release software

To interact with (your) Snaps, you will need to install [MetaMask Flask](https://metamask.io/flask/), a canary distribution for developers that provides access to upcoming features.

## Getting Started

Clone the web3names-snap repository [using this template](https://github.com/3nsai/web3names-snap/generate) and set up the development environment:

```shell
yarn install && yarn start
```

## Installing Snap in MetaMask

To install the web3names-snap in MetaMask, use the following code:

```javascript
await window.ethereum.request({
  method: 'wallet_requestSnaps',
  params: {
    'npm:@3nsai/web3names-snap': {},
  },
});
```

## Changing the Redirect URL

To change the redirect URL, edit the `/packages/snap/src/components/Search.tsx` file and update the URL as needed.

## Cloning

This repository contains GitHub Actions that you may find useful; see `.github/workflows` and [Releasing & Publishing](https://github.com/3nsai/web3names-snap/edit/main/README.md#releasing--publishing) below for more information.

If you clone or create this repository outside the MetaMask GitHub organization, you may want to run `./scripts/cleanup.sh` to remove some files that will not work properly outside the MetaMask GitHub organization.

If you don't wish to use any of the existing GitHub actions in this repository, simply delete the `.github/workflows` directory.

## Publishing Snap on NPM

Before publishing, read the steps carefully from the official MetaMask documentation here: [How to Publish a Snap](https://docs.metamask.io/snaps/how-to/publish-a-snap/).

Steps to publish the snap on NPM:

```bash
npm login
npm publish --access public
```

## Contributing

### Testing and Linting

Run `yarn test` to run the tests once.

Run `yarn lint` to run the linter, or run `yarn lint:fix` to run the linter and fix any automatically fixable issues.

### Using NPM packages with scripts

Scripts are disabled by default for security reasons. If you need to use NPM packages with scripts, you can run `yarn allow-scripts auto`, and enable the script in the `lavamoat.allowScripts` section of `package.json`.

See the documentation for [@lavamoat/allow-scripts](https://github.com/LavaMoat/LavaMoat/tree/main/packages/allow-scripts) for more information.
