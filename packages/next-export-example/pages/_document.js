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

          <link rel="apple-touch-icon" href="/192fm.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Field Manual" />

          {/* ============================== */}
          {/*       iOS SPLASH SCREENS       */}
          {/* ============================== */}

          {/* --- iPhone Portrait --- */}
          <link rel="apple-touch-startup-image" href="/splash/iphone-se-1.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-6-7-8.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-6p-7p-8p.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-x.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-xr.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-xs-max.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-12.png" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-12-pro-max.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-14-pro.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-14-pro-max.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-15-pro.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-15-plus.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-15-pro-max.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />

          {/* --- iPhone Landscape --- */}
          <link rel="apple-touch-startup-image" href="/splash/iphone-se-1-landscape.png" media="(device-width: 568px) and (device-height: 320px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-6-7-8-landscape.png" media="(device-width: 667px) and (device-height: 375px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-6p-7p-8p-land.png" media="(device-width: 736px) and (device-height: 414px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-x-land.png" media="(device-width: 812px) and (device-height: 375px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-xr-land.png" media="(device-width: 896px) and (device-height: 414px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-xs-max-land.png" media="(device-width: 896px) and (device-height: 414px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-12-land.png" media="(device-width: 844px) and (device-height: 390px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-12-pro-max-land.png" media="(device-width: 926px) and (device-height: 428px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-14-pro-land.png" media="(device-width: 852px) and (device-height: 393px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-14-pro-max-land.png" media="(device-width: 932px) and (device-height: 430px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-15-pro-land.png" media="(device-width: 852px) and (device-height: 393px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-15-plus-land.png" media="(device-width: 932px) and (device-height: 430px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/iphone-15-pro-max-land.png" media="(device-width: 932px) and (device-height: 430px) and (orientation: landscape)" />

          {/* --- iPad Portrait --- */}
          <link rel="apple-touch-startup-image" href="/splash/ipad-9-7.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/ipad-pro-10.png" media="(device-width: 834px) and (device-height: 1112px) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/ipad-pro-11.png" media="(device-width: 834px) and (device-height: 1194px) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="/splash/ipad-pro-12-9.png" media="(device-width: 1024px) and (device-height: 1366px) and (orientation: portrait)" />

          {/* --- iPad Landscape --- */}
          <link rel="apple-touch-startup-image" href="/splash/ipad-9-7-land.png" media="(device-width: 1024px) and (device-height: 768px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/ipad-pro-10-lan.png" media="(device-width: 1112px) and (device-height: 834px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/ipad-pro-11-land.png" media="(device-width: 1194px) and (device-height: 834px) and (orientation: landscape)" />
          <link rel="apple-touch-startup-image" href="/splash/ipad-pro-12-9-land.png" media="(device-width: 1366px) and (device-height: 1024px) and (orientation: landscape)" />

          {/* ============================== */}
          {/*     SERVICE WORKER            */}
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
