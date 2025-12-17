import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AppProvider } from '../components/AppStore';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleDone = () => setIsTransitioning(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleDone);
    router.events.on('routeChangeError', handleDone);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleDone);
      router.events.off('routeChangeError', handleDone);
    };
  }, [router]);

  return (
    <AppProvider>
      <div
        style={{
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 200ms ease',
        }}
      >
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
