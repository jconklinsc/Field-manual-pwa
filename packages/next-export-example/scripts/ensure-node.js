const majorVersion = Number(process.versions.node.split('.')[0]);

if (Number.isNaN(majorVersion)) {
  console.error('Unable to detect the active Node.js version.');
  process.exit(1);
}

if (majorVersion >= 22) {
  console.error(
    [
      'Unsupported Node.js version detected.',
      `You are running Node ${process.versions.node}.`,
      'This project uses Next.js 9 (webpack 4), which is incompatible with OpenSSL 3 defaults in Node 22.',
      'Please use Node 18 LTS (recommended) or Node 20 LTS.',
      'Tip: run `nvm use` after installing the version listed in the repo .nvmrc file.'
    ].join(' ')
  );
  process.exit(1);
}

if (majorVersion < 18) {
  console.warn(
    [
      'Warning: Node.js versions below 18 are not supported.',
      `Detected Node ${process.versions.node}.`,
      'Use Node 18 LTS (recommended) or Node 20 LTS for local development.'
    ].join(' ')
  );
}

if (majorVersion >= 17) {
  console.warn(
    [
      'Notice: This app uses webpack 4, which requires the OpenSSL legacy provider on Node 17+.',
      'The dev/build scripts set NODE_OPTIONS=--openssl-legacy-provider as a temporary workaround.',
      'Upgrade Next.js/webpack to remove this requirement when feasible.'
    ].join(' ')
  );
}
