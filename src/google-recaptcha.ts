import React from 'react';
import { GoogleRecaptchaType, MergeWindowAndGrecaptcha } from './types/hook';

export const useGoogleRecaptcha = (siteKey: string): GoogleRecaptchaType => {
  const [token, setToken] = React.useState('');

  const createToken = () => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;

    script.addEventListener('load', () => {
      (window as MergeWindowAndGrecaptcha).grecaptcha.ready(() => {
        (window as MergeWindowAndGrecaptcha).grecaptcha
          .execute(siteKey)
          .then((token) => setToken(token));
      });
    });
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    createToken();
  }, []);

  return { token, regenerate: createToken };
};
