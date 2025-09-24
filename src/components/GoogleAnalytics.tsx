import { useEffect } from 'react';

const GoogleTag = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-997987829';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'AW-997987829');
    };
  }, []);

  return null;
};

export default GoogleTag;


