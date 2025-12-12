import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>

          {/* ============================== */}
          {/*         BASE PWA SETTINGS       */}
          {/* ============================== */}

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0f1111" />

          {/* ============================== */}
          {/*        iOS PWA SUPPORT         */}
          {/* ============================== */}

          {/* Home Screen Icon */}
          <link rel="apple-touch-icon" href="/192fm.png" />

          {/* Enable standalone (full-screen) mode on iOS */}
          <meta name="apple-mobile-web-app-capable" content="yes" />

          {/* Controls status bar appearance */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          {/* App title shown under the icon */}
          <meta name="apple-mobile-web-app-title" content="Field Manual" />

          {/* ============================== */}
          {/*         iOS SPLASH SCREENS     */}
          {/* ============================== */}

          {/* Uses your 512px icon as universal splash screen */}
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 320px) and (device-height: 568px)" />
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 375px) and (device-height: 667px)" />
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 414px) and (device-height: 736px)" />
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 375px) and (device-height: 812px)" />
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 414px) and (device-height: 896px)" />
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 390px) and (device-height: 844px)" />
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 393px) and (device-height: 852px)" />
          <link rel="apple-touch-startup-image" href="/512fm.png" media="screen and (device-width: 428px) and (device-height: 926px)" />

          {/* ============================== */}
          {/*  SERVICE WORKER REGISTRATION   */}
          {/* ============================== */}

          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker
                      .register('/sw.js')
                      .catch(err => console.log('SW registration failed:', err));
                  });
                }
              `
            }}
          />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}

export default MyDocument;
