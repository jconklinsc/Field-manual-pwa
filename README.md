# Field Manual PWA

A calm, offline-ready manual you carry.

## Run
```bash
npm install
npm run dev
```

## Node version
Use Node.js 18 LTS (recommended) or Node.js 20 LTS. An `.nvmrc` file is provided:
```bash
nvm use
```

Because this app is on Next.js 9 (webpack 4), the dev/build scripts set
`NODE_OPTIONS=--openssl-legacy-provider` to keep OpenSSL 3 compatibility. This is a
temporary workaround until the dependencies are upgraded.

## Build
```bash
npm run build
npm run start
```

## Deploy
Import the repo into Vercel (Next.js auto-detected) and deploy.

## Notes
- PWA is enabled in production builds via `next-pwa`.
- In development, PWA is disabled to avoid cache confusion.
