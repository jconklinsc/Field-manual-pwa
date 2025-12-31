Example application using `next-offline` with Next's [Static HTML App](https://nextjs.org/learn/excel/static-html-export) mode.

## Node version
Use Node.js 18 LTS (recommended) or Node.js 20 LTS. The repo includes an `.nvmrc`
file at the root for `nvm use`.

Because this project uses Next.js 9 (webpack 4), the dev/build scripts set
`NODE_OPTIONS=--openssl-legacy-provider` as a temporary OpenSSL 3 workaround.

```sh
$ yarn install
$ yarn dev
```
