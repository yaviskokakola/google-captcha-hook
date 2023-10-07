<div align="center">
<h1>Google Captcha Hook</h1>
invisible google captcha hook for React & Next.js
</div>

<div align="center">
<img src="https://img.shields.io/badge/downloads-1.2k-blue">
<img src="https://img.shields.io/static/v1?label=minzipped&message=0.6kb&color=%23219c6e">
</div>

## 📦 Installation

`npm i google-captcha-hook`

`yarn add google-captcha-hook`

`pnpm add google-captcha-hook`

`bun i google-captcha-hook`

## ✨ Feature list

- [x] Typescript support
- [x] Regenerate Token
- [x] Super minimal package

## 📝 Usage

```jsx
import { useGoogleRecaptcha } from 'google-captcha-hook';

export const App = () => {
  const { token } = useGoogleRecaptcha('your google recaptcha v3 site key');
};
```

## 📄 API

in [reCaptcha](https://www.google.com/recaptcha/about/) create v3 google recaptcha copy your site key and pass to argument of hook

```jsx
const { token } = useGoogleRecaptcha(SITE_KEY);
```

| Name       | Type         | Description                            |
| ---------- | ------------ | -------------------------------------- |
| token      | string       | generated token by google v3 recaptcha |
| regenerate | `() => void` | regenerate token if it expired or not  |

