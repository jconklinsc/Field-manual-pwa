import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Base PWA Manifest */}
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0f1111" />

          {/* ============================== */}
          {/*        iOS PWA SUPPORT         */}
          {/* ============================== */}

          {/* iOS Home Screen Icon */}
          <link rel="apple-touch-icon" href="/192fm.png" />

          {/* iOS Fullscreen Mode */}
          <meta name="apple-mobile-web-app-capable" content="yes" />

          {/* iOS Status Bar Style */}
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

          {/* Home Screen Title */}
          <meta name="apple-mobile-web-app-title" content="Field Manual" />

          {/* iOS Splash Screen (basic version) */}
          <link rel="apple-touch-startup-image" href="/512fm.png" />

          {/* ============================== */}
          {/*     Service Worker Support      */}
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
          {/* Android "Install App" banner is added dynamically */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
